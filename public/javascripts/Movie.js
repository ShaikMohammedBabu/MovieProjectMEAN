var mongoose = require('mongoose');

//create MovieSchema
var MovieSchema = new mongoose.Schema({
   title:{
       type:String,
       required:true
   },
    url:{
       type:String,
        required:true
    }
});

//export the model schema
module.exports = MovieSchema;