const conn = require('./conn.js')  //.js省略了

module.exports = (req, res) => {
    setTimeout(() => {
        let id = req.query.data.id
        let username = req.query.data.username
        let password = req.query.data.password
        let email = req.query.data.email
        let phone = req.query.data.phone
        // let sex = req.query.data.sex
        var sql = 'insert into `menu` (`id`,`username`,`password`,`email`,`phone`) values("'+id+'","'+username+'","'+password+'","'+email+'","'+phone+'")'
        conn.query(sql, function (error, result) {
            if (error == null) {
                res.json({
                    error: 0,
                    message: 'ok',
                    data: result,
                })
            } else {
                console.log(error)
                res.json({
                    error: 1,
                    message: 'error',
                })
            }
        })
    },1000)
    
}