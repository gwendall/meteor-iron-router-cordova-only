Installation  
------------

``` sh
meteor add gwendall:iron-router-cordova-only
```

What is does
============

This package redirects visitors that are not accessing your app through Cordova.  
It is particularly handy if you don't want to let people access your app via a web browser by visiting its mobile-server url.

Configuration
=======

``` javascript
Router.cordova.only({
  redirectTo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // URL the visitor will be redirected to
  redirectingTpl: 'redirecting', // Provide a template name if you want to temporarily render it before redirecting
  redirectingDelay: 1000, // Delay before redirecting
  only: [], // Only apply redirect to certain routes - pass an array of route names
  except: [], // Apply redirect to all routes except some - pass an array of route names
});
```
