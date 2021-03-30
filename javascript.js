// Grow Function 
document.getElementById("button1").onclick = function() {growFunction()};

function growFunction() {
  document.getElementById("box").style.height = "300px";
}

// Blue Function 
document.getElementById("button2").onclick = function() {blueFunction()};

function blueFunction() {
  document.getElementById("box").style.backgroundColor = "blue";
  document.getElementById("box").innerHTML = 
  "";
  document.getElementById("box").style.backgroundImage = "none";
}

// Fade Function 
document.getElementById("button3").onclick = function() {fadeFunction()};

function fadeFunction() {
  document.getElementById("box").style.opacity = "0.4";
}

// Fade In Function 
document.getElementById("button4").onclick = function() {fadeInFunction()};

function fadeInFunction() {
  document.getElementById("box").style.opacity = "1";
}

// Move Left Function 
document.getElementById("button5").onclick = function() {moveLeftFunction()};

function moveLeftFunction() {
  document.getElementById("box").style.transition = "0s";
  document.getElementById("box").style.transform = "translateX(-17px)";
}

// Move Right Function 
document.getElementById("button6").onclick = function() {moveRightFunction()};

function moveRightFunction() {
  document.getElementById("box").style.transition = "0s";
  document.getElementById("box").style.transform = "translateX(17px)";
}

// Run Away Function 
document.getElementById("button7").onclick = function() {runAwayFunction()};

function runAwayFunction() {
  document.getElementById("box").style.transitionTimingFunction = "ease-out";
  document.getElementById("box").style.transition = "1s";
  document.getElementById("box").style.transform = "translateX(1000px)";
}

// Jeff Goldblum Function 
document.getElementById("button8").onclick = function() {jeffGoldblumFunction()};

function jeffGoldblumFunction() {
  document.getElementById("box").style.backgroundColor = "orange";
  document.getElementById("box").innerHTML = 
  "Jeff <br /> Goldblum!";
  document.getElementById("box").style.textAlign = 
  "right";
  document.getElementById("box").style.color = 
  "#fff";
  document.getElementById("box").style.fontWeight = 
  "700";
  document.getElementById("box").style.backgroundImage = "url('https://m.media-amazon.com/images/M/MV5BY2ViNDIwNmUtZGQ5Ni00MDYxLWI5YTktNWU1NGRlYWQ1ZDg0XkEyXkFqcGdeQXVyOTAyMDgxODQ@._V1_UY317_CR20,0,214,317_AL_.jpg')";
  document.getElementById("box").style.backgroundSize = "contain";
  document.getElementById("box").style.backgroundRepeat = "no-repeat";
 
}

// Reset Function
document.getElementById("button9").onclick = function() {resetFunction()};

function resetFunction() {
  document.getElementById("box").style.height = "150px";
  document.getElementById("box").style.width = "150px";
  document.getElementById("box").style.backgroundColor = "orange";
  document.getElementById("box").style.opacity = "1";
  document.getElementById("box").style.transform = "translateX(0)";
  document.getElementById("box").style.transition = "0s";
  document.getElementById("box").innerHTML = 
  "";
  document.getElementById("box").style.backgroundImage = "none";
  document.getElementById("button11").style.transition = "0s";
  document.getElementById("button11").style.transform = "translateY(0px)";
}

// Red Button Function 
document.getElementById("button11").onclick = function() {redButtonFunction()};

function redButtonFunction() {
  document.getElementById("button11").style.transitionTimingFunction = "ease-out";
  document.getElementById("button11").style.transition = "1s";
  document.getElementById("button11").style.transform = "translateY(1000px)";
  document.getElementById("button1").style.transitionTimingFunction = "ease-out";
  document.getElementById("button1").style.transition = "1s";
  document.getElementById("button1").style.transform = "translateY(1000px)";
  document.getElementById("button2").style.transitionTimingFunction = "ease-out";
  document.getElementById("button2").style.transition = "1s";
  document.getElementById("button2").style.transform = "translateY(1000px)";
  document.getElementById("button3").style.transitionTimingFunction = "ease-out";
  document.getElementById("button3").style.transition = "1s";
  document.getElementById("button3").style.transform = "translateY(1000px)";
  document.getElementById("button4").style.transitionTimingFunction = "ease-out";
  document.getElementById("button4").style.transition = "1s";
  document.getElementById("button4").style.transform = "translateY(1000px)";
  document.getElementById("button5").style.transitionTimingFunction = "ease-out";
  document.getElementById("button5").style.transition = "1s";
  document.getElementById("button5").style.transform = "translateY(1000px)";
  document.getElementById("button6").style.transitionTimingFunction = "ease-out";
  document.getElementById("button6").style.transition = "1s";
  document.getElementById("button6").style.transform = "translateY(1000px)";
  document.getElementById("button7").style.transitionTimingFunction = "ease-out";
  document.getElementById("button7").style.transition = "1s";
  document.getElementById("button7").style.transform = "translateY(1000px)";
  document.getElementById("button8").style.transitionTimingFunction = "ease-out";
  document.getElementById("button8").style.transition = "1s";
  document.getElementById("button8").style.transform = "translateY(1000px)";
  document.getElementById("button9").style.transitionTimingFunction = "ease-out";
  document.getElementById("button9").style.transition = "1s";
  document.getElementById("button9").style.transform = "translateY(1000px)";
  document.getElementById("button11").style.transitionTimingFunction = "ease-out";
  document.getElementById("button10").style.transition = "1s";
  document.getElementById("button10").style.transform = "translateY(1000px)";
}

// Useless Button Function 
document.getElementById("button10").onclick = function() {uselessButtonFunction()};

function uselessButtonFunction() {
  document.getElementById("button10").style.transitionTimingFunction = "ease-out";
  document.getElementById("button10").style.transition = "1s";
  document.getElementById("button10").style.transform = "translateY(1000px)";}