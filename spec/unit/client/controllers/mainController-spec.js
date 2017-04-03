
describe("mainController Tests", function() {


beforeEach( module('app') );

    beforeEach(inject(function ($injector, _$controller_) {

        $location = $injector.get('$location');
        $location.path('/');

        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();

        $controller = _$controller_;
        $controller = $controller('mainController', {$scope: $scope});

    }));


    it('Expect the section to be defaulted to 0', function() {
        expect( $scope.currentPage() ).toBe(1);
    });

    it('Expect the section to be defaulted to 0', function() {
        expect( $scope.showTab(1) ).toBe(true);
    });

   


});
