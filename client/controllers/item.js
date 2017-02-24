app.controller('itemController', function($scope, itemFactory, $routeParams,$route){
    $scope.errors = []
    $scope.items = []

    itemFactory.getAll(function(data){
        $scope.items = data
    })

    $scope.addItem = function(id){
        $scope.errors = [];
        if(!$scope.newBucket || !$scope.newBucket.title || !$scope.newBucket.content ){
            $scope.errors.push("Please fill out the forms!")
        }else if($scope.newBucket.title.length < 5){
            $scope.errors.push("Item name must be a minimun of 5 characters!")
            
        }else if($scope.newBucket.content.length <10){
            $scope.errors.push("Description must be a minimun of 10 characters!")
        }else{
            $scope.newBucket._id = id
            console.log(id)
            itemFactory.addItem($scope.newBucket)
            $scope.newBucket = {}
            $route.reload()

        }
        $scope.changeStat = function(item){
            itemFactory.changeStat(item, function(data){
                itemFactory.getAll(function(data){
                    $scope.items = data
                })
            })
        }


    }
    
})