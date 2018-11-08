const db = require('../utils/db')
var seq = require('sequelize');

// 菜单model
var Menu = db.defineModel('menu',{
    menuName:seq.STRING(50)
})
Menu.sync();
module.exports = Menu;