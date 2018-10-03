var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://aipuser1:test1234@ds141942.mlab.com:41942/authentication-test-jwt"
);

module.exports = { mongoose };
