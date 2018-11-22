/** 
 * 公共类接口，不需要登录权限
*/

const router = require('koa-router')()
const menuController = require('../controller/menuController')
const userController = require('../controller/menuController')

// 查询菜单
router.get('/findallmenu', menuController.findAllMenu)
// 用户管理系统登录
router.get('/login', userController.login)

module.exports = router;