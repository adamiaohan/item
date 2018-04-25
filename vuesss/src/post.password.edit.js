const conn = require('./conn.js')  //.js省略了
var path = require('path') 
const md5 = require('md5')
module.exports = (req, res) => {
    let id = req.session.loginInfo.id,
        password = md5(req.body.password),
        sql = 'update `menu` set ? where `id`="'+id+'"'
        conn.query(sql,{ //传入一个对象代替 ？ 
            password
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
