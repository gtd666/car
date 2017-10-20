/**
 * Created by 1 on 2017/10/19.
 */
app.factory("homeServer",function($http,$q){
    return {
        gethome:function(){
            var def=$q.defer();
            $http({
                url:"./Data/home.json"
            }).then(function(result){
                def.resolve(result);
            });
            return def.promise;
        }
    }

});