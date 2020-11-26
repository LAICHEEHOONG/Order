$(window).on('load', function(){
  // setTimeout(removeLoader, 100); //wait for page load PLUS two seconds.
  removeLoader();
});
function removeLoader(){
    $( ".c" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( ".c" ).remove(); //makes page more lightweight 
  });  
}
