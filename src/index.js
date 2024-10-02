import './styles.css';

// Assuming you have an assets folder with photos named photo1.jpg, photo2.jpg, etc.
const photos = ['photo1.jpeg','assets/photo2.jpg','assets/photo3.jpg'];
let currentIndex = 0;

// Create elements
const carouselContainer = document.createElement('div');
const leftArrow = document.createElement('button');
const rightArrow = document.createElement('button');
const photoDisplay = document.createElement('img');

// Set attributes and text content
leftArrow.textContent = '<';
rightArrow.textContent = '>';
photoDisplay.src = photos[currentIndex]; // Load the initial photo

// Append elements to the carousel container
carouselContainer.appendChild(leftArrow);
carouselContainer.appendChild(photoDisplay);
carouselContainer.appendChild(rightArrow);

// Append the carousel to the document body
document.body.appendChild(carouselContainer);

// Function to update the photo display
function updatePhoto() {
    photoDisplay.src = photos[currentIndex];
}

// Event listeners for arrows
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length; // Wrap to the last photo if at the beginning
    updatePhoto();
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % photos.length; // Wrap to the first photo if at the end
    updatePhoto();
});
