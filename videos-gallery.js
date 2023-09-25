// Get the scroll button elements
const scrollLeftButton = document.querySelector('#scroll-left');
const scrollRightButton = document.querySelector('#scroll-right');

// Add event listeners to the scroll buttons
scrollLeftButton.addEventListener('click', scrollLeft);
scrollRightButton.addEventListener('click', scrollRight);

// Function to scroll the video gallery left
function scrollLeft() {
  // Get the video gallery element
  const videoGallery = document.querySelector('.video-gallery');

  // Scroll the video gallery left by 100 pixels
  videoGallery.scrollLeft -= 100;
}

// Function to scroll the video gallery right
function scrollRight() {
  // Get the video gallery element
  const videoGallery = document.querySelector('.video-gallery');

  // Scroll the video gallery right by 100 pixels
  videoGallery.scrollLeft += 100;
}
