$(window).on('load', function () {
  // setTimeout(removeLoader, 100); //wait for page load PLUS two seconds.
  removeLoader();
});
function removeLoader() {
  $(".c").fadeOut(500, function () {
    // fadeOut complete. Remove the loading div
    $(".c").remove(); //makes page more lightweight 
  });
}

document.getElementById('openmenu').addEventListener('mouseover', () => {
  console.log('mouse over!!');
  $('.hamburger-icon').fadeTo('slow', 1);
})

document.getElementById('openmenu').addEventListener('mouseout', () => {
  $('.hamburger-icon').fadeTo('slow', 0.5);
})


function stop() {
  function disable() {
    $(".loader").fadeOut(500, function () {
      $(".loader").remove();
      document.getElementById('fake-body').style = null;
      document.querySelector('.menu-container').style.visibility = 'visible';
      screenSaver();
    });


  }

  document.addEventListener('mousemove', () => {
    disable();
  })

  $('body').keydown(() => {
    disable();
  })

  
}

function screenSaver() {
  setTimeout(() => {

    document.querySelector('.menu-container').style.visibility = 'hidden';

    let DomFake = document.getElementById('fake-body');

    DomFake.style.margin = 0;
    DomFake.style.height = '100vh';
    DomFake.style.display = 'flex';
    DomFake.style.alignItems = 'center';
    DomFake.style.justifyContent = 'center';
    DomFake.style.backgroundColor = 'black';

    setTimeout(() => {
      document.querySelector('.menu-container').insertAdjacentHTML('afterend', `<div class="loader">
      <div class="face">
        <div class="circle"></div>
      </div>
      <div class="face">
        <div class="circle"></div>
      </div>
    </div>`)
    }, 1000)


  }, 600000);
 

  stop();
}

screenSaver();


