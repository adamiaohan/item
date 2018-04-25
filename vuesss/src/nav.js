var path = require('path')
module.exports = (req, res) => {
    var password = 123
    var filename = req.params.filename
    var allow = ['a.html', 'b.html']
    if (password == 123 && allow.indexOf(filename)!=-1) {
        res.sendFile(path.resolve('./') + '/public/' + filename)
        // console.log(req.params.filename)   //a.html  路径名称
        // console.log(req.params)  // {filename:a.html}
    }else{
        res.send('0')
    }

}