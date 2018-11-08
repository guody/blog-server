/**
 * 路由入口
 */
const router = require('koa-router')({prefix: '/api'})  //添加前缀 '/api'

const public = require('./public')
// const privacy = require('./privacy')  

router.use('/pub', public.routes(), public.allowedMethods())
// router.use('/priv', privacy.routes(), privacy.allowedMethods())

module.exports = router;

