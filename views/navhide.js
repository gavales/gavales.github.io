var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("logo-wide").style.fontSize = "2rem";
    document.getElementById("logo-wide").style.paddingTop = "1.5rem";
    document.getElementById("logo-narr").style.width = "10rem";
    document.getElementById("navbar").style.height = "5rem";
  } else {
    document.getElementById("logo-wide").style.fontSize = "1rem";
    document.getElementById("logo-wide").style.paddingTop = "1.3rem";
    document.getElementById("logo-narr").style.width = "5rem";
    document.getElementById("navbar").style.height = "3.1rem";
  }
  prevScrollpos = currentScrollPos;
}
