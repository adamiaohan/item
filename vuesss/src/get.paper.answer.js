const conn = require('./conn.js')  //.js省略了

module.exports = (req, res) => {
    setTimeout(() => {
       let id=req.cookies.paper_id
        var sql = 'select * from `answer` where `paper_id`="'+id+'"'
        // sql = "select a.id id,p.title title,a.paper_id paper_id,a.content content,a.item item,a.ctime ctime from answer a,papers p where a.paper_id='" + paper_id + "' && a.paper_id=p.id"
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
    },0)
}
