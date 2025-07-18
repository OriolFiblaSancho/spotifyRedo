document.addEventListener('DOMContentLoaded', function() {
    const bibliotecaHeader = document.getElementById('bibliotecaHeader');
    const bibliotecaContent = document.getElementById('bibliotecaContent');
    
    // Add scroll event listener to bibliotecaContent
    bibliotecaContent.addEventListener('scroll', function() {
        // If scrolled down, add shadow class, otherwise remove it
        if (bibliotecaContent.scrollTop > 10) {
            bibliotecaHeader.classList.add('shadow');
        } else {
            bibliotecaHeader.classList.remove('shadow');
        }
    });

    // SlideBar navigation functionality
    function setupSlideBar(slideBarId, leftArrowId, rightArrowId) {
        const slideBar = document.getElementById(slideBarId);
        const leftArrow = document.getElementById(leftArrowId);
        const rightArrow = document.getElementById(rightArrowId);
        
        if (!slideBar || !leftArrow || !rightArrow) return;
        
        const scrollAmount = 400; // Amount to scroll in pixels
        
        leftArrow.addEventListener('click', function() {
            slideBar.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        
        rightArrow.addEventListener('click', function() {
            slideBar.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        // Update arrow visibility based on scroll position
        function updateArrowVisibility() {
            const isAtStart = slideBar.scrollLeft <= 0;
            const isAtEnd = slideBar.scrollLeft >= slideBar.scrollWidth - slideBar.clientWidth;
            
            leftArrow.style.display = isAtStart ? 'none' : 'flex';
            rightArrow.style.display = isAtEnd ? 'none' : 'flex';
        }
        
        // Check arrow visibility on scroll
        slideBar.addEventListener('scroll', updateArrowVisibility);
        
        // Initial check
        updateArrowVisibility();
    }
    
    // Setup all slide bars
    setupSlideBar('madeForYouSlideBar', 'leftArrow', 'rightArrow');
    setupSlideBar('recentlyPlayedSlideBar', 'leftArrow2', 'rightArrow2');
    setupSlideBar('popularPlaylistsSlideBar', 'leftArrow3', 'rightArrow3');
    setupSlideBar('moodAndGenreSlideBar', 'leftArrow4', 'rightArrow4');
    
// Music Player functionality
function initializeMusicPlayer() {
    const playPauseButton = document.querySelector('.playPauseButton');
    const shuffleButton = document.querySelector('.shuffleButton');
    const volumeContainer = document.getElementById('volumeContainer');
    const volumeFill = document.getElementById('volumeFill');
    const currentTime = document.getElementById('currentTime');
    const totalTime = document.getElementById('totalTime');

    let isPlaying = false;
    let isShuffled = false;
    let volume = 70; // percentage

    // Play/Pause functionality
    playPauseButton.addEventListener('click', function() {
        isPlaying = !isPlaying;
        playPauseButton.textContent = isPlaying ? '⏸' : '▶';
    });

    // Shuffle functionality
    shuffleButton.addEventListener('click', function() {
        isShuffled = !isShuffled;
        shuffleButton.classList.toggle('active', isShuffled);
    });

    // Volume control functionality
    volumeContainer.addEventListener('click', function(e) {
        const rect = volumeContainer.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        volume = Math.max(0, Math.min(100, (clickX / width) * 100));
        updateVolumeBar();
    });

    function updateVolumeBar() {
        volumeFill.style.width = volume + '%';
        
        const volumeButton = document.querySelector('.volumeButton');
        if (volume === 0) {
            volumeButton.textContent = '🔇';
        } else if (volume < 30) {
            volumeButton.textContent = '🔈';
        } else if (volume < 70) {
            volumeButton.textContent = '🔉';
        } else {
            volumeButton.textContent = '🔊';
        }
    }

    // Previous/Next button functionality
    document.querySelector('.prevButton').addEventListener('click', function() {
        console.log('Previous song');
    });

    document.querySelector('.nextButton').addEventListener('click', function() {
        console.log('Next song');
    });

    // Initialize display
    updateVolumeBar();
}    // Initialize music player
    initializeMusicPlayer();
});
