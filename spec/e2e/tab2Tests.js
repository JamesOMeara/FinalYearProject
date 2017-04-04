describe('angularjs homepage todo list', function() {



    beforeAll(function () {

        browser.get('http://localhost:8080/');
        //then navigate to tab2 
        element(by.id("tutorialsButton")).click();
        browser.waitForAngular();
    });

    it('must click to second tab', function() {
        element(by.id("homeButton1")).click();
        var secondTabEL = element(by.id("firstTab"))
        expect(secondTabEL).toBeDefined();

        element(by.id("tutorialsButton")).click();
        var secondTabEL = element(by.id("secondTab"))
        expect(secondTabEL).toBeDefined();
    });


    xit('directive example 7 Entering into text box must show below it', function() {
        var textBoxElement = element(by.id('example7TextBox') )
        textBoxElement.sendKeys('hello world')

        var angular2waybindedElement = element(by.id('example72wayBinding') )
        expect( textBoxElement.getAttribute('value') ).toContain( "hello world" );
    });


});


