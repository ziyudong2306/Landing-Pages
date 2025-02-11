const track = document.querySelector('.carousel-track');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const images = Array.from(document.querySelectorAll('.carousel-img'));
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close');

let currentIndex = 0;

// Move the carousel
function moveCarousel(direction) {
    const trackWidth = track.offsetWidth;
    const imageWidth = images[0].offsetWidth + 10; // Including margin
    const visibleImages = Math.floor(trackWidth / imageWidth);
    const maxIndex = images.length - visibleImages;

    if (direction === 'left' && currentIndex > 0) {
        currentIndex--;
    } else if (direction === 'right' && currentIndex < maxIndex) {
        currentIndex++;
    }

    track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

leftBtn.addEventListener('click', () => moveCarousel('left'));
rightBtn.addEventListener('click', () => moveCarousel('right'));

// Open modal on image click
images.forEach((image) => {
    image.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = image.src;
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
