var title = $('.title').val;
var url = $('.url').val;
var enterBtn = $('.enter-btn').val;

var readBtn = $('.read-btn').val;
var deleteBtn = $('.delete.btn').val;

$('.enter-btn').on('click', addCard);

function addCard(e) {
  e.preventDefault();
  $('#website-list').append(`
    <article>
      <h2 class="card-title">The Website Title</h2>

      <a href="" target="_blank" class="card-url-link" >www.thewebsiteurl.com</a>

      <p class="read-indicator">Read</p>

      <button type="button" name="delete" class="delete-btn">Delete</button>
  </article>
  `);

  //take user input --> card h2 and p
  var newWebsite = $('.title').val();
  var newUrl = $('.url').val();
  $('.card-title').text(newWebsite);
  $('.card-url-link').text(newUrl);

  // $('.title').text()
}

$('.read-btn').on('click', function () {
  readBtn.style.color = '#f05a28';
  readBtn.style.fontWeight = '600';
  readBtn.style.borderBottom = 'none';
});

$('.delete-btn').on('click', function () {
});
