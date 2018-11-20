const db = require('../utils/db')
var seq = require('sequelize');

// 菜单model
var User = db.defineModel('user',{
    userName:seq.STRING(50),
    password:seq.STRING(50)
})
User.sync();