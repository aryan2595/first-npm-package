const path = require("path");

function isLoggedIn() {
	const folders = path.join(__dirname);
	return folders.split("\\").slice(-3, -1)[0];
}

// isLoggedIn();
module.exports = isLoggedIn;
