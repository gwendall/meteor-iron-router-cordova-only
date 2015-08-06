Installation  
------------

``` sh
meteor add gwendall:iron-router-cordova-redirect
```

What is does
============

This package redirects visitors that are not accessing your app through Cordova.  
It is particularly handy if you don't want to let people access to your app via a web browser by visiting its mobile-server url.

Configuration
=======

``` javascript
Router.cordova.redirect({
  to: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Default redirect URL
  redirectingTpl: 'redirecting', // Provide if you want to show a temporary page before redirecting
  redirectingDelay: 1000, // Delay before redirecting
  only: [], // Only apply redirect to certain routes
  except: [], // Apply redirect to all routes except some
});
```
