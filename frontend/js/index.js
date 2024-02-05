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
<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
var typed= new Typed(".typeWriter",{
  strings: ["Full Stack Developer", "Java Developer", "Future Senior Dev"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
});
