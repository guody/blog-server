const router = require('koa-router')()
var Test = require('../model/menu')

// router.get('/', async (ctx, next) => {
//     ctx.response.body = '<h1>Index</h1>';
// });
console.log(Test)
router.get('/',async (ctx,next)=>{
    Test.create({
        name:'aaaaa----',
        age:'1'
    }).then(data => {
        console.log('-----------------------------')
        // console.log(data);
        ctx.body = { code: 0, msg: '公告发布成功' }
        next()
    })
})

module.exports = router;