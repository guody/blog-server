const db = require('../../utils/db')
var seq = require('sequelize');

// admin菜单model
var AdminMenu = db.defineModel('adminmenu',{
    menuName:seq.STRING(50),
    routeName:seq.STRING(100),
    icon:seq.STRING(255)
})
AdminMenu.sync();
module.exports = AdminMenu;