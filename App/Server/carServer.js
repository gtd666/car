/**
 * Created by 1 on 2017/10/19.
 */
app.factory("carServer",function($http,$q){
    return {
        getcar:function(){
            var def=$q.defer();
            $http({
                url:"./Data/car.json"
            }).then(function(result){
                def.resolve(result);
            });
            return def.promise;
        }
    }

});