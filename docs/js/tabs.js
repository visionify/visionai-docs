// Function to initialize tabs
function initializeTabs() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    const eventItems = document.querySelectorAll('.event-item');

    // Skip if no tabs found on the page
    if (!tabs.length) return;

    // Remove any existing event listeners
    tabs.forEach(tab => {
        tab.removeEventListener('click', handleTabClick);
        tab.addEventListener('click', handleTabClick);
    });

    // Set initial state
    if (!document.querySelector('.tab.active')) {
        tabs[0].classList.add('active');
        const firstTabId = tabs[0].getAttribute('data-tab');
        document.getElementById(firstTabId)?.classList.add('active');
    }
}

function handleTabClick(event) {
    const tab = event.currentTarget;
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    const eventItems = document.querySelectorAll('.event-item');

    // Remove active class from all tabs and contents
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding content
    tab.classList.add('active');
    const contentId = tab.getAttribute('data-tab');
    document.getElementById(contentId)?.classList.add('active');

    // Reset any active events when switching tabs
    eventItems.forEach(e => e.classList.remove('active'));
}

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

// Initialize on first load
document.addEventListener('DOMContentLoaded', initializeTabs);

// Initialize on any navigation
document.addEventListener('DOMContentSwitch', initializeTabs);

// Initialize on any content change
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length) {
            initializeTabs();
        }
    });
});

// Start observing the document with the configured parameters
observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});