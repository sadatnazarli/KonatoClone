var carousel = document.getElementById("carousel");
var scrollAmount = 0;

function autoScroll() {
  carousel.scrollTo(++scrollAmount, 0);

  if (scrollAmount != carousel.scrollWidth) {
    requestAnimationFrame(autoScroll);
  }
}

autoScroll();
