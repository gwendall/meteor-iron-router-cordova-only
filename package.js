Package.describe({
  name: 'gwendall:iron-router-cordova-only',
  summary: 'Redirects visitors that are not accessing your app through Cordova',
  version: '0.1.0',
  git: "https://github.com/gwendall/meteor-iron-router-cordova-only.git",
});

Package.onUse(function (api, where) {

  api.use('iron:router@1.0.9');
  api.addFiles('lib.js');

});
