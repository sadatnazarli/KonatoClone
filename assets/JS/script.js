document.addEventListener("DOMContentLoaded", function () {
  // Function to close all select boxes, except the current one
  function closeAllSelect(elmnt) {
    var x,
      y,
      i,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  // Toggle between hiding and showing the dropdown content
  document.querySelectorAll(".select-selected").forEach(function (select) {
    select.addEventListener("click", function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  });

  // If the user clicks anywhere outside the select box, then close all select boxes
  document.addEventListener("click", closeAllSelect);
});
