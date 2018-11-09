/** 
 * 菜单类controller
*/
const ApiErrorNames = require('../error/ApiErrorNames');
const APIError = require('../error/ApiError').APIError;
const menuService = require('../service/menuService')

/**
 * 查询根目录
 */
let findAllMenu = async (ctx, next) => {
    let result = await menuService.findAllMenu();
    ctx.body = result
};


// 插入根目录
let insertMenu = async (ctx, next) => {
    let result = await menuService.insertMenu();
    ctx.body = result
};


// 增加菜单分类
let insertCategory = async (ctx, next) => {
    let result = await menuService.insertCategory();
    ctx.body = result
};

module.exports = {
    findAllMenu,
    insertMenu,
    insertCategory
};

