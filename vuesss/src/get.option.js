
//递归算法，生成“树”
function tree(data, pid = 0, obj = []) {
    for (var i = 0; i < data.length; i++) {
        data[i].children = data[i].children || []
        if (data[i].pid == pid) {
            data[i].flag = false
            var index = obj.push(data[i])
            tree(data, data[i].id, obj[index - 1].children)//递归
        }
    }
    return obj
  }

//获取大纲数据
const conn = require('./conn.js')  //.js省略了

module.exports = (req, res) => {
    setTimeout(() => {
        var sql = 'select * from `option` order by `sort` asc'
        conn.query(sql, function (error, result) {
            if (error == null) {
                res.json({
                    error: 0,
                    message: 'ok',
                    data:tree(result),
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
