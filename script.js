// Mouse Parallax Logic
document.addEventListener("mousemove", function(e) {
    const video = document.querySelector(".bg-video");
    
    // Calculate how much to move (lower number = subtle movement)
    const moveX = (e.clientX - window.innerWidth / 2) * 0.06;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.06;
    
    // Apply the movement to the video
    video.style.transform = `translate(${moveX}px, ${moveY}px)`;
});