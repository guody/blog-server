/** 
 * 管理系统菜单controller 
 */

const ApiErrorNames = require('../error/ApiErrorNames');
const APIError = require('../error/ApiError').APIError;
const adminMenuService = require('../service/adminMenuService')
const logger = require('../utils/logUtil')


// 查询菜单
let findAdminMenu = async (ctx, next) => {
    //查询根目录
    logger.logInfo('开始查询管理系统菜单...')
    let res = await adminMenuService.findAllAdminMenu();
    logger.logInfo('查询管理系统菜单结束：',res)
    ctx.body = res
};

module.exports = {
    findAdminMenu
};