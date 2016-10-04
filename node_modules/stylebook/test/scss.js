var path = require('path');

var fs = require('fs-extra');
var JsDiff = require('diff');
var rimraf = require('rimraf');
var should = require('should');

var utils = require('../lib/utils');

var tmpDir = path.join(__dirname, '..', 'tmp');
var srcDir = path.join(__dirname, 'scss');
var cmpDir = path.join(__dirname, 'css');

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
          var cmpFile = path.join(cmpDir, file);
          var cmpData = fs.readFileSync(cmpFile, 'utf8');

          if (tmpData !== cmpData) {

            if (process.env.UPDATE) {
              fs.writeFileSync(cmpFile, tmpData);
              error = new Error('Updated ' + cmpFile);
            } else {
              error = new Error(JsDiff.createPatch(tmpFile, cmpData, tmpData));
            }

            return false;
          }

          return true;

        })) {
        return done(error);
      }

      done();
    });

  });

  afterEach(function(done) {
    done();
    // rimraf(tmpDir, done);
  });

});