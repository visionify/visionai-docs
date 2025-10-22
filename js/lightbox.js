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
    
    // Add click handler to document for all images
    document.addEventListener('click', function(e) {
        const target = e.target;
        
        // Check if clicked element is an image in content area
        if (target.tagName === 'IMG' && 
            !target.closest('.md-header') && 
            !target.closest('.md-footer')) {
            
            lightboxImage.src = target.src;
            lightboxOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Close lightbox when clicking overlay
        if (target === lightboxOverlay) {
            lightboxOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close button handler
    closeButton.addEventListener('click', function() {
        lightboxOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightboxOverlay.classList.contains('active')) {
            lightboxOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}); 