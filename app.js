const path = require('path')
const Koa = require('koa')
const convert = require('koa-convert')   // 兼容koa
const views = require('koa-views')      // ?
const koaStatic = require('koa-static')  // ?
const bodyParser = require('koa-bodyparser')  //处理post请求参数
const koaLogger = require('koa-logger')
const json = require('koa-json');
const redis = require('redis');
const session = require('koa-session')
const redisStore = require('koa-redis');
// const MysqlStore = require('koa-mysql-session')
const staticCache = require('koa-static-cache')
const cors = require('koa2-cors')

const config = require('./config/config')
const routers = require('./routers/index')

/**
 * 中间件
 */
const response_formatter = require('./middlewares/response_formatter');
const logPrint = require('./middlewares/log_print');  //日志输出
// const authToken = require('./middlewares/auth_token')
const authSession = require('./middlewares/sessionVerify')   // session验证

const app = new Koa()

// 配置控制台日志中间件
app.use(convert(koaLogger()))
app.use(convert(json()));
// 配置ctx.body解析中间件
app.use(bodyParser())

// 连接redis
let redisClient = redis.createClient({
    port: config.redisDB.PORT,
    host: config.redisDB.HOST,
    password: config.redisDB.PASSWORD,
    db: config.redisDB.db
});
app.keys = ['guody blog server']

// session存储配置
// const sessionMysqlConfig = {
//     user: config.database.USERNAME,
//     password: config.database.PASSWORD,
//     database: config.database.DATABASE,
//     host: config.database.HOST,
// }

// 配置session中间件
app.use(session({
    key: 'USER_SID',
    maxAge: 3600000,
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: true,
    renew: false,
    store: redisStore({client:redisClient})
},app))


// 缓存
app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
    maxAge: 365 * 24 * 60 * 60
  }))
  app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
    maxAge: 365 * 24 * 60 * 60
}))


// 配置静态资源加载中间件
app.use(convert(koaStatic(
    path.join(__dirname , '/public')
)))

// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
  }))


// log文件输出
app.use(logPrint);

// 解决跨域
app.use(cors());

//添加格式化处理响应结果的中间件，在添加路由之前调用
//仅对/api开头的url进行格式化处理
app.use(response_formatter('^/api'));

// app.use(authSession);

// 初始化路由中间件
app.use(routers.routes())
   .use(routers.allowedMethods())


app.on('error', function(err, ctx){
    console.log(err)
    logger.error('server error', err, ctx);
});

module.exports = app;