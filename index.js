var spawn = require('child_process').spawn;

module.export = function() {
  var tcpdump = spawn('tcpdump', ['sudo tcpdump -I -e -i wlan1 -s 256 type mgt subtype probe-req']);

  tcpdump.stdout.on('data', function (data) {
    console.log('tcpdump data: ' + data);
  });

  tcpdump.stderr.on('data', function (data) {
    console.log('tcpdump stderr: ' + data);
  });

}
