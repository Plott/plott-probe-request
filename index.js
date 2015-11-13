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
  var exec = require('child_process').exec,
    child;

  child = exec('tcpdump -I -e -i wlan1 -s 256 type mgt subtype probe-req',
    function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      return callback(error, stdout.toString());
      if (error !== null) {
        console.log('exec error: ' + error);
        return callback(error, null);
      }
  });
};
