const handler = require("../handlers/handlers");
let app;


module.exports = function(app /** @Class Express */) {

  app.get('/', handler.home);
  app.get('/about', handler.about);
  app.get('/registration', handler.registration);

};