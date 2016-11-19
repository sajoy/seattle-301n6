'use strict';

// tab based navigation
// event on click
$(function() {
  $('.tab-content').hide()
})

$('.nav-items > a').on('click', function() {
  // $(`#${$(this).data('tab')}`)
  $('.tab-content').hide()
  $('#' + $(this).data('tab')).show()
})

// add new menu items
$('button').on('click', function(eve) {
  eve.preventDefault()
  $('#' + $(this).data('menu')).append('<li>boom</li>')
})

// event delegation
$('.menus').on('click', 'li', function() {
  console.log('I did the thing')
})

/* ------------------------------*/

$('select[name="icecream"]').on('change',function() {
  $('img').hide()
  $(`img[data-flavor="${ $(this).val() }"]`).show()
  // $('img[data-flavor="' + $(this).val() + '"]')
})
