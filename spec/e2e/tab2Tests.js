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


    describe('clicking overview menu button', function() {
        it('click overview menu option', function() {
            var overviewButton = element(by.id('Overview_menuOption') )
            overviewButton.click()
            var graph = element(by.id('graph') )

            expect(graph.isDisplayed() ).toEqual(true)
        });

        it('click overview suub menu option', function() {
            var overviewButton = element(by.id('Overview_menuOption') )
            overviewButton.click()

            var subCategoryButton = overviewButton.element(by.id('Overview_subMenuOption') )
            subCategoryButton.click()

            var graph = element(by.id('graph') )

            expect(graph.isDisplayed() ).toEqual(true)
        });

    });


    describe('angularjs menu button', function() {
        it('click angular menu option', function() {
            var angularButton = element(by.id('Angular_menuOption') )
            angularButton.click()
            var graph = element(by.id('graph') )

            expect(graph.isDisplayed() ).toEqual(true)
        });

    });

    describe('automation menu button', function() {
        it('click automation menu option', function() {
            var Automation_menuOption = element(by.id('Automation_menuOption') )
            Automation_menuOption.click()
            var graph = element(by.id('graph') )

            expect(graph.isDisplayed() ).toEqual(true)
        });

        it('click auotmaiton introduction menu option', function() {
            var Automation_menuOption = element(by.id('Automation_menuOption') )
            Automation_menuOption.click()

            var Introduction_subMenuOption = Automation_menuOption.element(by.id('Introduction_subMenuOption') )
            Introduction_subMenuOption.click()

            browser.waitForAngular();
            var documentt = element(by.id('Introduction_iframe') )

            expect(documentt.isDisplayed() ).toEqual(true)
        });

    });




});


