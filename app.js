$(window).on('load', function(){
  // setTimeout(removeLoader, 100); //wait for page load PLUS two seconds.
  removeLoader();
});
function removeLoader(){
    $( "#loadingDiv" ).fadeOut(150, function() {
      // fadeOut complete. Remove the loading div
      $( "#loadingDiv" ).remove(); //makes page more lightweight 
  });  
}
