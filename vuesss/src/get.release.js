/*
release   发布
*/
var path = require('path')   
const conn = require('./conn.js')
const cuid = require('cuid')
module.exports=function(req,res){
    if(!req.query.id){
        require('./message')({
            status:'error',
            msg:'你来晚了',
        },res)
        return
    }
//验证用户是否已经答过了
    var id = req.query.id
    if(req.cookies['releaseInfo'+id]){
        require('./message')({
            status:'error',
            msg:'您已回答过了',
        },res)
        return
    }

    var id = req.query.id
    res.cookie('release_paper_id',id)
    res.cookie('releaseInfo'+id,JSON.stringify({
        paper_id:id,
        cuid:cuid()
    }))

    // var id = req.query.id,
    // sql = 'select * from `papers` where `id`="'+id+'"' 
    //     conn.query(sql, function (error, result) {
    //         if (error == null) {
    //             res.json({
    //                 error: 0,
    //                 message: 'ok',
    //                 data: result,
    //             })
    //         } else {
    //             console.log(error)
    //             res.json({
    //                 error: 1,
    //                 message: 'error',
    //             })
    //         }
    //     })
    res.sendFile( path.resolve('./')+'/public/release.html')
}
