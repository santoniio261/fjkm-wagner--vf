const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.classList.remove("hidden");
  } else {
    btn.classList.add("hidden");
  }
});


// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get mobile menu elements
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  // Add click event listener to toggle mobile menu
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }
});

// Card hover animations
document.addEventListener("DOMContentLoaded", function () {
  // Get all card elements
  const cards = document.querySelectorAll(".card");

  // Add hover effects to each card
  cards.forEach((card) => {
    // Scale up on hover
    card.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
    });

    // Return to normal size when hover ends
    card.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });
});

var map = L.map("map").setView([48.862725, 2.287592], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

var marker = L.marker([48.862725, 2.287592]).addTo(map);

var circle = L.circle([48.862725, 2.287592], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);

