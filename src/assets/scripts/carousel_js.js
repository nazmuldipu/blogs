!(function (d) {
  console.log("i am carousel_js.js");
  // Variables to target our base class,  get carousel items, count how many carousel items there are, set the slide to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
  var itemClassName = "carousel__photo";
  (items = d.getElementsByClassName(itemClassName)),
    (totalItems = items.length),
    (slide = 0),
    (moving = true);

  // To initialise the carousel we'll want to update the DOM with our own classes
  function setInitialClasses() {
    // Target the last, initial, and next items and give them the relevant class.
    // This assumes there are three or more items.
    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
  }

  // Set click events to navigation buttons

  function setEventListeners() {
    var next = d.getElementsByClassName("carousel__button--next")[0],
      prev = d.getElementsByClassName("carousel__button--prev")[0];

    next.addEventListener("click", moveNext);
    prev.addEventListener("click", movePrev);
  }

  // Disable interaction by setting 'moving' to true for the same duration as our transition (0.5s = 500ms)
  function disableInteraction() {
    moving = true;

    setTimeout(function () {
      moving = false;
    }, 500);
  }

  function moveCarouselTo(slide) {
    // Check if carousel is moving, if not, allow interaction
    if (!moving) {
      // temporarily disable interactivity
      disableInteraction();

      // Preemptively set variables for the current next and previous slide, as well as the potential next or previous slide.
      var newPrevious = slide - 1,
        newNext = slide + 1,
        oldPrevious = slide - 2,
        oldNext = slide + 2;

      // Test if carousel has more than three items
      if (totalItems - 1 > 3) {
        // Checks if the new potential slide is out of bounds and sets slide numbers
        if (newPrevious <= 0) {
          oldPrevious = totalItems - 1;
        } else if (newNext >= totalItems - 1) {
          oldNext = 0;
        }

        // Check if current slide is at the beginning or end and sets slide numbers
        if (slide === 0) {
          newPrevious = totalItems - 1;
          oldPrevious = totalItems - 2;
          oldNext = slide + 1;
        } else if (slide === totalItems - 1) {
          newPrevious = slide - 1;
          newNext = 0;
          oldNext = 1;
        }

        // Now we've worked out where we are and where we're going, by adding and removing classes, we'll be triggering the carousel's transitions.

        // Based on the current slide, reset to default classes.
        items[oldPrevious].className = itemClassName;
        items[oldNext].className = itemClassName;

        // Add the new classes
        items[newPrevious].className = itemClassName + " prev";
        items[slide].className = itemClassName + " active";
        items[newNext].className = itemClassName + " next";
      }
    }
  }

  // Next navigation handler
  function moveNext() {
    // Check if moving
    if (!moving) {
      // If it's the last slide, reset to 0, else +1
      if (slide === totalItems - 1) {
        slide = 0;
      } else {
        slide++;
      }

      // Move carousel to updated slide
      moveCarouselTo(slide);
    }
  }

  // Previous navigation handler
  function movePrev() {
    // Check if moving
    if (!moving) {
      // If it's the first slide, set as the last slide, else -1
      if (slide === 0) {
        slide = totalItems - 1;
      } else {
        slide--;
      }

      // Move carousel to updated slide
      moveCarouselTo(slide);
    }
  }

  // Initialise carousel
  function initCarousel() {
    setInitialClasses();
    setEventListeners();

    // Set moving to false now that the carousel is ready
    moving = false;
  }

  // make it rain
  initCarousel();
})(document);

// const arrowLeft = document.querySelector(".arrow-left");
// const arrowRight = document.querySelector(".arrow-right");
// const imgCarousel = document.querySelector("img");
// const indicators = document.querySelectorAll(".indicators > span");
// const images = [
//   "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//   "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//   "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
// ];

// // helper functions
// const setAttr = (el, attr, value) => el.setAttribute(attr, value);
// const getAttr = (el, attr) => el.getAttribute(attr);

// const getImageIndex = (image) => images.indexOf(image);

// const getCurrentImageIndex = () => {
//   const currentImage = getAttr(imgCarousel, "src");
//   return getImageIndex(currentImage);
// };

// const getArrowLeftImageIndex = (currentIndex) => {
//   return currentIndex === 0 ? 2 : currentIndex - 1;
// };

// const getArrowRightImageIndex = (currentIndex) => {
//   return currentIndex === 2 ? 0 : currentIndex + 1;
// };

// const activateIndicator = (index) => {
//   indicators.forEach((el, i) => {
//     if (el.classList.contains("active")) {
//       el.classList.remove("active");
//     }
//     if (index === i) el.classList.add("active");
//   });
// };

// const intervalSlider = (direction, delay = 1000) => {
//   let callback = null,
//     getNewIndexFunc = null;
//   if (direction === "left") {
//     getNewIndexFunc = () => getArrowLeftImageIndex(getCurrentImageIndex());
//   } else {
//     getNewIndexFunc = () => getArrowRightImageIndex(getCurrentImageIndex());
//   }

//   callback = () => {
//     let newIndex = getNewIndexFunc();
//     activateIndicator(newIndex);
//     setAttr(imgCarousel, "src", images[newIndex]);
//   };

//   return () => setInterval(callback, delay);
// };

// const leftInterval = intervalSlider('left');
// const rightInterval = intervalSlider('right');

// let left = null, right = null;

// arrowLeft.addEventListener('click', (e) => {
//   const newIndex = getArrowLeftImageIndex(getCurrentImageIndex());
//   activateIndicator(newIndex);
//   right && clearInterval(right);
//   if (!left) {
//     left = leftInterval()
//   }
//   setAttr(imgCarousel, 'src', images[newIndex]);
// });

// arrowRight.addEventListener('click', (e) => {
//   const newIndex = getArrowRightImageIndex(getCurrentImageIndex());
//   activateIndicator(newIndex);

//   left && clearInterval(left);
//   if (!right) {
//     right = rightInterval();
//   }
//   setAttr(imgCarousel, 'src', images[newIndex]);
// });