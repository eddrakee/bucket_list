var session = require('./../controllers/session.js')
var item = require('./../controllers/item.js')

module.exports = function(app){
    app.post('/login', function(req, res){
        session.login(req, res)
    })
    app.get('/checkUser', function(req, res){
        session.checkUser(req, res)
    })
    app.get('/logout', function(req, res){
        session.logout(req, res)
    })
    //******************************************
   
   app.post('/item/add', function(req, res){
       item.add(req, res)
   })
   app.get('/item/all', function(req, res){
       item.getAll(req, res)
   })

    app.post('/item/status', function(req, res){
        item.changeStat(req, res)
    })
}