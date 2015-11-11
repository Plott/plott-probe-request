var spawn = require('child_process').spawn;

/**
 * Scans surrounding area for probe requests.
 *
 * @module plott/probeRequest
 * @category network
 * @return {Function}
 * @example
 * plott.probeRequest();
 * --Do something
 *})
 *
 *
 *
 */

module.exports = function(callback) {
  var tcpdump = spawn('tcpdump', ['sudo tcpdump -I -e -i wlan1 -s 256 type mgt subtype probe-req']);

  tcpdump.stdout.on('data', function (data) {
    console.log('tcpdump data: ' + data);
    return callback(null, data);
  });

  tcpdump.stderr.on('data', function (data) {
    console.log('tcpdump stderr: ' + data);
    return callback(data, null)
  });

  tcpdump.on('close', function (code) {
    if (code !== 0) {
      console.log('tcpdump process exited with code ' + code);
    }
  });

  child.on('error', function (err) {
    console.log('Failed to start child process.');
    return callback(err, null);
  });
}
