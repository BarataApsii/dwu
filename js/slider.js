document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;
    let slideInterval;
    const slideDelay = 5000; // 5 seconds delay between slides

    // Create dots for each slide
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Initialize the slider
    function initSlider() {
        // Show first slide
        slides[0].classList.add('active');
        startSlideShow();
    }

    // Go to specific slide
    function goToSlide(n) {
        // Reset all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Update current slide index
        currentSlide = (n + slides.length) % slides.length;
        
        // Show the selected slide and update dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // Reset the autoplay timer
        resetSlideShow();
    }

    // Go to next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    // Go to previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // Start the slideshow
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, slideDelay);
    }

    // Reset the slideshow timer
    function resetSlideShow() {
        clearInterval(slideInterval);
        startSlideShow();
    }

    // Event listeners for navigation buttons
    nextBtn.addEventListener('click', () => {
        nextSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
    });

    // Pause slideshow when hovering over the slider
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    sliderContainer.addEventListener('mouseleave', () => {
        startSlideShow();
    });

    // Initialize the slider
    initSlider();

    // Handle window resize
    window.addEventListener('resize', () => {
        // You can add responsive adjustments here if needed
    });
});
