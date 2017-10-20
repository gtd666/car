/**
 * Created by 1 on 2017/10/19.
 */
app.factory("doubleServer",function($http,$q){
    return {
        getimgs:function(){
            var def=$q.defer();
            $http({
                url:"./Data/data.json"
            }).then(function(result){
                def.resolve(result);
            });
            return def.promise;
        }
    }

});