const ApiErrorNames = require('../error/ApiErrorNames');
const APIError = require('../error/ApiError');

/**
 * session 验证中间件
 * @param {*} ctx 
 * @param {*} next 
 */
let authSession = async (ctx,next) => {
    // 公共权限接口，不用登录状态
    if(ctx.url.startsWith('/api/pub')){
        console.log('------------------')
        await next()
    }else{
        console.log('*******************')
        if(ctx.session.user) {
            await next()
        }else if(!ctx.session.user){
            throw new APIError(ApiErrorNames.INVALID_USER); 
            return 
        } 
    }
}

module.exports = authSession;
