
            var swiper = new Swiper(".swiper-container", {
                slidesPerView: 4.5, // Number of slides visible
                centeredSlides: true, // Center the active slide
                spaceBetween: 30, // Space between slides
                loop: true, // Enable looping
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                // pagination: {
                //   el: ".swiper-pagination",
                //   clickable: false // Allows the user to click the bullets
                // },
                breakpoints: {
                    // Responsive design, changing slidesPerView based on screen width Code by Amit Niranjan
                    640: {
                        slidesPerView: 1.4
                    },
                    768: {
                        slidesPerView: 2.5
                    },
                    1024: {
                        slidesPerView: 4.2
                    }
                }
            });
        


