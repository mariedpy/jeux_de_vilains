var counterElement = document.getElementById("counter-element-js");

var counter = 3;

counterElement.textContent = counter;

var countdown = setInterval(function(){
  if (counter > 0) {
    counter = counter - 1;
    counterElement.textContent = counter;
  } else {
    clearInterval(countdown);
    window.location = "https://mariedpy.github.io/jeux_de_vilains/intro_jeu.html";
  }
}, 1000);
