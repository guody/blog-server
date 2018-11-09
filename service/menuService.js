/** 
 * 菜单service类
*/
const Menu = require('../model/menu')
const Category = require('../model/category')

//查询菜单
let findAllMenu = async () => {
    let menus = await Menu.findAll({
        'attributes': ['id', 'menuName']
    });
    return menus;
};

//插入菜单
let insertMenu = async () => {
    let menus = await Menu.create({
        'menuName':'redis'
    });
    return menus;
};

//插入菜单分类
let insertCategory = async () => {
    let cat = await Category.create({
        'categoryName':'redis',
        'menuId':'4'
    });
    return menus;
};

module.exports = {
    findAllMenu,
    insertMenu,
    insertCategory
};