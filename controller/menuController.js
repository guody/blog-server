/** 
 * 菜单类controller
*/
const ApiErrorNames = require('../config/ApiErrorNames');
const APIError = require('../middlewares/result').APIError;
const menuService = require('../service/menuService')

/**
 * 查询所有菜单
 */
let findAllMenu = async (ctx, next) => {
    let result = await userService.findAllMenu();
    ctx.body = result
};

