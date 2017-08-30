let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/my-app',{  useMongoClient: true,});


let schema=mongoose.Schema,objectId=schema.ObjectId;

var User=new schema({
    id:{type:objectId},
    name:{type:String},
    pwd:{type:String}
})

module.exports= mongoose.model('user',User)