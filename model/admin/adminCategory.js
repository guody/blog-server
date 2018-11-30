/** 菜单分类 */
const db = require('../../utils/db')
var seq = require('sequelize');

var AdminCategory = db.defineModel('adminCategory',{
    categoryName:seq.STRING(50),
    menuId:seq.INTEGER,
    path:seq.STRING(100)
})
AdminCategory.sync();
module.exports = AdminCategory;