/** 
 * 公共类接口，不需要登录权限
*/

const router = require('koa-router')()
const menuController = require('../controller/menuController')

router.get('/findallmenu', menuController.findAllMenu)


module.exports = router;