

require('angular');

module.exports = function(app) {
  require('./simpleDirective.js')(app);
  require('./simpleTableDirective.js')(app);
  require('./tab1Directive.js')(app);
  require('./tab2Directive.js')(app);
  require('./tab3Directive.js')(app);
  require('./codeEditorDirective.js')(app);
};