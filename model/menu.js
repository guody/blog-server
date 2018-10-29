const db = require('../utils/db')
var seq = require('sequelize');

// 菜单model
var Menu = db.defineModel('test',{
    name:seq.STRING(255)
})

module.exports = Menu;