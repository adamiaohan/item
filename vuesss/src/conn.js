var mysql = require('mysql');   //引入mysql模块
var conn = mysql.createConnection({
  host     : '127.0.0.1',  //navicat的主机名  服务器地址
  user     : 'root',   //用户名
  password : '',
  database : 'db2'   //数据库名
});
conn.connect();   //提升效率
module.exports = conn
