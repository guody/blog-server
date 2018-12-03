/** 
 * 菜单service类
*/
const Menu = require('../model/menu')
const Category = require('../model/category')

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

//插入菜单
let insertMenu = async () => {
    let menus = await Menu.create({
        'menuName':'其他'
    });
    return menus;
};

// //查询根目录下分类
// let findCategory = async (menuId) => {
//     let categoryData = await Menu.findAll({
//         'attributes': ['id','categoryName','menuId'],
//         'where':{
//             'menuId':menuId
//         }
//     });
//     return categoryData;
// };

//插入菜单分类
let insertCategory = async () => {
    let cat = await Category.create({
        'categoryName':'TypeScript',
        'menuId':'2'
    });
    return menus;
};

module.exports = {
    findAllMenu,
    insertMenu,
    insertCategory
};