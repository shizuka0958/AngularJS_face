var app = angular.module('myApp', ['ngRoute']);

app.run(['$rootScope',function($rootScope){
    $rootScope.add=1
    $rootScope.do = function(mark){
    }
    
}]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/check", {
        templateUrl: 'check.html',
    }).when("/sign", {
        templateUrl: "sign.html"
    }).when("/peopleManage", {
        templateUrl: "peopleManage.html"
    }).when("/vistorManage", {
        templateUrl: "vistorManage.html"
    }).when("/peopleGroup", {
        templateUrl: "peopleGroup.html"
    }).when("/rule", {
        templateUrl: "rule.html"
    }).when("/equipment", {
        templateUrl: "equipment.html"
    }).otherwise({
        templateUrl: "check.html"
    })
}]);

app.controller('indexController',['$scope','$http',function($scope,$http){

}])

app.controller('detailController',['$scope','$http',function($scope,$http){

}])

app.controller('warnController',['$scope','$http',function($scope,$http){

}])