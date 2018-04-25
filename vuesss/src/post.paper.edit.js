//编辑问卷


const conn = require('./conn.js')  //.js省略了

module.exports = (req, res) => {
    setTimeout(()=>{
        var id = req.body.id,
        sql = 'update `papers` set ? where `id`="'+id+'"'
        conn.query(sql,{
            title:req.body.title,
            content:req.body.content,
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