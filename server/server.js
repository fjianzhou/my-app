let express = require('express');

let app = express();

let slider = require('./mock/slider');
let list = require('./mock/lessonList')
app.listen(5000);
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials","true");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method==="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

app.get('/slider',function(req,res){
    res.json(slider);
})

app.get('/slider/:id/:offset/:limit',function(req,res){
    console.log(req.params)
    res.json(list);
})