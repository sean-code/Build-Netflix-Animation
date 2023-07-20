// index.js
const netflixIntro = document.getElementById("netflixintro");

function hideIntroAndRedirect() {
  netflixIntro.style.opacity = "0";
  setTimeout(() => {
    window.location.href = "https://www.netflix.com"; // Replace with the desired Netflix URL
  }, 1000); // Set the time in milliseconds for how long the intro stays visible before redirecting.
}

netflixIntro.addEventListener("click", hideIntroAndRedirect);
