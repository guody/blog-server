/**
 * 需要用户登录权限
 */
const router = require('koa-router')()

const menuController = require('../controller/menuController')
const userController = require('../controller/userController')

// 用户注销
router.post('/logout', userController.logout)
//添加根目录
router.get('/insertmenu', menuController.insertMenu)
//添加分类
router.get('/insertcategory', menuController.insertCategory)

module.exports = router