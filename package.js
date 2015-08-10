Package.describe({
  name: 'gwendall:iron-router-cordova-only',
  summary: 'Redirects visitors that are not accessing your app through Cordova',
  version: '0.1.1',
  git: "https://github.com/gwendall/meteor-iron-router-cordova-only.git",
});

Package.onUse(function (api, where) {

  api.use([
    'iron:router@1.0.9',
    'jboulhous:dev@1.0.1'
  ]);
  api.addFiles('lib.js');

});
