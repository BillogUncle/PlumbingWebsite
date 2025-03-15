// This is a placeholder for any interactive features you want to add
console.log("JavaScript file connected successfully!");

//Function to open the side bar menu
function openMenu() {
    document.getElementById("sidebar").style.left = "0";  // Slide the sidebar in
    //document.getElementById("main-content").style.transform = "translateX(250px)";  // Push content to the right
    document.getElementById("overlay").style.display = "block";  // Show overlay
}

//Function to close the sidebar menu
function closeMenu() {
    document.getElementById("sidebar").style.left = "-250px";  // Slide the sidebar out
    //document.getElementById("main-content").style.transform = "translateX(0)";  // Reset content position
    document.getElementById("overlay").style.display = "none";  // Hide overlay
}

//Gallery functions
let scrollIntervalId = null;  // Store the interval ID for easy stopping 
let scrollingPaused = false;   // Track if scrolling is paused by interaction
let isMobile = window.innerWidth <= 800;  // Basic detection for mobile devices
let gallery = document.querySelector('.gallery-wrapper');
let originalImages = Array.from(gallery.children);  // Original images for cloning
let cloneCount = 0;  // Track how many times images have been cloned

// Function to Clone Images for Infinite Looping
function cloneImages() {
    if (cloneCount >= 1) return;  // Prevent unnecessary cloning (just clone once)

    originalImages.forEach(image => {
        const clone = image.cloneNode(true);
        gallery.appendChild(clone);
    });

    cloneCount++;
}

// Initial Cloning to Prepare for Smooth Looping
cloneImages();

// Function to Auto-Scroll Gallery (Desktop only)
function galleryScroll(step = 1) {
    if (isMobile || scrollingPaused) return;

    const scrollStep = step;
    const scrollSpeed = 50;

    function manualScroll() {
        gallery.scrollLeft += scrollStep;

        // If scrolled past the original images, smoothly reset to the start of original images
        if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
            gallery.scrollLeft = gallery.scrollLeft - (gallery.scrollWidth / 2);
        }
    }

    if (scrollIntervalId) clearInterval(scrollIntervalId);
    scrollIntervalId = setInterval(manualScroll, scrollSpeed);
}

// Function to Handle Desktop Hover Events
function stopScroll() {
    const galleryImages = document.querySelectorAll('.gallery-wrapper img');

    galleryImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            if (!isMobile) {
                clearInterval(scrollIntervalId);
                scrollingPaused = true;
            }
        });

        image.addEventListener('mouseout', () => {
            if (!isMobile) {
                scrollingPaused = false;
                galleryScroll();
            }
        });
    });

    gallery.addEventListener('mouseenter', () => {
        if (!isMobile) clearInterval(scrollIntervalId);
    });

    gallery.addEventListener('mouseleave', () => {
        if (!isMobile && !scrollingPaused) galleryScroll();
    });
}

// Function to Handle Mobile Scrolling with Seamless Looping
function enableMobileScroll() {
    if (!isMobile) return;

    gallery.addEventListener('scroll', () => {
        // When reaching the end of the cloned images, reset to the beginning seamlessly
        if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
            gallery.scrollLeft = gallery.scrollLeft - (gallery.scrollWidth / 2);
        }
    });
}

// Call the appropriate functions
stopScroll();
enableMobileScroll();
galleryScroll();
