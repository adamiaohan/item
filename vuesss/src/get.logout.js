var path = require('path')   //此插件将当前路径的根目录切换到服务器的根目录
module.exports=function(req,res){
    req.session.destroy(function(){
        res.cookie('message', JSON.stringify({
            status: 'error',
            link: '/login',
            linkText: '重新登录',
            msg: '注销成功',
            userInfo:null,
          }))
          res.sendFile(path.resolve('./') + '/public/message.html')
    })
    // console.log(path.resolve('./'))    //3-22vue文件夹
    // res.send(__dirname)    //F:\WWW\3-22vue路由守卫\src  定位到src   所以需要用path改变路径，引入与src同级的public
}
//缩写
// module.exports = (req,res)=>{   
//     res.sendFile( path.resolve('./')+'/public/index.html')
//     // res.send(__dirname)
// }