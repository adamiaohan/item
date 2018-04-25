const conn = require('./conn.js')  //.js省略了

module.exports = (req, res) => {
    setTimeout(()=>{
        let id = req.query.id
        var sql = 'insert into `papers` set ?'
        conn.query(sql, {
            title:req.body.title,
            content:req.body.content,
            item:req.body.item,
            creator_id:req.session.loginInfo.id
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
    },1000)

}