// To test the .js has loaded
console.log("JavaScript file connected!");

//Sidebar
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

 
//Contact Page
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


//Top Banner/ Hero Section
    //Function to change the size of offset on the content underneath the top banner
    const topBanner = document.querySelector('.topBanner');
    const hero = document.querySelector('.hero');

    if (topBanner && hero) {
        hero.style.marginTop = `${topBanner.offsetHeight}px`;
    }


//Index Page

    //Function to auto-scroll the gallery on the index page, in a back-and-forth motion
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


//Bathrooms Page

    //Overwrites the HTML in the bathrooms.html to show the selected bathroom type (Values for these are held in the Hero Section)
    const data = {
        freestanding: {
            title: "Freestanding Baths",
            intro: "Luxury bathing that doesn't play by the rules.",
            image: "images/plumbing1.jpg",
            prosCons: `
                <table>
                    <thead>
                        <tr>
                            <th class="tableProHeader">Pros</th>
                            <th class="tableConHeader">Cons</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Luxurious aesthetic</td>
                            <td>Takes up more space</td>
                        </tr>
                        <tr>
                            <td>Flexible placement</td>
                            <td>May require floor plumbing</td>
                        </tr>
                        <tr>
                            <td>Visual centrepiece</td>
                            <td>More expensive</td>
                        </tr>
                    </tbody>
                </table>
            `,
            benefitTitle: "Why choose this one?",
            benefit: "Benefits over other choices text.",
            details: `
                <p>Install it in the bathroom, garden, or wherever you feel dramatic enough to bathe.</p>
                <p>A perfect option for those who want to feel like royalty while scrubbing their elbows.</p>
            `
        },
        straight: {
            title: "Straight Baths",
            intro: "Functional, familiar, and perfectly normal.",
            image: "images/plumbing2.jpg",
            prosCons: `
                <table>
                    <thead>
                        <tr>
                            <th class="tableProHeader">Pros</th>
                            <th class="tableConHeader">Cons</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Luxurious aesthetic</td>
                            <td>Takes up more space</td>
                        </tr>
                        <tr>
                            <td>Flexible placement</td>
                            <td>May require floor plumbing</td>
                        </tr>
                        <tr>
                            <td>Visual centrepiece</td>
                            <td>More expensive</td>
                        </tr>
                    </tbody>
                </table>
            `,
            benefitTitle: "Why choose this one?",
            benefit: "Benefits over other choices text.",
            details: `
                <p>The standard in most UK homes, a straight bath hugs 3 walls and maximizes space.</p>
                <p>If you're short on room or just don’t want a bath that causes conversation, this is your guy.</p>
                `
        },
        wetroom: {
            title: "Wet-Room Installation",
            intro: "Functional, familiar, and perfectly normal.",
            image: "images/plumbing3.jpg",
            prosCons: `
                <table>
                    <thead>
                        <tr>
                            <th class="tableProHeader">Pros</th>
                            <th class="tableConHeader">Cons</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Luxurious aesthetic</td>
                            <td>Takes up more space</td>
                        </tr>
                        <tr>
                            <td>Flexible placement</td>
                            <td>May require floor plumbing</td>
                        </tr>
                        <tr>
                            <td>Visual centrepiece</td>
                            <td>More expensive</td>
                        </tr>
                    </tbody>
                </table>
            `,
            benefitTitle: "Why choose this one?",
            benefit: "Benefits over other choices text.",
            details: `
                <p>The standard in most UK homes, a straight bath hugs 3 walls and maximizes space.</p>
                <p>If you're short on room or just don’t want a bath that causes conversation, this is your guy.</p>
                `
        },
        corner: {
            title: "Corner Baths",
            intro: "Functional, familiar, and perfectly normal.",
            image: "images/plumbing4.jpg",
            prosCons: `
                <table>
                    <thead>
                        <tr>
                            <th class="tableProHeader">Pros</th>
                            <th class="tableConHeader">Cons</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Luxurious aesthetic</td>
                            <td>Takes up more space</td>
                        </tr>
                        <tr>
                            <td>Flexible placement</td>
                            <td>May require floor plumbing</td>
                        </tr>
                        <tr>
                            <td>Visual centrepiece</td>
                            <td>More expensive</td>
                        </tr>
                    </tbody>
                </table>
            `,
            benefitTitle: "Why choose this one?",
            benefit: "Benefits over other choices text.",
            details: `
                <p>The standard in most UK homes, a straight bath hugs 3 walls and maximizes space.</p>
                <p>If you're short on room or just don’t want a bath that causes conversation, this is your guy.</p>
                `
        },
        accessible: {
            title: "Accessible Friendly Baths",
            intro: "Functional, familiar, and perfectly normal.",
            image: "images/plumbing5.jpg",
            prosCons: `
                <table>
                    <thead>
                        <tr>
                            <th class="tableProHeader">Pros</th>
                            <th class="tableConHeader">Cons</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Luxurious aesthetic</td>
                            <td>Takes up more space</td>
                        </tr>
                        <tr>
                            <td>Flexible placement</td>
                            <td>May require floor plumbing</td>
                        </tr>
                        <tr>
                            <td>Visual centrepiece</td>
                            <td>More expensive</td>
                        </tr>
                    </tbody>
                </table>
            `,
            benefitTitle: "Why choose this one?",
            benefit: "Benefits over other choices text.",
            details: `
                <p>The standard in most UK homes, a straight bath hugs 3 walls and maximizes space.</p>
                <p>If you're short on room or just don’t want a bath that causes conversation, this is your guy.</p>
                `
        },
        jacuzzi: {
            title: "Jacuzzi Baths",
            intro: "Functional, familiar, and perfectly normal.",
            image: "images/plumbing1.jpg",
            prosCons: `
                <table>
                    <thead>
                        <tr>
                            <th class="tableProHeader">Pros</th>
                            <th class="tableConHeader">Cons</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Luxurious aesthetic</td>
                            <td>Takes up more space</td>
                        </tr>
                        <tr>
                            <td>Flexible placement</td>
                            <td>May require floor plumbing</td>
                        </tr>
                        <tr>
                            <td>Visual centrepiece</td>
                            <td>More expensive</td>
                        </tr>
                    </tbody>
                </table>
            `,
            benefitTitle: "Why choose this one?",
            benefit: "Benefits over other choices text.",
            details: `
                <p>The standard in most UK homes, a straight bath hugs 3 walls and maximizes space.</p>
                <p>If you're short on room or just don’t want a bath that causes conversation, this is your guy.</p>
                `
        },

        //Repeat each value if more types are needed...
    };


    //Function to change the Bathrooms Page depending on what Bathroom is selected from the dropdown
    document.addEventListener("DOMContentLoaded", function () {
        const select = document.getElementById("bathroomTypeSelect");
        const content = document.getElementById("bathroomTypeContent");
        const title = document.getElementById("bathroomTitle");
        const intro = document.getElementById("bathroomIntro");
        const details = document.getElementById("bathroomDetails");
        const showcase = document.querySelector(".servicesShowcase");
        const benefit = document.getElementById("bathroomBenefit");
        const benefitTitle = document.getElementById("bathroomBenefitTitle");
        
        select.addEventListener("change", function () {
            const type = this.value;
            const image = document.getElementById("bathroomImage");
            const table = document.getElementById("bathroomTable");

            if (type && data[type]) {
                content.style.display = "block";
                showcase.style.display = "none";

                title.textContent = data[type].title;
                intro.textContent = data[type].intro;
                benefit.textContent = data[type].benefit || "";
                benefitTitle.textContent = data[type].benefitTitle || "";
                details.innerHTML = data[type].details;

                image.src = data[type].image;
                image.alt = data[type].title;
                table.innerHTML = data[type].prosCons;

                //content.scrollIntoView({behavior: "smooth"},);
            } else {
                content.style.display = "none";
                showcase.style.display = "grid";
            }
        });
    });


    //Function to change the Bathrooms Page depending on what Bathroom image is clicked
    //(Changes the value in the drop down which runs the event listener in the above function)
    document.addEventListener("DOMContentLoaded", function () {
        const typeSelect = document.getElementById("bathroomTypeSelect");

        const clickableAreas = document.querySelectorAll(".serviceImage, .serviceOverlay");

        clickableAreas.forEach(element => {
            element.addEventListener("click", function () {
                const parentCard = element.closest(".serviceCard");
                const bathroomType = parentCard.getAttribute("data-type");

                if (bathroomType) {
                    typeSelect.value = bathroomType;
                    typeSelect.dispatchEvent(new Event("change"));
                }
            });
        });
    });



//------ Excecuted Scripts when website is loaded ----------

document.addEventListener("DOMContentLoaded", function () {
    enableAutoScrollBounce('.galleryWrapper', 1, 30);
});

