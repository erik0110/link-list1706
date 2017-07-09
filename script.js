var title = $('.title').val;
var url = $('.url').val;
var enterBtn = $('.enter-btn').val;
var readBtn = $('.read-btn').val;
var deleteBtn = $('.delete.btn').val;

//click enter
$('.enter-btn').on('click', addCard)
               .on('click', clearInputFields);

//  .on('click', validateInput);

function clearInputFields() {
  $('.title').val('');
  $('.url').val('');
}

// function validateInput(e) {
//   e.preventDefault();
//   if (title !== '' || url !== '') {
//     console.log('hellllllooo');
//     alert('you may proceed');
//   }
// }

function addCard(e, newCardTitle, newCardUrl) {
  e.preventDefault();
  $('#website-list').prepend(`
    <article>
      <h2 class="card-title">The Website Title</h2>

      <a target="_blank" class="card-url-link" >www.thewebsiteurl.com</a>

      <p class="read-indicator">Read</p>

      <button type="button" name="delete" class="delete-btn">Delete</button>
  </article>
  `);

  //take user input --> card h2 and p
  var newWebsite = $('.title').val();
  var newUrl = $('.url').val();
  $('.card-title').text(newWebsite);
  $('.card-url-link').text(newUrl);
}

$('#website-list').on('click', '.card-url-link', function (e) {
    $(e.target).parent().find('.read-indicator').addClass('indicator-on');
  });

//click on link in card
$('.card-url-link').on('click', function () {
  console.log('hllo');
});

// function indicatorOn() {
//   console.log('hello');
//   $('.read-indicator').addClass('indicator-on');
// }

//need to write a function to delete card
$('.delete-btn').on('click', function () {
});

// $(document).ready(function () {
//   console.log('is this working');
// });
