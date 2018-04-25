

var mysql = require('mysql');   //引入mysql模块
var conn = mysql.createConnection({
  host     : '127.0.0.1',  //navicat的主机名
  user     : 'root',   //用户名
  password : '',
  database : 'db2'
});
conn.connect();   //提升效率
/*
    增：insert
    删:delete
    改:update
    查:select
*/
//表名和字段名用上引号
// conn.query('insert into `user` (`username`,`money`) values ("lily","200.12")',function(error,result){


    // console.log(error)     //异步执行    

// })   //命令列界面
// console.log(conn)