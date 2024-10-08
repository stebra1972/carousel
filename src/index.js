import './styles.css';

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Add more image names as needed
const imagesWrapper = document.getElementById('imagesWrapper');
let currentIndex = 0;

// Function to display the current image
function displayImage(index) {
  imagesWrapper.innerHTML = `<img src="assets/${images[index]}" style="width: 100%;">`;
}

// Initial display
displayImage(currentIndex);

// Navigation
document.getElementById('leftArrow').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  displayImage(currentIndex);
});

document.getElementById('rightArrow').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  displayImage(currentIndex);
});
