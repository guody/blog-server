/**
 * user 业务处理层
 */
const User = require('../model/user')
const md5 = require('md5')
const authUtil = require('../utils/authUtil.js');
const uuidv1 = require('uuid/v1');
const Base64 = require('js-base64').Base64;
const ApiErrorNames = require('../error/ApiErrorNames');
const APIError = require('../error/ApiError');
const logger = require('../utils/logUtil')


/** 
 * 根据用户名查询用户  
 */
// let findUserByName = async (username) => {
//     console.log('查询：',value)
//     let user = await User.findAll({
//         'where':{
//             'username':username
//         },
//         raw:true
//     });
//     return user;
// }

/**
 * 用户登录
 */
let login = async (ctx) => {
    let { username, password } = ctx.request.body;
    logger.logInfo('用户登录开始:',ctx.request.body)
    // 检查用户名
    let userObj = await User.findOne({
        'attributes': ['id', 'userName','password'],
        'where':{
            'userName':username
        },
        raw:true
    });
    if(!userObj){
        throw new APIError(ApiErrorNames.USER_NOT_EXIST); 
    }
    // 检查密码
    password = Base64.encode(md5(password))      
    if(password !== userObj.password){
        throw new APIError(ApiErrorNames.PASSWORD_ERROR); 
    }
    // 验证通过则将用户信息写入 session 中
    ctx.session.user = {
        username,
        password
    }
    logger.logInfo('登录完成.....')
    return userObj;
}


/**
 * 注册用户
 * @param {*} value 
 */
// let addUser = async (value)=> {
//     let username = value.username || '';
//     let password = value.password || '';

//     //密码Md5加密 base64编码
//     password = Base64.encode(md5(password));

//     // 检查用户名是否为空
//     if(!username){
//         throw new APIError(ApiErrorNames.USERNAME_EMPTY); 
//     }
//     //检查密码是否为空
//     if(!password){
//         throw new APIError(ApiErrorNames.PASSWORD_EMPTY);  
//     }
//     // 用户名唯一性检查  user为数组
//     let user = await userDao.findUserByName(username);
//     if (Array.isArray(user) && user.length > 0) {
//         throw new APIError(ApiErrorNames.USERNAME_EXIST); 
//     }

//     // 生成用户ID
//     let userid = uuidv1();
//     let param = [userid,username,password]
//     await userDao.addUserData(param);
//     let addUser = await userDao.findUserByName(username);
//     return addUser; 
// }

module.exports = {
    login
};