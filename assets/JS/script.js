document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider-wrapper .image-list');
  const prevButton = document.getElementById('prev-slide');
  const nextButton = document.getElementById('next-slide');

  function updateButtons() {
      prevButton.style.visibility = slider.scrollLeft > 0 ? 'visible' : 'hidden';
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      nextButton.style.visibility = slider.scrollLeft < maxScrollLeft ? 'visible' : 'hidden';
  }

  prevButton.onclick = function() {
      slider.scrollLeft -= slider.clientWidth;
  };

  nextButton.onclick = function() {
      slider.scrollLeft += slider.clientWidth;
  };

  slider.addEventListener('scroll', updateButtons);
  updateButtons(); 

  window.addEventListener('resize', updateButtons); 
});
