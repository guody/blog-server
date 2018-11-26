/** 
 * 用户类controller
*/
const ApiErrorNames = require('../error/ApiErrorNames');
const APIError = require('../error/ApiError').APIError;
const userService = require('../service/userService')
const logger = require('../utils/logUtil')

let login = async (ctx, next) => {
    let userObj = await userService.login(ctx);
    if(userObj){
        res = {code:'0000',msg:'登录成功'}
    }
    ctx.body = res
};

module.exports = {
    login
};
