if (window.innerWidth<= 550) {
  document.querySelector("#howYou").classList.remove("animation-horizontal");
}

if (window.innerWidth > 550 && window.innerWidth <= 849) {
  setScrollHorizontal('-70%', 4)
}

if (window.innerWidth > 850) {
  setScrollHorizontal('-67%', 3)
}

function setScrollHorizontal(horizontalScrollPercent, numberSections) {
  document.querySelector("#howYou").classList.add("animation-horizontal");
  // console.log('> 550', document.querySelector("#howYou"));

  var sectionWidth = window.innerWidth;

  var controller = new ScrollMagic.Controller();

  var scrollHorizontal = new TimelineLite();
  scrollHorizontal.to(".animation-horizontal", 1, {x: horizontalScrollPercent});

  var horizontalScroll = new ScrollMagic.Scene({
      triggerElement: ".animation-horizontal",
      triggerHook: 'onLeave',
      duration: sectionWidth * numberSections}).setPin(".animation-horizontal").setTween(scrollHorizontal).addTo(controller);
}