var path = require('path');

Package.describe({
  summary: "Bootstrap with font-awesome included!"
});

Package.on_use(function (api) {
  api.add_files(path.join('font', 'fontawesome-webfont.eot'), 'client');
  api.add_files(path.join('font', 'fontawesome-webfont.woff'), 'client');
  api.add_files(path.join('font', 'fontawesome-webfont.ttf'), 'client');
  api.add_files(path.join('font', 'fontawesome-webfont.svg'), 'client');
  api.add_files(path.join('bootstrap', 'less', 'bootstrap.less'), 'client');
  api.add_files(path.join('less', 'responsive.less'), 'client');
  api.add_files(path.join('js', '*'), 'client');

  // XXX this makes the paths to the icon sets absolute. it needs
  // to be included _after_ the standard bootstrap css so
  // that its styles take precedence.
  // api.add_files(path.join('css', 'bootstrap-override.css'), 'client');
});
