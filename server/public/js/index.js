var app = angular.module('myApp', ['ngRoute']);
//const ipc = require('electron').ipcRenderer; //electron test
const socket = io.connect('http://localhost:8080');

app.run(['$rootScope', function ($rootScope) {
    $rootScope.times = 0;

    
    socket.on('connect', function (data) {
        
        socket.on('get times', function (data) {
            console.log('root get times:' + data.times);
            $rootScope.times = data.times;
            $rootScope.$apply();
        });
    });
}]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/add", {
        templateUrl: 'add.html',
    }).when("/detail", {
        templateUrl: "detail.html"
    }).when("/warn", {
        templateUrl: "warn.html"
    })
}]);

