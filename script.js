// To test the .js has loaded
console.log("JavaScript file connected successfully!");

//Function to open the side bar menu
function openMenu() {
    document.getElementById("sidebar").style.left = "0";  // Slide the sidebar in
    //document.getElementById("main-content").style.transform = "translateX(250px)";  // Push content to the right
    document.getElementById("overlay").style.display = "block";  // Show overlay
    document.getElementById("pageTitle").style.left = "250px"
}

//Function to close the sidebar menu
function closeMenu() {
    document.getElementById("sidebar").style.left = "-250px";  // Slide the sidebar out
    //document.getElementById("main-content").style.transform = "translateX(0)";  // Reset content position
    document.getElementById("overlay").style.display = "none";  // Hide overlay
}

//Function to show emergency banner when option selected
function emergencyBanner() {
    const enquirySelect = document.getElementById('enquiry');
    const banner = document.getElementById('emergencyBanner');

    if (enquirySelect.value === 'Repairs') {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}

function galleryScroll() {
    document.addEventListener("DOMContentLoaded", () => {
        const gallery = document.querySelector('.gallery-wrapper');
        let scrollDirection = 1; // 1 = forward, -1 = backward
        const scrollSpeed = 1;   // pixels per tick
        const frameRate = 16;    // ~60fps

        function autoScroll() {
            gallery.scrollLeft += scrollDirection * scrollSpeed;

            // When we reach the end, change direction
            if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth) {
                scrollDirection = -1;
            }

            // When we reach the beginning, change direction again
            if (gallery.scrollLeft <= 0) {
                scrollDirection = 1;
            }
        }

        setInterval(autoScroll, frameRate);
    });
}

function enableAutoScrollBounce(gallerySelector, baseSpeed = 1, frameRate = 16) {
    const gallery = document.querySelector(gallerySelector);

    if (!gallery) {
        console.warn(`No element found for selector: ${gallerySelector}`);
        return;
    }

    let scrollDirection = 1;
    let scrollSpeed = baseSpeed;
    const hoverSpeed = baseSpeed * 0.5; // Slow factor when hovered

    gallery.addEventListener('mouseenter', () => {
        scrollSpeed = hoverSpeed;
    });

    gallery.addEventListener('mouseleave', () => {
        scrollSpeed = baseSpeed;
    });

    setInterval(() => {
        gallery.scrollLeft += scrollDirection * scrollSpeed;

        if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth) {
            scrollDirection = -1;
        }

        if (gallery.scrollLeft <= 0) {
            scrollDirection = 1;
        }
    }, frameRate);
}


//------ Excecuted Scripts when website is loaded ----------

document.addEventListener("DOMContentLoaded", function () {
    enableAutoScrollBounce('.galleryWrapper', 1, 30);
});

