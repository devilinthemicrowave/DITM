// Function to set background and show content
function setBackgroundImage() {
  const contentWrapper = document.getElementById("content-wrapper");
  const body = document.body;
  body.style.background = "url('bg4.jpg') no-repeat center center fixed";
  body.style.backgroundSize = "cover";
  contentWrapper.classList.remove("hidden");
}

// Preload the background image
const backgroundImage = new Image();
backgroundImage.src = "bg4.jpg";
backgroundImage.onload = setBackgroundImage;

