window.addEventListener("load", function() {
  var redText = document.getElementsByTagName('b')[0];
  setInterval(function() {
    redText.style.visibility = (redText.style.visibility == 'hidden' ? 'visible' : 'hidden');
  }, 500);

  var body = document.body;
  setInterval(function() {
  	body.style.background = (body.style.background == "rgb(223, 223, 223)" ? "rgb(255, 255, 255)" : "rgb(223, 223, 223)");
  }, 500)
});