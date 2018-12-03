/** 菜单分类 */
const db = require('../utils/db')
var seq = require('sequelize');

var Category = db.defineModel('category',{
    categoryName:seq.STRING(50),
    menuId:seq.INTEGER,
    sortNo:seq.INTEGER,
    routeName:seq.STRING(100)

})
Category.sync();
module.exports = Category;