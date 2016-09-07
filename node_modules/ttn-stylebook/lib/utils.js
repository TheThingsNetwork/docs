var child_process = require('child_process');
var path = require('path');

exports.DIST = path.join(__dirname, '..', 'dist');

exports.exec = function(cmd, args, cb) {
	// console.log(cmd + ' ' + args.join(' '));

	child_process.execFile(cmd, args, function(error, stdout, stderr) {
		return cb(error ? (stderr || stdout || error) : undefined);
	});
};