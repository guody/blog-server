/** 
 * admin 菜单service类
*/
const AdminMenu = require('../model/admin/adminMenu')
const AdminCategory = require('../model/admin/adminCategory')
const logger = require('../utils/logUtil')


//查询admin菜单
let findAllAdminMenu = async () => {
    // 查询根目录菜单
    let menus = await AdminMenu.findAll({
        'attributes': ['id', 'menuName','icon','routeName'],
        raw:true
    });
    let menuData = []  //全部菜单
    for(let val of menus){
        let childMenuObj = {}  // 子菜单
        //查询子菜单
        childMenuObj.childMenu = await AdminCategory.findAll({
            'attributes': ['id',['categoryName','menuName'],'menuId','routeName'],
            raw:true,
            'where':{
                'menuId':val.id
            }
        })
        let menuObj;
        if(childMenuObj.childMenu.length>0){
            menuObj = Object.assign({},val,childMenuObj)
        }else{
            menuObj = val
        }
        menuData.push(menuObj)        
    }
    return menuData;
};

module.exports = {
    findAllAdminMenu
};