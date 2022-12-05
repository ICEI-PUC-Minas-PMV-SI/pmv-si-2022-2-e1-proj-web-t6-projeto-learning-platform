const { JsonDbAuthStrategy } = require("@jmilanes/hotbars");

class LocalAuth extends JsonDbAuthStrategy {}

module.exports = LocalAuth;
