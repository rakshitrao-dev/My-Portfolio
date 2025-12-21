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


// Function to fetch GitHub Repositories
async function fetchMyRepos() {
    const repoContainer = document.getElementById('repo-list');
    const username = 'rakshitrao-dev'; // Your GitHub username

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
        const repos = await response.json();

        repoContainer.innerHTML = ''; // Clear the loading text

        repos.forEach(repo => {
            const repoLink = document.createElement('a');
            repoLink.href = repo.html_url;
            repoLink.target = '_blank';
            repoLink.style.display = 'block';
            repoLink.style.color = '#00eeff';
            repoLink.style.textDecoration = 'none';
            repoLink.style.marginBottom = '5px';
            repoLink.innerHTML = `<i class='bx bx-git-repo-forked'></i> ${repo.name}`;
            
            repoContainer.appendChild(repoLink);
        });
    } catch (error) {
        repoContainer.innerHTML = '<p style="color: red;">Failed to load repos.</p>';
        console.error("Error fetching GitHub repos:", error);
    }
}

// Call the function when the script loads
fetchMyRepos();