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
const netflixIntro = document.getElementById("netflixintro");

function hideIntroAndRedirect() {
  netflixIntro.style.opacity = "0";
  setTimeout(() => {
    netflixIntro.style.opacity = "1"; // Reset opacity to 1 before starting the animation again
  }, 4500); // Wait for 4.5 seconds before resetting opacity to 1 (time duration of the animation)
}

// Initial animation
hideIntroAndRedirect();

// Repeat the animation every 10 seconds
setInterval(hideIntroAndRedirect, 10000); // 10000 milliseconds = 10 seconds
