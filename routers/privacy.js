/**
 * 需要用户登录权限
 */
const router = require('koa-router')()

const menuController = require('../controller/menuController')
const userController = require('../controller/userController')

const adminMenuController = require('../controller/adminMenuController')

// 用户注销
router.post('/logout', userController.logout)
router.post('/changePwd', userController.changePwd)

//添加文章目录
router.post('/insertmenu', menuController.insertMenu)
//删除文章目录
router.post('/deleteMenu', menuController.deleteMenu)

//添加文章分类 
router.post('/insertcategory', menuController.insertCategory)
// 删除文章分类
router.post('/deleteCategory', menuController.deleteCategory)

//编辑文章菜单
router.post('/editMenu', menuController.editMenu)
//编辑文章分类
router.post('/editCategory', menuController.editCategory)


//查询admin菜单
router.get('/findAdminMenu', adminMenuController.findAdminMenu)

module.exports = router