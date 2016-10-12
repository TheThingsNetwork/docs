var path = require('path');

var fs = require('fs-extra');
var JsDiff = require('diff');
var rimraf = require('rimraf');
var should = require('should');

var utils = require('../lib/utils');

var tmpDir = path.join(__dirname, '..', 'tmp');
var srcDir = path.join(__dirname, 'scss');

describe('main', function() {

  beforeEach(function(done) {
    rimraf(tmpDir, done);
  });

  it('generates expected CSS', function(done) {

    utils.exec('sass', ['--sourcemap=none', '--load-path', path.join(utils.DIST, 'scss'), '--update', srcDir + ':' + tmpDir], function(err) {

      if (err) {
        return done(typeof Error ? err : new Error(err));
      }

      var files = fs.readdirSync(tmpDir);
      var error;

      if (!files.every(function(file) {
          var tmpFile = path.join(tmpDir, file);
          var tmpData = fs.readFileSync(tmpFile, 'utf8');

          var expected = {
            '.text-primary {\n  color: #FF0000; }': true,
            '.ttn-color-brand {\n  color: #FF0000; }': true,
            '.brand-primary {\n  color: #FF0000; }': true,
            '${ttn-font-path}': false
          };

          return Object.keys(expected).every(function(css) {
            var wanted = expected[css];

            if ((tmpData.indexOf(css) !== -1) !== wanted) {
              error = new Error((wanted ? 'Expected: ' : 'Didn\'t expect: ') + css);
              return false;
            }

            return true;
          });

        })) {
        return done(error);
      }

      done();
    });

  });

  afterEach(function(done) {
    rimraf(tmpDir, done);
  });

});