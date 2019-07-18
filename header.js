window.onscroll = function () {
    myFunction()
  };

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  var shrink = document.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }

    if (document.body.scrollTop > 660 || document.documentElement.scrollTop > 660) {
      header.classList.add("headertoggle");
    } else {
      header.classList.remove("headertoggle");
    }
  }
//   <!-- countdown js -->
  var countDownDate = new Date("jul 20 , 2019 ").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    days = (days < 10) ? "0" + days : days;
    hours = (hours < 10) ? "0" + hours : hours;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

  }, 1000);