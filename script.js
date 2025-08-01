document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Get the height of the fixed header to offset scroll position
                const headerOffset = document.querySelector('header').offsetHeight;
                // Calculate the position to scroll to (target's top minus header height and a small padding)
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset - 20; // -20 for a little padding

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth' // Smooth scroll effect
                });
            }
        });
    });

    // Dynamic year in the footer (e.g., "© 2025 Your Name")
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Basic form submission handling for the contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission (page reload)

            // In a real-world scenario, you would send this form data to a backend server
            // using technologies like AJAX (fetch API or XMLHttpRequest) or a form submission service.
            // Example of collecting data:
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // For this demonstration, we'll just show an alert.
            alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon. (This is a demo, no actual email was sent.)`);

            // Optionally clear the form fields after submission
            contactForm.reset();
        });
    }

    // Initialize Particles.js
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80, // Number of particles
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff" // Color of particles (white for contrast on dark blue)
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff", // Color of lines linking particles
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3, // Slower movement for background effect
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab" // Particles follow mouse and link
                },
                "onclick": {
                    "enable": true,
                    "mode": "push" // Click to add more particles
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});