

require('angular');

module.exports = function(app) {
  require('./navDirective.js')(app);
  require('./simpleTableDirective.js')(app);

  require('./tabs/tab1Directive.js')(app);
  require('./tabs/tab2Directive.js')(app);
  require('./tabs/tab3Directive.js')(app);
  
  require('./displayTutorialDirective.js')(app);
  require('./forceGraphDirective.js')(app);

  require('./embedded/embeddedPlunkerDirective.js')(app);
  require('./embedded/embeddedJsfiddleDirective.js')(app);

  require('./examples/displayExamplesDirective.js')(app);
  
  
};