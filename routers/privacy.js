/**
 * 需要用户登录权限
 */
const router = require('koa-router')()

const menuController = require('../controller/menuController')
const userController = require('../controller/userController')

const adminMenuController = require('../controller/adminMenuController')

// 用户注销
router.post('/logout', userController.logout)

//添加文章目录
router.post('/insertmenu', menuController.insertMenu)
//删除文章目录
router.post('/deleteMenu', menuController.deleteMenu)

//添加文章分类
router.post('/insertcategory', menuController.insertCategory)

//查询admin菜单
router.get('/findAdminMenu', adminMenuController.findAdminMenu)

module.exports = router