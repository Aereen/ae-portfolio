//Text Typing Effect
const phrases = ["Web Development", "Web Design", "Project Management", "UI/UX Design"];
    const typingElement = document.getElementById("typing-text");

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let delay = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        const visibleText = currentPhrase.substring(0, charIndex);
            typingElement.innerHTML = visibleText;

                if (!isDeleting && charIndex < currentPhrase.length) {
                charIndex++;
                delay = 60;
                } else if (isDeleting && charIndex > 0) {
                charIndex--;
                delay = 30;
                } else {
                if (!isDeleting) {
                    isDeleting = true;
                    delay = 1000;
                } else {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    delay = 300;
                }
                }

                setTimeout(type, delay);
            }

window.addEventListener("DOMContentLoaded", type);

// Modal Functionality
    const openModal = document.getElementById("openModal");
    const closeModal = document.getElementById("closeModal");
    const modal = document.getElementById("capabilitiesModal");

    openModal.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });

    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    // Close when clicking outside modal content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
        modal.classList.add("hidden");
        }
    });

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Toggle modal visibility
    window.toggleModal = function () {
        const modal = document.getElementById('referralModal');
        if (modal) modal.classList.toggle('hidden');
    };

    // Toggle popover visibility
    const button = document.querySelector('button[data-popover-target]');
    if (button) {
        const popover = document.getElementById(button.getAttribute('data-popover-target'));

        button.addEventListener('click', () => {
            popover.classList.toggle('invisible');
            popover.classList.toggle('opacity-0');
            popover.classList.toggle('opacity-100');
        });

        window.addEventListener('click', (event) => {
            if (!popover.contains(event.target) && !button.contains(event.target)) {
                popover.classList.add('invisible', 'opacity-0');
                popover.classList.remove('opacity-100');
            }
        });
    }

    // Smooth scroll for link tabs
    document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            // Auto-close mobile menu after clicking
            if (mobileMenu) mobileMenu.classList.add('hidden');
        });
    });
});