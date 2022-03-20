const path = require("path");
const os = require("os");
function isLoggedIn() {
	return path.join(os.path.realpath(__file__));
	return os.path.dirname(os.path.realpath(__file__));
}

module.exports = isLoggedIn;
