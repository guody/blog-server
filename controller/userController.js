/** 
 * 用户类controller
*/
const ApiErrorNames = require('../error/ApiErrorNames');
const APIError = require('../error/ApiError').APIError;
const userService = require('../service/userService')
const logger = require('../utils/logUtil')

// 登录
let login = async (ctx, next) => {
    logger.logInfo('用户登录开始---请求入参:',ctx.request.body)
    let userObj = await userService.login(ctx);
    logger.logInfo('登录完成.....')
    ctx.body = {user:userObj}
};

// 修改密码
let changePwd = async (ctx, next) => {
    logger.logInfo('修改密码---请求入参:',ctx.request.body)
    let result = await userService.changePwd(ctx);
    logger.logInfo('密码修改完成.....')
    ctx.body = result
};


// 注销用户
let logout = async (ctx, next) => {
    ctx.session = null
    logger.logInfo('用户注销完成.....')
};

module.exports = {
    login,
    logout,
    changePwd
};
