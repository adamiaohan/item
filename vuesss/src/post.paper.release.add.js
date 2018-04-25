const conn = require('./conn.js')  //.js省略了

module.exports = (req, res) => {
    setTimeout(()=>{
        let id = req.query.id
        var sql = 'insert into `answer` set ?'
        conn.query(sql, {
            title:req.body.title,
            content:req.body.content,
            item:req.body.item, 
            cuid:req.body.cuid, 
            note:req.body.note, 
            paper_id:req.body.paper_id
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