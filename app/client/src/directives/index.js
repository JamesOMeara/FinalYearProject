

require('angular');

module.exports = function(app) {
  require('./navDirective.js')(app);
  require('./simpleTableDirective.js')(app);
  require('./tab1Directive.js')(app);
  require('./tab2Directive.js')(app);
  require('./tab3Directive.js')(app);
  require('./embeddedPlunkerDirective.js')(app);
  require('./embeddedJsfiddleDirective.js')(app);
  require('./displayTutorialDirective.js')(app);
  require('./forceGraphDirective.js')(app);
  

  
  
};