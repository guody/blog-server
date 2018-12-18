/** 
 * 菜单service类
*/
const Menu = require('../model/menu')
const Category = require('../model/category')
const ApiErrorNames = require('../error/ApiErrorNames');
const APIError = require('../error/ApiError');

//查询菜单
let findAllMenu = async () => {
    // 查询根目录菜单
    let menus = await Menu.findAll({
        'attributes': [
            'id', 
            'menuName',
            'routeName',
            'sortNo'
        ],
        raw:true
    });
    let menuData = []  //全部菜单
    for(let val of menus){
        let childMenuObj = {}  // 子菜单
        //查询子菜单
        childMenuObj.children = await Category.findAll({
            'attributes': [
                'id',
                ['categoryName','menuName'],
                'menuId',
                'sortNo',
                'routeName',
            ],
            raw:true,
            'where':{
                'menuId':val.id
            }
        })
        let menuObj;
        if(childMenuObj.children.length>0){
            menuObj = Object.assign({},val,childMenuObj)
        }else{
            menuObj = val
        }
        menuData.push(menuObj)        
    }
    return menuData;
};

//插入文章根目录
let insertMenu = async (menuData) => {
    // 判断sortNo是否为整数
    if(! /^[1-9]\d*$/.test(menuData.sortNo)){
        throw new APIError(ApiErrorNames.SORT_NOT_NUMBER); 
    }

    // 查询该目录是否存在
    let menuInfo = await Menu.findOne({
        'attributes': [
            'id', 
            'menuName',
            'routeName',
            'sortNo'
        ],
        'where':{
            'menuName':menuData.menuName
        },
        raw:true
    });
    if(menuInfo){
        throw new APIError(ApiErrorNames.MENU_EXIST); 
    }

    let result = await Menu.create({
        'menuName':menuData.menuName,
        'sortNo':menuData.sortNo,
        'routeName':menuData.routeName

    });
    return result;
};

// 删除文章目录以及分类
let deleteMenu = async (menuData) => {
    // 查询是否存在菜单分类
    let catgoryData = await Category.findAll({
        'where':{
            'menuId':menuData.menuId
        }
    });
    // 若存在，删除菜单分类
    if(catgoryData.length>0){
        let deleteCatgory = await Category.destroy({
            'where':{
                'menuId':menuData.menuId
            }
        });
    }

    // 删除菜单
    let result = await Menu.destroy({
        'where':{
            'id':menuData.menuId
        }
    })
    return result;
};

//插入菜单分类
let insertCategory = async () => {
    let cat = await Category.create({
        'categoryName':'TypeScript',
        'menuId':'2'
    });
    return menus;
};

//删除菜单分类
let deleteCategory = async (menuId) => {
    let cat = await Category.destroy({
        'where':{
            'menuId':menuData.menuId
        }
    });
    return menus;
};

module.exports = {
    findAllMenu,
    insertMenu,
    insertCategory,
    deleteMenu,
    deleteCategory
};