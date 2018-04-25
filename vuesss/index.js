
const express = require('express')  //const
const bodyParser = require("body-parser")
const session = require('express-session')
const cookieParser = require("cookie-parser")
const multer = require('multer')

const app = express()
app.use(cookieParser())
app.use(express.static("./static"))
app.use(bodyParser.urlencoded({ extended: false }))   //post数据获取和解析
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      //设置上传目录
      cb(null, __dirname + '/static/img/photo')

  },
  filename: function (req, file, cb) {
      // 设置文件名
      var file = file.originalname;
      cb(null, file)
  }
});
var upload = multer({ storage: storage })
app.post('/upload', upload.any(), function (req, res) {
  res.send(req.files)
})

app.get('/index', require ('./src/index.js'))   //设置主要路由
// app.get('/users/add', require ('./src/users.add.js')) 
// app.get('/nav/:filename', require ('./src/nav.js')) 
app.get('/menu/:filename', require ('./src/menu.js')) 
app.get('/user/get', require ('./src/user.get.js')) 
app.get('/user/del', require ('./src/user.del.js')) 
app.get('/user/add', require ('./src/user.add.js')) 
//注册
app.get('/regist', require ('./src/get.regist.js')) 
//判断表字段是否存在
app.get('/chkExist', require ('./src/get.chkExist.js')) 

app.post('/users/add', require ('./src/post.users.add')) //.js省略了
//登录
app.get('/login', require ('./src/get.login.js'))
app.post('/login', require ('./src/post.login.js'))
//注销
app.get('/logout', require ('./src/get.logout.js'))

//大纲管理 展示
app.get('/outline/show', require ('./src/get.outline.show.js'))
 
//获取大纲数据
app.get('/outline', require ('./src/get.outline.js'))
//添加子节点
app.post('/outline/add', require ('./src/post.outline.add.js'))
//添加子选项
app.post('/option/add', require ('./src/post.option.add.js'))
//添加根节点
app.post('/outline/addfather', require ('./src/post.outline.addfather.js'))

//添加根选项
app.post('/option/addfather', require ('./src/post.option.addfather.js'))

//编辑大纲数据
app.post('/outline/edit', require ('./src/post.outline.edit.js'))

//编辑选项数据
app.post('/option/edit', require ('./src/post.option.edit.js'))

//删除大纲数据
app.get('/outline/del', require ('./src/get.outline.del.js'))

//删除选项数据
app.get('/option/del', require ('./src/get.option.del.js'))

//实现拖拽排序
app.post('/outline/sort', require ('./src/post.outline.sort.js'))

//实现选项拖拽排序
app.post('/option/sort', require ('./src/post.option.sort.js'))

//显示试卷
app.get('/paper/show', require ('./src/get.paper.show.js'))

//保存问卷
app.post('/paper/add', require ('./src/post.paper.add.js'))

//显示问卷调查结果
app.get('/paper/get', require ('./src/get.paper.get.js'))

//删除问卷调查
app.get('/paper/del', require ('./src/get.paper.del.js'))

//编辑问卷调查
app.post('/paper/edit', require ('./src/post.paper.edit.js'))

//根据条件返回问卷列表
app.get('/paper/find', require ('./src/get.paper.find.js'))


//显示问卷作答页面
app.get('/paper/release', require ('./src/get.release.js'))

//添加用户答卷
app.post('/paper/release/add', require ('./src/post.paper.release.add.js'))

//编辑用户
app.post('/users/edit', require ('./src/post.users.edit.js'))

//显示问卷详情
app.get('/paper/answer', require ('./src/get.paper.answer.js'))


//个人中心，获取个人信息
app.get('/personal/get', require ('./src/get.personal.get.js'))
//个人中心，编辑个人信息
app.post('/personal/edit', require ('./src/post.personal.edit.js'))

//修改密码
app.post('/password/edit', require ('./src/post.password.edit.js'))

//获取选项数据
app.get('/option', require ('./src/get.option.js'))

//上传头像
app.post('/upload/post', require ('./src/post.upload.post.js'))
app.listen(80)
