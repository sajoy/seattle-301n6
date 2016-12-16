(function(ctx) {
  'use strict'
  const aboutView = {}
  aboutView.init = function() {
    document.getElementById('content').textContent = 'FlibbityJibbit was my homeboy!!'
  }
  ctx.aboutView = aboutView
})(window)
