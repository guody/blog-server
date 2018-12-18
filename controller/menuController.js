/** 
 * 菜单类controller
*/
const ApiErrorNames = require('../error/ApiErrorNames');
const APIError = require('../error/ApiError').APIError;
const menuService = require('../service/menuService')
const logger = require('../utils/logUtil')

/**
 * 查询菜单
 */
let findAllMenu = async (ctx, next) => {
    //查询根目录
    logger.logInfo('开始查询菜单...')
    let res = await menuService.findAllMenu();
    logger.logInfo('查询菜单结束：'+ res)
    ctx.body = res
};


// 插入根目录
let insertMenu = async (ctx, next) => {
    let menuData = ctx.request.body;
    logger.logInfo('插入文章根目录开始...',menuData)
    let result = await menuService.insertMenu(menuData);
    logger.logInfo('插入文章根目录结束...',result)
    ctx.body = result
};

// 删除文章根目录
let deleteMenu = async (ctx, next) => {
    let menuData = ctx.request.body;
    logger.logInfo('删除文章根目录开始...',menuData)
    let result = await menuService.deleteMenu(menuData);
    logger.logInfo('删除文章根目录结束...',result)
    ctx.body = result
};



// // 查询根目录下分类
// let findCategory = async (ctx, next) => {
//     let result = await menuService.findCategory();
//     ctx.body = result
// };


// 增加菜单分类
let insertCategory = async (ctx, next) => {
    let result = await menuService.insertCategory();
    ctx.body = result
};

// 删除菜单分类
let deleteCategory = async (ctx, next) => {
    let result = await menuService.deleteCategory();
    ctx.body = result
};

module.exports = {
    findAllMenu,
    insertMenu,
    deleteMenu,
    insertCategory,
    deleteCategory
};

