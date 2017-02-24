var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ItemSchema = new Schema({
    title: {type:String, required:true},
    content: {type:String, required:true},
    status:{type:Boolean, default:true},
    _user: {type:Schema.Types.ObjectId, ref:"User"},
}, {timestamps:true})

mongoose.model("Item", ItemSchema)