const slider = document.getElementById("mySlider");
const totalSlides = 12;
let currentSet = 0;
let isTransitioning = false;
const slidesPerSet = 1;

function showSlides() {
    const startIndex = currentSet * slidesPerSet;
    const offset = -startIndex * (100 / totalSlides) + "%";
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = "translateX(" + offset + ")";
}

function transitionEndHandler() {
    isTransitioning = false;
    slider.style.transition = ""; // Reset transition property
    updateNavButtons();
}

slider.addEventListener("transitionend", transitionEndHandler);

function nextSlide() {
    if (!isTransitioning && currentSet < totalSlides - 1) {
        isTransitioning = true;
        currentSet++;
        showSlides();
    }
}

function prevSlide() {
    if (!isTransitioning && currentSet > 0) {
        isTransitioning = true;
        currentSet--;
        showSlides();
    }
}

function updateNavButtons() {
    const leftButton = document.querySelector(".nav-button.left");
    const rightButton = document.querySelector(".nav-button.right");

    leftButton.style.display = currentSet === 0 ? "none" : "block";
    rightButton.style.display = currentSet === totalSlides - 1 ? "none" : "block";
}

function handleButtonClick(index) {
    // You can customize this function if needed
    console.log("Button clicked:", index);
}

// Vertical Slider
const verticalSlider = document.getElementById("verticalSlider");
const totalVerticalSlides = 12;
let currentVerticalSet = 0;
let isVerticalTransitioning = false;
const verticalSlidesPerSet = 3; // Change this to 3

function showVerticalSlides() {
    const startIndex = currentVerticalSet * verticalSlidesPerSet;
    const endIndex = startIndex + verticalSlidesPerSet;
    const offset = -startIndex * (100 / totalVerticalSlides) + "%";
    verticalSlider.style.transition = "transform 0.5s ease-in-out";
    verticalSlider.style.transform = "translateY(" + offset + ")";

    // Set visibility for each slide
    function showVerticalSlides() {
        const startIndex = currentVerticalSet * verticalSlidesPerSet;
        const endIndex = Math.min(startIndex + verticalSlidesPerSet, totalVerticalSlides);
        const offset = -startIndex * (100 / totalVerticalSlides) + "%";
        verticalSlider.style.transition = "transform 0.5s ease-in-out";
        verticalSlider.style.transform = "translateY(" + offset + ")";
    
        // Set visibility for each slide
        const slides = document.querySelectorAll(".vertical-slide");
        slides.forEach((slide, i) => {
            if (i >= startIndex && i < endIndex) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }
    
}

function verticalTransitionEndHandler() {
    isVerticalTransitioning = false;
    verticalSlider.style.transition = ""; // Reset transition property
    updateVerticalNavButtons();
}

verticalSlider.addEventListener("transitionend", verticalTransitionEndHandler);

function nextVerticalSlide() {
    if (!isVerticalTransitioning && currentVerticalSet < totalVerticalSlides / verticalSlidesPerSet - 1) {
        isVerticalTransitioning = true;
        currentVerticalSet++;
        showVerticalSlides();
    }
}

function prevVerticalSlide() {
    if (!isVerticalTransitioning && currentVerticalSet > 0) {
        isVerticalTransitioning = true;
        currentVerticalSet--;
        showVerticalSlides();
    }
}

function updateVerticalNavButtons() {
    const upVerticalButton = document.querySelector(".vertical-nav-button.up");
    const downVerticalButton = document.querySelector(".vertical-nav-button.down");

    upVerticalButton.style.display = currentVerticalSet === 0 ? "none" : "block";
    downVerticalButton.style.display = currentVerticalSet === totalVerticalSlides / verticalSlidesPerSet - 1 ? "none" : "block";
}

function handleVerticalButtonClick(index) {
    // You can customize this function if needed
    console.log("Vertical Button clicked:", index);
}

document.addEventListener("DOMContentLoaded", function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nbutton');

    // Add click event listeners to each navigation link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const targetId = link.getAttribute('href'); // Get the target section id
            navigateTo(targetId); // Call your navigation function with the target id
        });
    });
});