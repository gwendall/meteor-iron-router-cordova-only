Router.cordova = Router.cordova || {};

Router.cordova.only = function(config) {
  if (!Meteor.isClient || Meteor.isCordova) return;
  config = config || {};
  var options = {};
  if (config.only) {
    options.only = config.only;
  } else if (config.except) {
    options.except = config.except;
  }
  Router.onBeforeAction(function() {
    setTimeout(function() {
      window.location.href = config.redirectTo || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }, config.redirectingDelay || 0);
    if (config.redirectingTpl) {
      this.render(config.redirectingTpl);
    } else {
      this.next();
    }
  }, options);
};
