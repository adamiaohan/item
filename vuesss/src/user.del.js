const conn = require('./conn.js')  //.js省略了

module.exports = (req, res) => {
    setTimeout(()=>{
        let id = req.query.id
        var sql = 'delete from `menu` where `id`="' + id + '"'
        conn.query(sql, function (error, result) {
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
    },1000)

}