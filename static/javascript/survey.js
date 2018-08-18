$(document).ready(function() {

  var socket = io();

  // make sure jQuery hooked up and running
  // console.log('jQuery running');

  $('#submit').click(function(){
    // gather all the information from the fields and send it to server via emit
    var data = {
      name: $('#name').val(),
      location: $('#location').val(),
      language: $('#language').val(),
      comments: $('#comments').val(),
    };
    socket.emit('submit_survey', data);
  });

  socket.on('updated_message', function(data) {
    console.log(data.message);
  });
  socket.on('lucky_number', function(data) {
    console.log(data.message);
  });

  // this code was for testing socket connection
  // socket.on('greeting', function(data) {
  //   console.log(data.msg);
  //   socket.emit('thankyou', { msg: 'thanks for the connection' })
  // });

});
