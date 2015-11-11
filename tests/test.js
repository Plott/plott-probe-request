var probeRequest = require('../');
test = require('tape');

    test('Probe Request', function (t){
      probeRequest(function(err, data) {
        if(err) { console.log(err)}
        console.log(data);
      });
      t.end();
    });
