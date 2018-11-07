const db = require('../utils/db')
var seq = require('sequelize');

// 菜单model
var Menu = db.defineModel('test',{
    name:seq.STRING(255),
    age:seq.STRING(255)
})
Menu.sync();
module.exports = Menu;