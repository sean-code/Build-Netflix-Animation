

// Level 3 Maintenance
const netflixIntro = document.getElementById("netflixintro");
const netflixAudio = document.getElementById("netflixAudio");

function hideIntroAndRedirect() {
  netflixIntro.style.opacity = "0";
  setTimeout(() => {
    netflixIntro.style.opacity = "1"; // Reset opacity to 1 before starting the animation again
    startAnimationLoop(); // Start the animation loop again after 10 seconds
  }, 4500); // Wait for 4.5 seconds before resetting opacity to 1 (time duration of the animation)

  // refresh the page after 6 seconds
  setTimeout(() => {
    location.reload();
  }, 4000);
}

function startAnimationLoop() {
  setTimeout(() => {
    hideIntroAndRedirect();
  }, 5000);
}


netflixAudio.play();

// Initial animation
startAnimationLoop();

