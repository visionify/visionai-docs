document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    const eventItems = document.querySelectorAll('.event-item');

    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const contentId = tab.getAttribute('data-tab');
            document.getElementById(contentId).classList.add('active');

            // Reset any active events when switching tabs
            eventItems.forEach(e => e.classList.remove('active'));
        });
    });

    // Event item clicking
    eventItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all events in the same tab
            const currentTab = item.closest('.tab-content');
            currentTab.querySelectorAll('.event-item').forEach(e => e.classList.remove('active'));
            
            // Add active class to clicked event
            item.classList.add('active');

            // Get the video data and update the video container
            const videoId = item.getAttribute('data-video');
            const videoContainer = currentTab.querySelector('.video-container');
            
            // Update video content
            updateVideo(videoContainer, videoId);
        });
    });

    // Set initial state - show first tab and its content
    if (tabs.length > 0) {
        tabs[0].classList.add('active');
        const firstTabId = tabs[0].getAttribute('data-tab');
        document.getElementById(firstTabId)?.classList.add('active');
    }
});

function updateVideo(container, videoId) {
    if (!videoId) return;
    
    // Check if videoId ends with common image extensions
    const isImage = /\.(jpg|jpeg|png|gif)$/i.test(videoId);
    
    if (isImage) {
        container.innerHTML = `<img src="img/${videoId}" alt="Demo">`;
    } else {
        container.innerHTML = `<video src="videos/${videoId}" autoplay loop muted playsinline></video>`;
    }
}