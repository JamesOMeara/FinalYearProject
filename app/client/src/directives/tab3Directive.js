
module.exports = function(app) {
 
    app.directive('tab3Directive', [ function () {
        return {
            controller: 'mainController' ,
            restrict: 'E',
            replace: true,
            scope: {
            },
            templateUrl: './app/client/src/directives/templates/tab3.ejs',
            link: function(scope) {
                scope.selectedEditor = 1;
                
                scope.editor = {
                    plunker: 1,
                    jsfiddle: 2
                }

                scope.selectEditor = function(num){
                    scope.selectedEditor = num
                }

                scope.showEditor = function(num){
                    if(num == scope.selectedEditor){
                        return true;
                    }else{
                        return false;
                    }
                }
        
            }
        };
  }]);


};