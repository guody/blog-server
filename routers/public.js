/** 
 * 公共类接口，不需要登录权限
*/

const router = require('koa-router')()
var Test = require('../model/menu')

// router.get('/', async (ctx, next) => {
//     ctx.response.body = '<h1>Index</h1>';
// });

router.get('/',async (ctx,next)=>{
    var a = await Test.create({
        name:'aaaaa----',
        age:'1'
    })
    ctx.body = a;
})

module.exports = router;