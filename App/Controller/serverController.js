/**
 * Created by 1 on 2017/10/19.
 */
app.controller("serverController",["$scope","doubleServer","carServer","homeServer","$timeout",function($scope,doubleServer,carServer,homeServer,$timeout){
    doubleServer.getimgs().then(function(res){
        $scope.imgs=res.data;
        $timeout(function(){
            var mySwiper = new Swiper ('.swiper-container', {
                autoplay:1000,
                loop:true,
                observer:true,
                autoplayDisableOnInteraction:false,
                pagination:'.swiper-pagination'
            })
        },20);
    });
    carServer.getcar().then(function(res){
        $scope.cars=res.data;
    });
    homeServer.gethome().then(function(res){
        $scope.homes=res.data;
    });
    /*$scope.$on("addCar",function(event,index){
        $scope.cars.splice(index,1)
    })*/
}]);