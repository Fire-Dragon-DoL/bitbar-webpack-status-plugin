var fs = require('fs');

function BitBarWebpackStatusPlugin(options) {
  options       = options || {};
  this.filePath = '/tmp/webpack-status';

  if (options.filePath)
    this.filePath = options.filePath;
}

BitBarWebpackStatusPlugin.prototype.apply = function(compiler) {
  var self = this;

  compiler.plugin('compile', function(stats) {
    fs.writeFile(self.filePath, '0');
  });

  compiler.plugin('done', function(stats) {
    if (stats.hasErrors())
      fs.writeFile(self.filePath, '-1');
    else
      fs.writeFile(self.filePath, '1');
  });
};

module.exports = BitBarWebpackStatusPlugin;
