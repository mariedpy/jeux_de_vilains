var counterElement = document.getElementById("counter-element-js");
var boiteTutoElement = document.getElementById("boite-tuto-js");

var counter = 3;

counterElement.textContent = counter;

var countdown = setInterval(function(){
  if (counter > 0) {
    counter = counter - 1;
    counterElement.textContent = counter;
  } else {
    clearInterval(countdown);
    boiteTutoElement.classList.add("wobble");
    setTimeout(function() {
      window.location = "https://mariedpy.github.io/jeux_de_vilains/circle_lose.html";
    }, 1000);
  }
}, 1000);
