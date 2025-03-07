
document.addEventListener('DOMContentLoaded', function () {
    // JSON Data for Watch Slides
    const watchData = [
        {
            id: 1,
            title: "Exquisite Watches",
            subtitle: "Gold Luxury",
            tagline: "Choose Us",
            description: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
            price: "$499.00",
            floatingImage: "/images/Group4.png",
            backgroundColor: "#f5b87f",
            altText: "Gold Luxury Watch"
        },
        {
            id: 2,
            title: "Dainty Timepieces",
            subtitle: "Silver Luxury",
            tagline: "Choose Us",
            description: "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
            price: "$469.00",
            floatingImage: "/images/Frame 25.png",
            backgroundColor: "#c2c5c9",
            altText: "Silver Chronograph Watch"
        },
        {
            id: 3,
            title: "Elegant Timepieces",
            subtitle: "Choose Luxury",
            tagline: "Choose Us",
            description: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
            price: "$529.00",
            floatingImage: "/images/Group 6.png",
            backgroundColor: "#4eb577",
            altText: "Green Diver Watch"
        },
        {
            id: 4,
            title: "Refined Timepieces",
            subtitle: "Choose Luxury",
            tagline: "Choose Us",
            description: "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
            price: "$599.00",
            floatingImage: "/images/Group 7.png",
            backgroundColor: "#f96c61",
            altText: "Red Diver Watch"
        }
    ];

    const header = document.querySelector('header');
    const splideList = document.querySelector('.splide__list');

    // Generate slides based on JSON data
    watchData.forEach((watch) => {
        // Create slide element
        const slide = document.createElement('li');
        slide.className = 'splide__slide';
        slide.dataset.color = watch.backgroundColor;

        // Create slide content
        slide.innerHTML = `
            <div class="slide">
                <div class="slide-right" style="background-color: ${watch.backgroundColor};">
                    <div class="content-container">
                        <h1 class="slide-title">${watch.title}</h1>
                        <p class="slide-subtitle">${watch.subtitle}, <span>${watch.tagline}</span></p>
                        <p class="slide-description">${watch.description}</p>
                        <div class="price">${watch.price}</div>
                        <div class="social-icons">
                            <div class="social-icon">
                                <img src="/images/Vector.png" alt="Facebook icon">
                            </div>
                            <div class="social-icon">
                                <img src="/images/Vector (1).png" alt="Twitter icon">
                            </div>
                            <div class="social-icon">
                                <img src="/images/Exclude.png" alt="YouTube icon">
                            </div>
                        </div>
                    </div>
                    <img src="${watch.floatingImage}" alt="${watch.altText} Floating" class="watch-image-floating">
                </div>
            </div>
        `;

        // Add slide to slider container
        splideList.appendChild(slide);
    });

    // Initialize Splide
    const splide = new Splide('.splide', {
        type: 'fade',
        rewind: true,
        speed: 800,
        autoplay: false,
        pauseOnHover: true,
        arrows: true,
        pagination: true,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        perPage: 1,
        breakpoints: {
            768: {
                arrows: true,
                pagination: true
            }
        }
    }).mount();

    // Update header background color on slide change
    splide.on('moved', function (newIndex) {
        const backgroundColor = watchData[newIndex].backgroundColor;
        header.style.backgroundColor = backgroundColor;
        // Update mobile menu background when it's shown
        if (document.querySelector('.nav-links').classList.contains('show')) {
            document.querySelector('.nav-links').style.backgroundColor = backgroundColor;
        }
    });

    // Set initial header color
    header.style.backgroundColor = watchData[0].backgroundColor;

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            this.classList.toggle('open');
            navLinks.classList.toggle('show');
            
            // Set background color of mobile menu when opened
            if (navLinks.classList.contains('show')) {
                const activeSlideIndex = splide.index;
                navLinks.style.backgroundColor = watchData[activeSlideIndex].backgroundColor;
            }
        });
    }
    
    // Close mobile menu when a link is clicked
    const navLinkElements = document.querySelectorAll('.nav-link');
    navLinkElements.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mobileMenuBtn.classList.remove('open');
                navLinks.classList.remove('show');
            }
        });
    });
    
    // Handle resize events
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('show')) {
            mobileMenuBtn.classList.remove('open');
            navLinks.classList.remove('show');
        }
    });
});
