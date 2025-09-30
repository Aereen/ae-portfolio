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