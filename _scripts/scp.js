require('dotenv').config({
  silent: true
});

const SCP_TARGET = process.env.SCP_TARGET || process.argv[2];

if (!SCP_TARGET) {
  console.error('Set SCP_TARGET or pass an argument with something like: user@host:/path');
  process.exit(1);
}

const path = require('path');
const async = require('async');
const child_process = require('child_process');

const cwd = path.resolve(__dirname, '..');

async.series([

  cleanup,

  (cb) => {
    console.log('Generating site...');

    const child = child_process.exec('bundle exec jekyll build -d _scp --config _config.yml,_scripts/scp.yml', {
      cwd: cwd
    }, cb);

    child.stdout.on('data', console.log);
    child.stderr.on('data', console.error);
  },

  (cb) => {
    console.log('Uploading site...');

    const child = child_process.exec('scp -rp _scp/* ' + SCP_TARGET, {
      cwd: cwd
    }, cb);

    child.stdout.on('data', console.log);
    child.stderr.on('data', console.error);
  }

], (err) => {

  if (err) {
    console.error(err);
  }

  cleanup((cErr) => {

    if (cErr) {
      console.error(cErr);
      process.exit(1);
    }

    process.exit((err || cErr) ? 1 : 0);

  });
});

function cleanup(cb) {
  console.log('Deleting generated site');

  const child = child_process.exec('rm -rf _scp', {
    cwd: cwd
  }, cb);

  child.stdout.on('data', console.log);
  child.stderr.on('data', console.error);
}