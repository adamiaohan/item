const conn = require('./conn.js')  //.js省略了

module.exports = (req, res) => {
    setTimeout(() => {
        var filed = req.query.filed,
        table = req.query.table,
        value = req.query.value
        var sql = 'select `id` from `'+table+'` where `'+filed+'` = "'+value+'"'
        conn.query(sql, function (error, result) {
            if (error == null) {
                if(result.length==0){  //表明table里面不存在此字段
                    res.json({
                        error: 0,
                        message: '字段值不存在',
                    })
                }else{
                    res.json({
                        error: 2,
                        message: '字段值已存在',

                    })
                }  
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
