const Sequelize = require('sequelize');
const config = require('../config/config')

console.log('init sequelize...');

const sequelize = new Sequelize(config.database.DATABASE,
    config.database.USERNAME,
    config.database.PASSWORD, {
 host: config.database.HOST,
 dialect: 'mysql',
 timezone: '+08:00',
 pool: {
   max: 5,
   min: 0,
   acquire: 30000,
   idle: 10000
 }
});


/**
 * @param {*} name 表名
 * @param {*} attributes  表字段设置    menu_name:Sequelize.STRING(100),
 */
function defineModel(name,attributes) {
    var attrs = {}
    for(let key in attributes){
        let value = attributes[key]
        if(typeof value == 'object' && value['type']){
            // 所有字段默认为NOT NULL，除非显式指定
            value.allowNull = value.allowNull || false;
            attrs[key] = value
        }else{
            attrs[key] = {
                type:value,
                allowNull:false
            }
        }
    }

    //主键自增长 sequelize默认会为模型添加id字段，自增，主键
    // attrs.id = {
    //     type:Sequelize.INTEGER,
    //     autoIncrement: true,
    //     primaryKey:true 
    // }

    //统一timestamp机制，每个Model必须有createdAt、updatedAt和version，分别记录创建时间、修改时间和版本号
    //version每次修改时自增
    attrs.createdAt = {
        type: Sequelize.DATE,
        allowNull: true
    };
    attrs.updatedAt = {
        type: Sequelize.DATE,
        allowNull: true
    };
    attrs.version = {
        type: Sequelize.BIGINT,
        allowNull: true
    };    

    return sequelize.define(name,attrs,{
        tableName:name,
        timestamps:false,
        hooks: {
            beforeValidate: function (obj) {
                // let now = Date.now();
                var time  = new Date().toLocaleString();
                if (obj.isNewRecord) {
                    obj.createdAt = time;
                    obj.updatedAt = time;
                    obj.version = 0;
                } else {
                    obj.updatedAt = time;
                    obj.version++;
                }
            }
        }
    })
}

exports.defineModel = defineModel;

