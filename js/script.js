const carousel = document.querySelector(".carousel");
const header = document.querySelector(".header");
const toTop = document.querySelector(".to-top");
const footer = document.querySelector(".footer");
const content = document.querySelector(".content");
const body = document.querySelector("body");
const bars = document.querySelector(".bars");
const btnScrollTop = document.querySelector(".to-top");

window.addEventListener("load", function () {
   function fadeOut(el) {
      el.style.opacity = 1;
      (function fade() {
         if ((el.style.opacity -= 0.05) < 0) {
            el.style.display = "none";
         } else {
            requestAnimationFrame(fade);
         }
      })();
   }
   const loader = document.querySelector(".loader");
   fadeOut(loader);
});

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

//Couter
let counters = document.querySelectorAll(".enjoy__item-score__inner");
window.addEventListener("scroll", () => {
   counters.forEach((counter) => {
      if (counter.getBoundingClientRect().top < window.innerHeight - 100)
         runCounter(counter);
   });
});
function runCounter(counter) {
   let inner = counter.innerText;
   if (inner == 0) {
      counter.innerText = 0;

      let target = +counter.dataset.count;

      let step = target / 100;

      let countIt = function () {
         let displayedCount = +counter.innerText;
         if (displayedCount < target) {
            counter.innerText = Math.ceil(displayedCount + step);
            setTimeout(countIt, 1);
         }
      };
      countIt();
   }
}

var nodes = document.querySelectorAll(".pricing-image__item"),
   _nodes = [].slice.call(nodes, 0);

var getDirection = function (ev, obj) {
   var w = obj.offsetWidth,
      h = obj.offsetHeight,
      x = ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? h / w : 1),
      y = ev.pageY - obj.offsetTop - (h / 2) * (h > w ? w / h : 1),
      d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

   return d;
};

var addClass = function (ev, obj, state) {
   var direction = getDirection(ev, obj),
      class_suffix = "";

   obj.className = "pricing-image__item";

   switch (direction) {
      case 0:
         class_suffix = "-top";
         break;
      case 1:
         class_suffix = "-right";
         break;
      case 2:
         class_suffix = "-bottom";
         break;
      case 3:
         class_suffix = "-left";
         break;
   }

   obj.classList.add(state + class_suffix);
};

// bind events
_nodes.forEach(function (el) {
   el.addEventListener(
      "mouseover",
      function (ev) {
         let status = el.dataset.hover;
         if (status == "false") {
            addClass(ev, this, "In");
            el.dataset.hover = "true";
         }
      },
      false
   );

   el.addEventListener(
      "mouseleave",
      function (ev) {
         let status = el.dataset.hover;
         if (status == "true") {
            addClass(ev, this, "Out");
            el.dataset.hover = "false";
         }
      },
      false
   );
});
