// jshint esversion: 6
var $title = $('.title');
var $url = $('.url');
var $enterBtn = $('.enter-btn');
var $countInfo = $('.count-info');
var $deleteBtn = $('.delete-card-btn');
var $newCard = $('article');
var $cardCounter = 0;
var $readCounter = 0;
var $unreadCounter = 0;

//FUNCTIONS
function addCard() {
  var $cardLibrary = $('#website-list');
  var $newWebsite = $('.title').val();
  var $newUrl = $('.url').val();
  $newCard = `<article>
      <h2 class="card-title">${$newWebsite}</h2>
      <a href="${$newUrl}" target="_blank" class="card-url-link" >${$newUrl}</a>
      <p class="read-indicator">Read</p>
      <button type="button" name="delete" class="delete-card-btn">Delete</button>
  </article>`;
  $cardLibrary.prepend($newCard);
}

function clearInputFields() {
  $('.title').val('');
  $('.url').val('');
}

function deleteRead() {
  $readCounter -= $('.has-been-read').length;
  readCardCount();
  $cardCounter -= $('.has-been-read').length;
  totalCardCount();
  $('.has-been-read').remove();
}

function hideCountInfo() {
  $countInfo.css('visibility', 'hidden');
}

function readCardCount() {
  $('.read-card-count').text($readCounter);
}

function showCountInfo() {
  $countInfo.css('visibility', 'visible');
  totalCardCount();
}

function toggleDeleteReadBtn() {
  if ($readCounter === 0) {
    $('.delete-read-btn').attr('disabled', true);
  } else {
    $('.delete-read-btn').attr('disabled', false);
  }
}

function totalCardCount() {
  $('.total-card-count').text($cardCounter);
}

function unreadCardCount() {
  $unreadCounter = $cardCounter - $readCounter;
  $('.unread-card-count').text($unreadCounter);
}

function updateCountForDelete(e) {
  if ($(e.target).parent().hasClass('has-been-read')) {
    $readCounter--;
    totalCardCount();
    readCardCount();
  } else {
    $unreadCounter--;
    totalCardCount();
    unreadCardCount();
  }
}

function validateInput() {
  $title = $('.title').val();
  $url = $('.url').val();
  if ($title.length === 0 || $url.length === 0) {
    $enterBtn.attr('disabled', true);
  } else {
    $enterBtn.attr('disabled', false);
  }
}

function validateUrl() {
  var $urlToTest = $('.url').val();
  var $urlEval = new RegExp('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$');
  if ($urlEval.test($urlToTest)) {
    $enterBtn.attr('disabled', false);
    $('.error').css('visibility', 'hidden');
  } else {
    $('.enter').attr('disabled', true);
    $('.error').css('visibility', 'visible');
  }
}

//EVENT LISTENERS
$(window).on('click', toggleDeleteReadBtn);

$(document).ready(hideCountInfo);

$('.delete-read-btn').on('click', deleteRead);

$('.enter-btn').on('click', function (e) {
  e.preventDefault();
  addCard();
  clearInputFields();
  validateInput();
  $cardCounter++;
  showCountInfo();
  unreadCardCount();
});

$title.on('input', validateInput);

$url.on('input', validateUrl);

$('#website-list').on('click', '.card-url-link', function (e) {
    $(e.target).parent().find('.read-indicator').addClass('indicator-on');
    $(e.target).parent().addClass('has-been-read');
    $readCounter++;
    readCardCount();
    unreadCardCount();
  });

$('#website-list').on('click', '.delete-card-btn', function (e) {
    $(e.target).parent().remove();
    $cardCounter--;
    updateCountForDelete(e);
  });
