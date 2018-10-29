const router = require('koa-router')()
var Test = require('../model/menu')
Test.sync({force: true});

router.get('/',async (ctx,next)=>{
    Test.create({
        name:'aaaaa----'
    }).then(data => {
        ctx.body = { code: 0, msg: '公告发布成功', result: data }
    })
})

module.exports = router;