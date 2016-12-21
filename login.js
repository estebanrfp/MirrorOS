const $ = jQuery = require('jquery')
// require('jquery-ui')
const ipc = require('electron').ipcRenderer


$(function(){

  $('.widget').draggable();

  // Show camera feed in login widget
  var video = document.querySelector(".login.widget #cam");
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
   
  if (navigator.getUserMedia) {       
      navigator.getUserMedia({video: true}, handleVideo, videoError);
  }
   
  function handleVideo(stream) {
    video.src = window.URL.createObjectURL(stream);
  }

  function videoError(e) {
      // do something
  }

  // If face recognized then login
  $(".login.widget").on("click", function () {
    $(".login.widget").fadeOut(500);
    $(".loader").fadeIn(1000, function() {
      setTimeout(function() {
        $(".notification").fadeIn(1000);
        setTimeout(function() { 
          $(".loader").fadeOut();
          $(".notification").fadeOut();
          setTimeout(function() { 
            window.location.href = "index.html";
          }, 1000);
        }, 3000);
      }, 1000);
    });
  });
   

  // box.on('click', (event) => {
  //   ipc.send('new_win', {
  //     width: 250,
  //     height: 350,
  //     frame: false,
  //     resizable: false
  //   })
  // })
})