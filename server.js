var app = require("./app");
const port = process.env.PORT || 5000;

var server = app.listen(port, function() {
  console.log("Express server listening on port " + port);
});
