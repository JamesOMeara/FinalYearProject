describe('angularjs homepage todo list', function() {



    beforeAll(function () {

        browser.get('http://localhost:8080/');

    });

    it('directive example 1 must contian the correct text', function() {
        var expectedText =  "Displaying Text from Direcitve Template File" + "\n" + 
                            "DIRECTIVE HTML: <example1-directive>" + "\n" + 
                            "OUTPUT:Some random Text Here.." 

        expect(element(by.id('example1Directive')).getText()).toContain(expectedText);
    });

    it('directive example 2 must contian the correct text', function() {
        var expectedText =  "Displaying Text from Direcitve Template File" + "\n" + 
                            "DIRECTIVE HTML: <example2-directive>" + "\n" + 
                            "OUTPUT:Some random Text Here.." 

        expect(element(by.id('example2Directive')).getText()).toContain(expectedText);
    });

    it('directive example 3 must contian the correct text', function() {
        var expectedText =  "Displaying Text from directive scope" + "\n" + 
                            "DIRECTIVE HTML: <example3-directive>" + "\n" + 
                            "OUTPUT: hello world" 

        expect(element(by.id('example3Directive')).getText()).toContain(expectedText);
    });

    it('directive example 4 must contian the correct text', function() {
        var expectedText =  "Displaying Text input into element" + "\n" + 
                            "DIRECTIVE HTML: <example4-directive something='passing string into 4th directive'>" + "\n" + 
                            "OUTPUT: passing string into 4th directive" 

        expect(element(by.id('example4Directive')).getText()).toContain(expectedText);
    });

    it('directive example 5 must contian the correct text', function() {
        var expectedText =  "Displaying Text input into element" + "\n" + 
                            "DIRECTIVE HTML: <example5-directive>" + "\n" + 
                            "OUTPUT: some string returned from a fucntion in a directives scope" 

        expect(element(by.id('example5Directive')).getText()).toContain(expectedText);
    });

    it('directive example 6 must contian the correct text', function() {
        var expectedText =  "Displaying Text input into element" + "\n" + 
                            "DIRECTIVE HTML: <example6-directive something=''>" + "\n" + 
                            "OUTPUT: String from an example controller" 

        expect(element(by.id('example6Directive')).getText()).toContain(expectedText);
    });


    it('directive example 7 must contian the correct text', function() {
        var expectedText =  "Directive template with 2 way data binding with input text box." + "\n" + 
                            "DIRECTIVE HTML: <example7-directive>" + "\n" + 
                            ': <input ng-model="inputString1">' + "\n" + 
                            ': { { inputString1 } }' 
                            

        expect(element(by.id('example7Directive')).getText()).toContain(expectedText);
    });

    it('directive example 7 mmust have a text box', function() {
        var textBoxElement = element(by.id('example7TextBox') )

        expect( textBoxElement.getAttribute('value') ).toEqual( "" );
    });

    it('directive example 7 text box must be editable', function() {
        var textBoxElement = element(by.id('example7TextBox') )
        expect( textBoxElement.getText() ).toEqual( "" );

        textBoxElement.sendKeys('hello world')
        expect( textBoxElement.getAttribute('value') ).toContain( "hello world" );
    });

    it('directive example 7 Entering into text box must show below it', function() {
        var textBoxElement = element(by.id('example7TextBox') )
        textBoxElement.sendKeys('hello world')

        var angular2waybindedElement = element(by.id('example72wayBinding') )
        expect( textBoxElement.getAttribute('value') ).toContain( "hello world" );
    });


});


