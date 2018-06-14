var app = angular.module('myApp', ['ngRoute']);
const socket = io.connect('http://localhost:8080');

app.run(['$rootScope',function($rootScope){
    $rootScope.times = 0;
    $rootScope.do = function(mark){
       
        //socket.on('connect', function (data) {
            socket.emit('get times');
            socket.on('get times', function (data) {
                console.log('get times:' + data.times); 
                $rootScope.times = data.times+1+','+mark;
                console.log($rootScope.times);
                $rootScope.$apply();
            });
       // });
    }
    
}]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/add", {
        templateUrl: 'add.html',
    }).when("/detail", {
        templateUrl: "detail.html"
    }).when("/warn", {
        templateUrl: "warn.html"
    })
}]);

app.controller('addController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
    //$scope.do(1)
    $rootScope.times = 999;
}])

app.controller('detailController',['$scope','$http',function($scope,$http){
   // $scope.do(2)
}])

app.controller('warnController',['$scope','$http',function($scope,$http){
   // $scope.do(3)
}])