const db = require('../../utils/db')
var seq = require('sequelize');

// admin菜单model
var AdminMenu = db.defineModel('adminmenu',{
    menuName:seq.STRING(50)
})
AdminMenu.sync();
module.exports = AdminMenu;