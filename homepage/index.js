const images = document.querySelectorAll('.banner-img');
let currentIndex = 0;
const totalImages = images.length;

function showNextImage() {
    // Remove the 'active' class from the current image
    images[currentIndex].classList.remove('active');

    // Calculate the next image index
    currentIndex = (currentIndex + 1) % totalImages;

    // Add the 'active' class to the next image
    images[currentIndex].classList.add('active');
}

// Change image every 3 seconds
setInterval(showNextImage, 3000);
