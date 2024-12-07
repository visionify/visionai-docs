document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox elements
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.className = 'lightbox-overlay';
    
    const lightboxContent = document.createElement('div');
    lightboxContent.className = 'lightbox-content';
    
    const lightboxImage = document.createElement('img');
    const closeButton = document.createElement('button');
    closeButton.className = 'lightbox-close';
    closeButton.innerHTML = '×';
    
    lightboxContent.appendChild(lightboxImage);
    lightboxContent.appendChild(closeButton);
    lightboxOverlay.appendChild(lightboxContent);
    document.body.appendChild(lightboxOverlay);
    
    // Add click handlers to all images in setup steps and grid cards
    const images = document.querySelectorAll('.setup-step img, .grid-card img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            lightboxImage.src = this.src;
            lightboxOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Close lightbox when clicking overlay or close button
    [lightboxOverlay, closeButton].forEach(element => {
        element.addEventListener('click', function(e) {
            if (e.target === this) {
                lightboxOverlay.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightboxOverlay.classList.contains('active')) {
            lightboxOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}); 