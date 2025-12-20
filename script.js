// Mouse Parallax Logic
document.addEventListener("mousemove", function(e) {
    const video = document.querySelector(".bg-video");
    
    // Calculate how much to move (lower number = subtle movement)
    const moveX = (e.clientX - window.innerWidth / 2) * 0.06;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.06;
    
    // Apply the movement to the video
    video.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

function toggleAwards() {
    const awardsPopup = document.getElementById('awardsPopup');
    awardsPopup.classList.toggle('active');
}

// Close awards popup if user clicks outside the glass box
window.addEventListener('click', function(event) {
    const awardsPopup = document.getElementById('awardsPopup');
    if (event.target == awardsPopup) {
        awardsPopup.classList.remove('active');
    }
});


function toggleCertifications() {
    const certificationsPopup = document.getElementById('certificationsPopup');
    certificationsPopup.classList.toggle('active');
}

// Close awards popup if user clicks outside the glass box
window.addEventListener('click', function(event) {
    const certificationsPopup = document.getElementById('certificationsPopup');
    if (event.target == certificationsPopup) {
        certificationsPopup.classList.remove('active');
    }
});
