document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;

    const imageData = [
        { src: 'images/scheels_kids.jpg', alt: 'Diving scene 1' },
        { src: 'images/shark_tank.jpg', alt: 'Diving scene 2' },
        { src: 'images/old-diver.webp', alt: 'Diving scene 3' },
        { src: 'images/tank-small.webp', alt: 'Diving scene 4' }
    ];

    const images = imageData.map(({ src, alt }) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        img.style.height = '50vh';
        img.style.width = 'auto';
        img.style.margin = '0 auto';
        img.style.display = 'none';
        carousel.appendChild(img);
        return img;
    });

    function showImage(index) {
        images.forEach(img => {
            img.style.display = 'none';
        });
        images[index].style.display = 'block';
    }

    images[0].addEventListener('load', () => {
        showImage(0);
    });

    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '&#10094;';
    prevBtn.className = 'carousel-btn prev';
    
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '&#10095;';
    nextBtn.className = 'carousel-btn next';

    carousel.appendChild(prevBtn);
    carousel.appendChild(nextBtn);

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);

    setInterval(nextImage, 5000);
});
