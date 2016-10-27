//Semantic ui
$('#toggle').click(function () {
  $('.ui.sidebar').sidebar('toggle');
});




// MINIMALIST CLOCK
var startTime = new Date(),
    // get the starting positions of each hand (in seconds)
    startS = startTime.getSeconds();
    startM = startTime.getMinutes() * 60 + startS;
    startH = startTime.getHours() % 12 * 3600 + startM;

refreshClock();

function refreshClock() {
  var now = new Date(),
      diff = timeDifference(startTime, now),
      degS = (startS + diff) / 60 * 360;
      degM = (startM + diff) / 3600 * 360;
      degH = (startH + diff) / 43200 * 360;

  $('.hour').css(rotate(degH));
  $('.minute').css(rotate(degM));
  $('.second').css(rotate(degS));

  setTimeout(refreshClock, 1000);
}
function timeDifference(date1, date2) {
  return Math.round(Math.abs(date2.getTime() - date1.getTime()) / 1000);
}
function rotate(deg) {
  return {
    '-webkit-transform': 'rotate(' + deg + 'deg)',
    '-moz-transform': 'rotate(' + deg + 'deg)',
    '-ms-transform': 'rotate(' + deg + 'deg)',
    '-o-transform': 'rotate(' + deg + 'deg)',
    'transform': 'rotate(' + deg + 'deg)'
  };
}

// Background transition

var imageHolder = document.getElementById("imageHolder");

var imageArray = [
  "images/clock/1.jpg",
  "images/clock/20.jpg",
  "images/clock/22.jpg"
];

var imgCounter = 0;

function changeImage() {
  imageHolder.setAttribute ("src",imageArray[imgCounter]);
  imgCounter++;
  if (imgCounter >=imageArray.length) {
    imgCounter = 0;
  }
}

setInterval(changeImage,5000);
