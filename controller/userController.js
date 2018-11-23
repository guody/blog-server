/** 
 * 用户类controller
*/
const ApiErrorNames = require('../error/ApiErrorNames');
const APIError = require('../error/ApiError').APIError;
const userService = require('../service/userService')
const logger = require('../utils/logUtil')

let login = async (ctx, next) => {
    let userData = ctx.request.body;
    logger.logInfo('用户登录信息:',userData)
    let res = await userService.login(userData);
    logger.logInfo('登录完毕：',res)
    ctx.body = res
};

module.exports = {
    login
};
