const carousel = document.querySelector(".carousel");
const header = document.querySelector(".header");
const toTop = document.querySelector(".to-top");
const footer = document.querySelector(".footer");
const content = document.querySelector(".content");
const body = document.querySelector("body");
const bars = document.querySelector(".bars");

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

btnPlay.addEventListener("click", function () {
   trailer.classList.add("show");
   trailerVideo.play();
});

btnCloseVideo.addEventListener("click", function () {
   trailer.classList.remove("show");
   trailerVideo.pause();
   trailerVideo.currentTime = 0;
});
