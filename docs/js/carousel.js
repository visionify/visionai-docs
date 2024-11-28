document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.feature-highlights');
    const cards = document.querySelectorAll('.feature-card');
    const dotsContainer = document.querySelector('.carousel-dots');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    let currentIndex = 0;
    let interval;

    // Create dots
    cards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    function updateSlide() {
        cards.forEach((card, index) => {
            card.classList.remove('active');
            dotsContainer.children[index].classList.remove('active');
        });
        cards[currentIndex].classList.add('active');
        dotsContainer.children[currentIndex].classList.add('active');
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlide();
        resetInterval();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateSlide();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateSlide();
    }

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Event listeners
    prevButton.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    // Initialize
    cards[0].classList.add('active');
    resetInterval();
});