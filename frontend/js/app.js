let prevScrollPos = window.scrollY;

window.onscroll = function() {
  let currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // Scroll up
    document.getElementById("navbar").style.top = "0";
  } else {
    // Scroll down
    document.getElementById("navbar").style.top = "-67px"; // Adjust the value as needed
  }

  prevScrollPos = currentScrollPos;
};

