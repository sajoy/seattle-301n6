(function(module) {
  'use strict'
  const contactView = {}
  contactView.init = function(ctx) {
    console.dir(ctx)
    const newId = ctx.params.id
    $.getJSON('./scripts/models/contact.json')
    .then(data => {
      document.getElementById('content').innerHTML = JSON.stringify(data)
    })
  }

  contactView.search = function() {
    document.getElementById('content').innerHTML = 'Contact Detail'
  }
  module.contactView = contactView
})(window)
