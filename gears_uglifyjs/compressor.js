var UglifyJS = require('uglify-js'),
    source = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
  source += chunk;
});

process.stdin.on('end', function() {
  var result = UglifyJS.minify(source, {fromString: true});
  process.stdout.write(result.code);
});
