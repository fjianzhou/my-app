let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let session=require('express-session');
let connectMongo=require('connect-mongo')(session);
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
let User=require('./user')
let slider = require('./mock/slider');
let list = require('./mock/lessonList')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'xiaoming',
    store:new connectMongo({
        url:'mongodb://localhost:27017/my-app'
    })
}));


app.get('/slider',function(req,res){
    res.json(slider);
})

app.get('/slider/:id/:offset/:limit',function(req,res){
    console.log(req.params)
    res.json(list);
})

app.post('/register',function(req,res){
    User.create(req.body).then(data => {
        req.session.user=data;
        res.json({
            code:200,
            userInfo:{
                name:data.name,
            }
        })

    }).catch(function(e){
        res.json({
            code:500,
            message:e.message
        })
    })
})

app.post('/login',function(req,res){
    User.findOne(req.bady).then(data=>{
        if(data){
            req.session.user=data;
            res.json({
                code:200,
                userInfo:{
                    name:data.name,
                }
            })
            console.log('session',req.session.user)
        }
        else{
            res.json({
                code:404,
                message:'没有发现用户'
            })
        }
    }).catch(function(){
        res.json({
            code:500,
            message:e.message
        })
    })
})



app.get('/auth',function(req,res){
    let user = req.session.user;
    if(user){
        res.json({
            code:200,
            userInfo:{
                name:user.name,
            }
        })
    }
    else{
        res.json({
            code:404,
        })
    }
})