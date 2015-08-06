Router.cordova = Router.cordova || {};

Router.cordova.redirect = function(config) {
  if (Meteor.isCordova) return;
  config = config || {};
  Router.onBeforeAction(function() {
    setTimeout(function() {
      window.location.href = config.to || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }, config.redirectingDelay || 0);
    if (config.redirectingTpl) {
      this.render(config.redirectingTpl);
    } else {
      this.next();
    }
  }, {
    only: config.only || [],
    except: config.except || []
  });
};
