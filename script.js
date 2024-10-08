document.addEventListener('DOMContentLoaded', function() {
    const images = ['foto1.jpeg', 'foto2.jpeg', 'foto3.jpeg']; // Replace with actual image paths
    const carouselContainer = document.querySelector('.carousel-images');
    const dotsContainer = document.querySelector('.carousel-dots');

    let currentIndex = 0;

    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = `image/${image}`;
        if (index === 0) imgElement.style.display = 'block';
        carouselContainer.appendChild(imgElement);

        const dotElement = document.createElement('span');
        dotElement.addEventListener('click', () => changeSlide(index));
        dotsContainer.appendChild(dotElement);
    });

    function changeSlide(index) {
        document.querySelectorAll('.carousel-images img')
            .forEach((img, idx) => img.style.display = idx === index ? 'block' : 'none');
        currentIndex = index;
        updateDots();
    }

    function updateDots() {
        document.querySelectorAll('.carousel-dots span').forEach((dot, idx) => {
            dot.className = idx === currentIndex ? 'active-dot' : '';
        });
    }

    document.querySelector('.left-arrow').addEventListener('click', () => {
        const newIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
        changeSlide(newIndex);
    });

    document.querySelector('.right-arrow').addEventListener('click', () => {
        const newIndex = currentIndex + 1 >= images.length ? 0 : currentIndex + 1;
        changeSlide(newIndex);
    });

    updateDots(); // Initialize dots
});