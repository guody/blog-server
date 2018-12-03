const db = require('../utils/db')
var seq = require('sequelize');

// 菜单model
var Menu = db.defineModel('menu',{
    menuName:seq.STRING(50),
    sortNo:seq.INTEGER,
    routeName:seq.STRING(100)
})
Menu.sync();
module.exports = Menu;