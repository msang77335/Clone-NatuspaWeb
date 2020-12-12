const carousel = document.querySelector(".carousel");
const header = document.querySelector(".header");
const toTop = document.querySelector(".to-top");
const footer = document.querySelector(".footer");
const content = document.querySelector(".content");
const body = document.querySelector("body");
const bars = document.querySelector(".bars");
const btnScrollTop = document.querySelector(".to-top");

window.addEventListener("resize", changeFixedElementWidth);
window.addEventListener("load", changeFixedElementWidth);
window.addEventListener("load", setMagrinBottomContent);
bars.addEventListener("click", function () {
   header.classList.toggle("show");
});

function setMagrinBottomContent() {
   height = footer.getBoundingClientRect().height;
   content.style.marginBottom = height + "px";
}

function changeFixedElementWidth() {
   const carouselWidth = carousel.getBoundingClientRect().width;
   header.style.width = carouselWidth + "px";
   footer.style.width = carouselWidth + "px";
}
window.addEventListener("scroll", function () {
   header.classList.toggle("sticky", window.scrollY > 0);
   toTop.classList.toggle("active", window.scrollY > 500);
});

//Play video
const btnPlay = document.querySelector(".about__play");
const btnCloseVideo = document.querySelector(".trailer__close");
const trailer = document.querySelector(".trailer");
const trailerVideo = document.querySelector(".trailer__video");

function hiddenEl(el) {
   el.style.opacity = "0";
   el.style.visibility = "hidden";
}

function showEl(el) {
   el.style.opacity = "1";
   el.style.visibility = "visible";
}

btnPlay.addEventListener("click", function () {
   hiddenEl(header);
   btnScrollTop.style.display = "none";
   trailer.classList.add("show");
   trailerVideo.play();
});

btnCloseVideo.addEventListener("click", function () {
   trailer.classList.remove("show");
   trailerVideo.pause();
   trailerVideo.currentTime = 0;
   showEl(header);
   btnScrollTop.style.display = "block";
});

//Active Button Scroll Top
btnScrollTop.addEventListener("click", function () {
   smoothScroll(1000);
});
//function smoothScroll(target, duration)
function smoothScroll(duration) {
   //var target = document.querySelector(target);
   //const targetPosition = target.getBoundingClientRect().top;
   const targetPosition = 0;
   let startPosition = window.pageYOffset;
   let distance = targetPosition - startPosition;
   var startTime = null;

   function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
   }

   function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
   }
   requestAnimationFrame(animation);
}
