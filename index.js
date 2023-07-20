// index.js
// const netflixIntro = document.getElementById("netflixintro");

// function hideIntroAndRedirect() {
//   netflixIntro.style.opacity = "0";
//   setTimeout(() => {
//     window.location.href = "https://www.netflix.com"; // Replace with the desired Netflix URL
//   }, 1000); // Set the time in milliseconds for how long the intro stays visible before redirecting.
// }

// netflixIntro.addEventListener("click", hideIntroAndRedirect);





// level 2
// index.js
// const netflixIntro = document.getElementById("netflixintro");

// function hideIntroAndRedirect() {
//   netflixIntro.style.opacity = "0";
//   setTimeout(() => {
//     netflixIntro.style.opacity = "1"; // Reset opacity to 1 before starting the animation again
//     startAnimationLoop(); // Start the animation loop again after 10 seconds
//   }, 4500); // Wait for 4.5 seconds before resetting opacity to 1 (time duration of the animation)
// }

// function startAnimationLoop() {
//   setTimeout(() => {
//     hideIntroAndRedirect(); // Start the initial animation loop
//   }, 10000); // Repeat the animation every 10 seconds (10000 milliseconds)
// }

// // Initial animation
// startAnimationLoop();






// Level 3

// level 2
// index.js
const netflixIntro = document.getElementById("netflixintro");

function hideIntroAndRedirect() {
  netflixIntro.style.opacity = "0";
  setTimeout(() => {
    netflixIntro.style.opacity = "1"; // Reset opacity to 1 before starting the animation again
    startAnimationLoop(); // Start the animation loop again after 10 seconds
  }, 4500); // Wait for 4.5 seconds before resetting opacity to 1 (time duration of the animation)

  // refresh the page after 6 seconds
  setTimeout(() => {
    location.reload();
  }, 6000);
}

function startAnimationLoop() {
  setTimeout(() => {
    hideIntroAndRedirect();
  }, 8000);
}

// Initial animation
startAnimationLoop();

