/**
 * Created by 1 on 2017/10/19.
 */
app.directive("server",function(){
    return {
        templateUrl:"./App/View/temp/_server.html",
        /*controller:function($scope){
            $scope.$emit("addCar",index)
        },*/
        link:function(scope,ele,attr,controller){
            $(".list li").click(function(){
                $(this).addClass("active").siblings().removeClass("active");
            });
            $(".footer-list li").click(function(){
                $(this).addClass("on").siblings().removeClass("on");
            });
            new IScroll('#wrap',{
                scrollX:true,
                scrollY:false,
                mousewheel:true
            });
            $(".load").click(function(){
                $(this).html("<i class='fa fa-life-buoy rotateOut'></i>")
            })
        }
    }
});