var path = require('path')   //此插件将当前路径的根目录切换到服务器的根目录
module.exports=function(req,res){
    if (req.session.username) {
        res.sendFile( path.resolve('./')+'/public/outine.html')
      } else {
        res.cookie('message', JSON.stringify({
            status: 'error',
            link: '/login',
            linkText: '登录',
            msg: '请先登录'
          }))
          res.sendFile(path.resolve('./') + '/public/message.html')
      }
    }
