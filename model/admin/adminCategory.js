/** 菜单分类 */
const db = require('../../utils/db')
var seq = require('sequelize');

var AdminCategory = db.defineModel('adminCategory',{
    categoryName:seq.STRING(50),
    menuId:seq.INTEGER,
    routeName:seq.STRING(100),
    sortNo:seq.INTEGER
})
AdminCategory.sync();
module.exports = AdminCategory;