/** 
 * 用户类controller
*/
const ApiErrorNames = require('../error/ApiErrorNames');
const APIError = require('../error/ApiError').APIError;
const userService = require('../service/userService')
const logger = require('../utils/logUtil')

let login = async (ctx, next) => {
    //查询根目录
    logger.logInfo('开始查询菜单...')
    let res = await menuService.findAllMenu();
    logger.logInfo('查询菜单结束：'+ res)
    ctx.body = res
};

module.exports = {
    login
};
