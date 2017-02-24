var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name:{type:String, required:true},
    _item:[{type:Schema.Types.ObjectId, ref:"Item"}],
}, {timestamps: true})

mongoose.model('User', UserSchema);