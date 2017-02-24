var mongoose = require('mongoose');
var Item = mongoose.model('Item')
var User = mongoose.model('User')

module.exports = (function(){
    return{
        add: function(req, res){
            var item = new Item({content:req.body.content, title: req.body.title, _user:req.body._id, status:true})
            item.save(function(err, data){
                    User.findOne({_id:req.body._id}, function(err, user){
                        user._item.push(data._id)
                        user.save(function(err, userData){
                            res.json(data)
                        })
                    })
            })
        },
        getAll: function(req, res){
            Item.find({}, function(err, data){
                res.json(data)
            })
            
        },
        changeStat: function(req, res){
            Item.findById({_id:req.body._id}, function(err, item){
                if (err){
                    alert("Something went wrong!")
                }
                else{
                    if(item.status == true){
                    item.status = false;
                    item.save(function(err){
                    res.json(item)
                        })
                    }
                    else{
                        if(item.status == false){
                            item.status = true;
                            item.save(function(err){
                                res.json(item)
                            })
                        }
                    }

                }
            })
        }
    }
})()