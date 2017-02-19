
module.exports = function(app) {
 
    app.controller("mainController", function($scope, sharedService, databaseFactory) {

        $scope.showTab = function(num){
            if($scope.currentPage() == num){
                return true;
            }else{
                return false
            }
        }   

        $scope.currentPage = function(){
            return sharedService.getCurrentPage()
        } 

    });

};