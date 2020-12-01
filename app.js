$(window).on('load', function () {
  // setTimeout(removeLoader, 100); //wait for page load PLUS two seconds.
  removeLoader();
  setTimeout(() => {
    document.getElementById('openmenu').checked = true;
  }, 1000)
  document.getElementById('openmenu').checked = true;
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
  $('.hamburger-icon').fadeTo(2000, 0.3);
})



if(document.getElementById('openmenu').checked) {
  setInterval(() => {
    $('.hamburger-icon').fadeTo('slow', 1);
    $('.hamburger-icon').fadeTo(2000, 0.3);
  }, 1000);
}


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


const arr = [
  // {class: 'warranty', url: 'https://docs.google.com/spreadsheets/d/13m69xiLoxNK_IlfKeNDXe73hqTI0l56FybaJv2jdVcc/edit#gid=0'},
  {class: 'kiosk', url: 'http://kiosk.phcocap.com/'},
  {class: 'stockCheck', url: 'https://shrouded-headland-78556.herokuapp.com/'},
  {class:'vsn', url: 'http://report.phcocap.com/Custom_Reporting_General_Check_SerialNum.aspx'},
  {class: 'pelw', url: 'http://report.phcocap.com/Custom_Reporting_General_PELW_ADD.aspx'},
  {class: 'search', url: 'http://stockbal.phcocap.com/'},
  {class: 'wxr', url: 'http://i2wxr.phcocap.com/'},
  {class: 'stkm', url: 'http://stkm.phcocap.com/addstockin.aspx'},
  {class: 'tracePhone', url: 'http://report.phcocap.com/Custom_Reporting_General_Trace_by_Phone.aspx'},
  {class: 'localServer', url: 'http://192.168.5.207:3000/'},
  {class: 'phco', url: 'https://www.phco.my/'},
  {class: 'order', url: 'https://docs.google.com/spreadsheets/d/1hRvFRdMI_39CtoKoSF_j0z1YhToG3WcobEsnvWD_2t8/edit#gid=0'},
  {class: 'celeron', url: 'http://stockbal.phcocap.com/default4.aspx?s=1&c=CELERON%20LAPTOP&q=1'},
  {class: 'pentium', url: 'http://stockbal.phcocap.com/default4.aspx?s=1&c=PENTIUM%20LAPTOP&q=1'},
  {class: 'i3', url: 'http://stockbal.phcocap.com/default4.aspx?s=1&c=i3%20laptop&q=1'},
  {class: 'i5', url: 'http://stockbal.phcocap.com/default4.aspx?s=1&c=i5%20laptop&q=1'},
  {class: 'i7', url: 'http://stockbal.phcocap.com/default4.aspx?s=1&c=i7%20laptop&q=1'},
  {class: 'e2', url: 'http://stockbal.phcocap.com/default4.aspx?s=1&c=E2%20LAPTOP&q=1'},
  {class: 'a4', url: 'http://stockbal.phcocap.com/default4.aspx?s=1&c=A4%20LAPTOP&q=1'},
  {class: 'a6', url: 'http://stockbal.phcocap.com/default4.aspx?s=1&c=A6%20LAPTOP&q=1'},
  {class: 'a9', url: 'http://stockbal.phcocap.com/default4.aspx?s=1&c=A9%20LAPTOP&q=1'},
  {class: 'athlon', url: 'http://stockbal.phcocap.com/default4.aspx?s=1&c=ATHLON%20LAPTOP&q=1'},
  {class: 'ryzen3', url: 'http://stockbal.phcocap.com/default4.aspx?s=1&c=RYZEN%203%20LAPTOP&q=1'},
  {class: 'ryzen5', url: 'http://stockbal.phcocap.com/default4.aspx?s=1&c=RYZEN%205%20LAPTOP&q=1'},
  {class: 'ryzen7', url: 'http://stockbal.phcocap.com/default4.aspx?s=1&c=RYZEN%207%20LAPTOP&q=1'},
  {class: 'ryzen9', url: 'http://stockbal.phcocap.com/default4.aspx?s=1&c=RYZEN%209%20LAPTOP&q=1'}
];



const screenChange = (obj) => {
  document.querySelector(`.${obj.class}`).addEventListener('click', () => {
    document.getElementById('openmenu').checked = false;
    $('iframe').hide();
    document.querySelector('iframe').setAttribute('src', `${obj.url}`);
    $('iframe').fadeIn(2000);
  })
}

arr.forEach((obj) => {
  screenChange(obj);
})

$('iframe').mousemove(() => {
  document.getElementById('openmenu').checked = false;
  $('.hamburger-icon').fadeTo(700, 0);
  $('.hamburger-icon').fadeTo(700, 1);
  $('.hamburger-icon').fadeTo(700, 0);
  $('.hamburger-icon').fadeTo(700, 1);
  $('.hamburger-icon').fadeTo(700, 0.5);
})

//git push -f origin master // force

//git add .
//git commit -m ".."
//git branch // check branch
//git push origin <branch name>

