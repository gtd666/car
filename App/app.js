/**
 * Created by 1 on 2017/10/10.
 */
var app=angular.module("myApp",["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("/finance",{
        url:"/finance",
        templateUrl:"./App/View/finance.html"
    }).state("/server",{
        url:"/server",
        templateUrl:"./App/View/server.html",
        controller:"serverController"
    });
    $urlRouterProvider.otherwise("/server");
});