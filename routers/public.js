/** 
 * 公共类接口，不需要登录权限
*/

const router = require('koa-router')()
// var Menu = require('../model/menu')

// router.get('/',async (ctx,next)=>{
//     var a = await Menu.create({
//         menuName:'其他'
//     })
//     ctx.body = a;
// })

module.exports = router;