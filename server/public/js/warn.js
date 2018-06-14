app.controller('warnController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
    console.log('--- warnController ---'); 

    //socket.emit('get times');
    $rootScope.times = 3;
}])
 