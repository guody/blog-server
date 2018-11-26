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
    if(userObj){
        res = {code:'0000',msg:'用户登录成功'}
    }
    logger.logInfo('登录完成.....')
    ctx.body = res
};


// 注销用户
let logout = async (ctx, next) => {
    ctx.session = null
    logger.logInfo('用户注销完成.....')
};

module.exports = {
    login,
    logout
};
