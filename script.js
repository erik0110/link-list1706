// jshint esversion: 6

var $title = $('.title');
var $url = $('.url');
var $enterBtn = $('.enter-btn');
var $readBtn = $('.read-btn');
var $deleteBtn = $('.delete.btn');
var $newCard = $('article');

//click enter and it validates input, clears input fields of form
$('.enter-btn').on('click', function (e) {
  e.preventDefault();
  clearInputFields();
  addCard();
});

//this clears the input fields
function clearInputFields() {
  $('.title').val('');
  $('.url').val('');
}

$url.on('input', function () {
  validateInput();
});

$title.on('input', function () {
  validateInput();
});

//make sure user typed something in, once they do it will
//run addCard- STILL THINKS THE VALUE IS UNDEFINED
function validateInput() {
  $title = $('.title').val();
  $url = $('.url').val();
  if ($title.length === 0 || $url.length === 0) {
    $enterBtn.attr('disabled', true);
  } else {
    $enterBtn.attr('disabled', false);
    console.log('enter is active');
    $enterBtn.addClass('enter-btn-able');
  }
}

function addCard() {
  var $newWebsite = $('.title').val();
  // console.log($newWebsite);
  var $newUrl = $('.url').val();
  var newCard = `<article>
      <h2 class="card-title">${$newWebsite}</h2>

      <a href="${$newUrl}" target="_blank" class="card-url-link" >${$newUrl}</a>

      <p class="read-indicator">Read</p>

      <button type="button" name="delete" class="delete-btn">Delete</button>
  </article>`;
  $('#website-list').prepend(newCard);
}

//this targets the link for a click so the read words turn red
$('#website-list').on('click', '.card-url-link', function (e) {
    $(e.target).parent().find('.read-indicator').addClass('indicator-on');
    $('.card-url-link').attr('href', newUrl);
  });

//need to write a function to delete card
$('.delete-btn').on('click', function () {
});

// $('#user-input').validate(); {
//   required: true;
//   url: true;
// };
