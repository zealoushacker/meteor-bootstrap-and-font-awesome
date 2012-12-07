var path = require('path');

Package.describe({
  summary: "Bootstrap with font-awesome included!"
});

Package.on_use(function (api) {
  api.add_files(path.join('css', 'bootstrap.min.css'), 'client');
  api.add_files(path.join('js', 'bootstrap.min.js'), 'client');

  api.add_files('/packages/bootstrap-with-font-awesome/font/fontawesome-webfont.eot', 'client');
  api.add_files('/packages/bootstrap-with-font-awesome/font/fontawesome-webfont.eot', 'client');
  api.add_files('/packages/bootstrap-with-font-awesome/font/fontawesome-webfont.woff', 'client');
  api.add_files('/packages/bootstrap-with-font-awesome/font/fontawesome-webfont.ttf', 'client');
  api.add_files(path.join('css', 'font-awesome.css'), 'client');
});
