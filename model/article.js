/** 菜单分类 */
const db = require('../utils/db')
var seq = require('sequelize');

var Article = db.defineModel('category',{
    title:seq.STRING(255),
    content:seq.TEXT,
    categoryId:seq.INTEGER,
    menuId:seq.INTEGER,
    type:seq.INTEGER,
    author:seq.STRING(50),
    views:seq.INTEGER,
    likeNum:seq.INTEGER
})
Article.sync();
module.exports = Article;