// This is a placeholder for any interactive features you want to add
console.log("JavaScript file connected successfully!");

window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 800;

    if (isMobile) {
        clearInterval(scrollIntervalId);
        enableMobileScroll();
    } else {
        galleryScroll();
    }
});

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

//----------------------Rework this section (Gallery Scrolling on index.html------------------------------------------

//Gallery functions
let scrollIntervalId = null;  // Store the interval ID for easy stopping 
let scrollingPaused = false;   // Track if scrolling is paused by interaction
let isMobile = window.innerWidth <= 800;  // Basic detection for mobile devices
let gallery = document.querySelector('.gallery-wrapper');
let originalImages = Array.from(gallery.children);  // Original images for cloning
let cloneCount = 0;  // Track how many times images have been cloned

// Function to Clone Images for Infinite Looping
function cloneImages() {
    while (gallery.scrollWidth < window.innerWidth * 2) {
        originalImages.forEach(image => {
            const clone = image.cloneNode(true);
            gallery.appendChild(clone);
        });
        cloneCount++;
    }
}


// Initial Cloning to Prepare for Smooth Looping
cloneImages();

// Function to Auto-Scroll Gallery (Desktop only)
function galleryScroll(step = 1) {
    if (isMobile) return;

    const scrollStep = step;
    const scrollSpeed = 30;

    function autoScroll() {
        if (!scrollingPaused) {
            gallery.scrollLeft += scrollStep;

            // Seamless reset
            if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
                gallery.scrollLeft = gallery.scrollLeft - (gallery.scrollWidth / 2);
            }
        }
    }

    if (scrollIntervalId) clearInterval(scrollIntervalId);
    scrollIntervalId = setInterval(autoScroll, scrollSpeed);
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


function enableDragToScroll() {
    let isDown = false;
    let startX;
    let scrollLeftStart;

    gallery.addEventListener('mousedown', (e) => {
        if (isMobile) return;
        isDown = true;
        gallery.classList.add('dragging');
        startX = e.pageX - gallery.offsetLeft;
        scrollLeftStart = gallery.scrollLeft;
        clearInterval(scrollIntervalId); // pause auto-scroll while dragging
    });

    gallery.addEventListener('mouseleave', () => {
        isDown = false;
        gallery.classList.remove('dragging');
        if (!isMobile && !scrollingPaused) galleryScroll();
    });

    gallery.addEventListener('mouseup', () => {
        isDown = false;
        gallery.classList.remove('dragging');
        if (!isMobile && !scrollingPaused) galleryScroll();
    });

    gallery.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2; // sensitivity
        gallery.scrollLeft = scrollLeftStart - walk;
    });
}

cloneImages();
stopScroll();
galleryScroll();
enableMobileScroll();
enableDragToScroll();




//-----------------------------------------------------------------------------------

// Fade in when in viewport
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      obs.unobserve(entry.target); // only animate once
    }
  });
}, {
  threshold: 0.1
});

faders.forEach(el => observer.observe(el));

function handleEnquiryChange() {
    const enquirySelect = document.getElementById('enquiry');
    const banner = document.getElementById('emergencyBanner');

    if (enquirySelect.value === 'Repairs') {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}
