//*****basic selectors*****//

//element
$('div')
// document.getElementsByTagName('div')

//class
$('.form-element')
// document.getElementsByClassName('form-element')

//id
$('#beautiful-list')
// document.getElementById('beautiful-list')

//parent descendent
$('section input')

//parent > child
$('section > form')

//attribute
$('input[name="my-checkbox"]')

//get text of the matched element(s)
$('p').text()
// document.getElementById('id').textContent

//set text of the matched element(s)
$('p').text('Hi, I am new content!')
// document.getElementById('id').textContent = 'Some Text'

//get html of the matched element(s)
$('#list-container').html()
// document.getElementById('id').innerHTML

//set html of the matched element(s)
// $('#list-container').html('<p>Hello World</p>')
// document.getElementById('id').innerHTML = '<p>Hello World</p>'

//get the data-category attribute of an li
$('li').data('category') // => 'list-item'

//set the data-category attribute of an li
$('li').data('category', 'new-list')

//create and append an element to the DOM
$('#beautiful-list').append('<li>Hello World</li>')

//remove an element from the DOM
// $('#beautiful-list').remove()
// commented out so it doesn't remove my list

//run a command as soon as the DOM loads
$(document).ready(function() {
  // do some code that will execute when the DOM is completely loaded
})

$(function() {
  // This is the shorthand way for $(document).ready()
})
