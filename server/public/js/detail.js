app.controller('detailController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
    console.log('--- detailController ---'); 

    socket.emit('get times');
}])