var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
  var name = require('url').parse(req.url, true).query.name;

  if (name == undefined) { name = 'XXX'; }

  if (name == 'burningbird') {
    var file = 'phoenix5a.png';
    fs.stat(file, (err, stat) => {
      if (err) {
        console.log(err);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Sorry, Burningbird isn't around right now \n");
      }
      else {
        var img = fs.readFileSync(file);
        res.contentType = 'image/png';
        res.contentLength = stat.size;
        res.end(img, 'binary');
      }
    });
  }
  else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello ' + name + '\n');
  }
}).listen(8124);

console.log('Sever running at port 8124');