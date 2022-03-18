var numberOfKeyButtons = document.querySelectorAll(".note").length;

for (var i = 0; i < numberOfKeyButtons; i++) {

  document.querySelectorAll(".note")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "a":
      var c = new Audio("music/C.mp3");
      c.play();
      break;

    case "b":
      var x = new Audio("music/X.mp3");
      x.play();
      break;

    case "c":
      var d = new Audio('music/D.mp3');
      d.play();
      break;

    case "d":
      var y = new Audio('music/Y.mp3');
      y.play();
      break;

    case "e":
      var e = new Audio('music/E.mp3');
      e.play();
      break;

    case "f":
      var f = new Audio('music/F.mp3');
     f.play();
      break;

    case "g":
      var w = new Audio('music/W.mp3');
      w.play();
      break;

      case "h":
      var g = new Audio('music/G.mp3');
      g.play();
      break;

      case "i":
      var v = new Audio('music/V.mp3');
      v.play();
      break;

      case "j":
      var a = new Audio('music/A.mp3');
      a.play();
      break;

      case "k":
      var z = new Audio('music/Z.mp3');
      z.play();
      break;
      case "l":
        var b = new Audio('music/B.mp3');
        b.play();
        break;

    default: console.log(key);

  }
}




