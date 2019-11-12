var counterElement = document.getElementById("counter-element-js");

var counter = 3;

counterElement.textContent = counter;

var countdown = setInterval(function(){
  if (counter > 0) {
    counter = counter - 1;
    counterElement.textContent = counter;
  } else {
    clearInterval(countdown);
    history.pushState({}, "", "intro_jeu.html");
    document.location.reload();
  }
}, 1000);
