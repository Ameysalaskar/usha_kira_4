window.addEventListener('load', function () {
    setTimeout(function () {
      document.getElementById('popupForm').style.display = 'block';
    }, 7000);
  });
  
  // Function to close the popup
  function closePopup() {
    document.getElementById('popupForm').style.display = 'none';
  }
  
  const track = document.getElementById("track");
    const images = track.children;
    const totalImages = images.length;
    let index = 0;
    let intervalId;

    function startCarousel() {
      intervalId = setInterval(() => {
        index = (index + 1) % totalImages;
        track.style.transform = `translateX(-${index * 900}px)`;
       
      }, 4000);
    }

    function stopCarousel() {
      clearInterval(intervalId);
    }

    // Start on load
    startCarousel();

    // Pause on hover
    for (let img of images) {
      img.addEventListener("mouseenter", stopCarousel);
      img.addEventListener("mouseleave", startCarousel);
    }




// Enquiry form
const popup = document.getElementById("enquiryPopup");
const closeBtn = document.getElementById("closeBtn");


    setTimeout(() => {
      popup.style.display = "flex";
    });

   closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });