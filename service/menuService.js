/** 
 * 菜单service类
*/

/**
 * 查询所有用户
 */
let findAllMenu = async () => {
    let user = await userDao.findAllUser();
    user = JSON.stringify(user);
    //把results字符串转为json对象  格式---[{}]
    user = JSON.parse(user);
    return user;  
}

module.exports = {
    findAllMenu
};