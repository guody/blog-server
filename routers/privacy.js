/**
 * 需要用户登录权限
 */
const router = require('koa-router')()

const menuController = require('../controller/menuController')

//添加根目录
router.get('/insertmenu', menuController.insertMenu)
//添加分类
router.get('/insertcategory', menuController.insertCategory)

module.exports = router