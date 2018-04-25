const conn = require('./conn.js')  //.js省略了
const md5 = require('md5')   //密码加密
var path = require('path') 
module.exports = (req, res) => {
        var username = req.body.username,
        password = md5(req.body.password), //密码加密
        phone = req.body.phone,
        email = req.body.email,
        sex = req.body.sex
        var sql = 'insert into `menu` set ?'
        conn.query(sql,{ //传入一个对象代替 ？ 
            username,password,phone,email,sex    
        },function (error, result) {
            if (error == null) {
                res.cookie('message',JSON.stringify({
                    status:'success',
                    link:'/login',
                    linkText:'登录',
                    msg:'注册成功'
                }))
                res.sendFile( path.resolve('./')+'/public/message.html')
            } else {
                console.log(error)
                res.cookie('message',JSON.stringify({
                    status:'error',
                    link:'/regist',
                    linkText:'重新注册',
                    msg:'注册失败'
                }))
                res.sendFile( path.resolve('./')+'/public/message.html')
            }
        })
}
