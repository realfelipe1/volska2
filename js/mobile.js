

function myFunction() {
    var q = window.matchMedia("(max-width: 700px)")
    if (q.matches) { // If media query matches

        var die = document.getElementById("die")

        die.remove();
    } else {
        document.getElementById('nerd').id = 'butter';
    }
  }

myFunction()

