var app = angular.module('myApp',[]);
app.controller('detailController',['$scope','$http',function($scope,$http){
    
    const socket = io.connect('http://localhost:8080');

    socket.on('connect', function (data) {
        socket.emit('get times');
        socket.on('get times', function (data) {
            console.log('get times:' + data.times); 
            $scope.times = data.times+2;
            console.log($scope.times);
            $scope.$apply();
        });
    });
}])