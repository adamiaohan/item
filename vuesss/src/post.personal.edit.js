const conn = require('./conn.js')  //.js省略了
var path = require('path') 
module.exports = (req, res) => {
        var username = req.body.username,
        phone = req.body.phone,
        email = req.body.email,
        sex = req.body.sex
        let id = req.session.loginInfo.id
        var sql = 'update `menu` set ? where `id`="'+id+'"'
        conn.query(sql,{ //传入一个对象代替 ？ 
            username,phone,email,sex    
        },function (error, result) {
            if (error == null) {
                res.json({
                    error: 0,
                    message: 'ok',
                })
            } else {
                console.log(error)
                res.json({
                    error: 1,
                    message: 'error',
                })
            }
        })
}
