$(document).ready(function() {

  var socket = io();

  // this code was for testing setup and socket connection
  // console.log('jQuery running');
  // socket.on('greeting', function(data) {
  //   console.log(data.msg);
  //   socket.emit('thankyou', { msg: 'thanks for the connection' })
  // });

  $('#submit').click(function(){
    // gather all the information from the fields and send it to server via emit
    var data = {
      name: $('#name').val(),
      location: $('#location').val(),
      language: $('#language').val(),
      comments: $('#comments').val(),
    };
    socket.emit('submit_survey', data);
    resetPage();
  });

  socket.on('response', function(data) {
    $('#results').append(`<p>${data.message}<p>`);
    $('#results').show();
  });
  socket.on('lucky_number', function(data) {
    $('#results').append(`<p>${data.message}<p>`);
    $('#results').show();
  });

});

function resetPage() {
  // clear out all the values entered by user
  $('#name').val('');
  $('#location').val('Seattle');
  $('#language').val('Python');
  $('#comments').val('');
  // clear out results and hide div
  $('#results').html(``);
  $('#results').hide();
}
