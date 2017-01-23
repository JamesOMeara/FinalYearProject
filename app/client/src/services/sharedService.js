
module.exports = function(app) {
 
    app.service("sharedService", function() {

        currentPage = 1

        getCurrentPage = function(){
            return currentPage
        }

        setCurrentPage = function(page){
            currentPage = page
        }
        
        return {
            getCurrentPage: getCurrentPage,
            setCurrentPage: setCurrentPage,
        }
    });

};