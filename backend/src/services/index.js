const users = require("./users/users.service.js");
const payments = require("./payments/payments.service.js");
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(payments);
};
