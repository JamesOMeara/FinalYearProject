
describe("NavBarController Tests", function() {


beforeEach( module('app') );

    beforeEach(inject(function ($injector, _$controller_) {

        $location = $injector.get('$location');
        $location.path('/');

        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();

        $controller = _$controller_;
        $controller = $controller('navController', {$scope: $scope});

    }));


    it('Expect the section to be defaulted to 0', function() {
        expect( $scope.selected() ).toBe(0);
    });

    it('change the tab to be home', function() {
        expect( $scope.selected() ).toBe(0);
        $scope.setSection(1)
        expect( $scope.selected() ).toBe(1);
    });

    it('check is tab is active when not selected', function() {
        expect( $scope.selected() ).toBe(0);
        $scope.setSection(1)
        expect( $scope.selected() ).toBe(1);

        expect($scope.isNavbuttonActive(0)).toBe(false)
    });

    it('check is tab is active when not selected', function() {
        expect( $scope.selected() ).toBe(0);
        $scope.setSection(1)
        expect( $scope.selected() ).toBe(1);

        expect($scope.isNavbuttonActive(1)).toBe(true)
    });


});