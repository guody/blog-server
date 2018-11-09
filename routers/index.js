/**
 * 路由入口
 */
const router = require('koa-router')({prefix: '/api'})  //添加前缀 '/api'

const public = require('./public')
const privacy = require('./privacy')

// 公共类接口
router.use('/pub', public.routes(), public.allowedMethods())
// 需要用户登录权限类接口
router.use('/priv', privacy.routes(), privacy.allowedMethods())

module.exports = router;

