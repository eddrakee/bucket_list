app.factory('itemFactory', function($http, $location){
    var factory = {};
    factory.item = []
        factory.getAll = function(callback){
            $http.get('/item/all').then(function(output){
                callback(output.data)
            })
        }

        factory.addItem = function(item){
            $http.post('/item/add', item).then(function(output){
                factory.item.push(output.data)
                $location.url('/dashboard')
            })
        }

        factory.changeStat = function(item, callback){
            $http.post('/item/status', item).then(function(output){
                callback(output.data)
            })
        }
    return factory
})