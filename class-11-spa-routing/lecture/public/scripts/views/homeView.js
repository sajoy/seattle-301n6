(function(ctx) {
  'use strict'
  const homeView = {}
  homeView.init = function() {
    document.getElementById('content').textContent = 'Hello World, from the home page!'
  }
  ctx.homeView = homeView
})(window)
