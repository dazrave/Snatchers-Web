// ========================================
// SNATCHERS - Coming Soon Website Scripts
// Interactive and Fun!
// ========================================

console.log('🎮 Welcome to Snatchers! 💰');

// ===== EMAIL SIGNUP FORM =====
// Handles the email signup form submission
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const emailInput = document.getElementById('email');
    const formMessage = document.getElementById('formMessage');

    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = emailInput.value.trim();

            // Validate email
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address! 🤔', 'error');
                return;
            }

            // Disable button during submission
            const submitButton = signupForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.innerHTML = '<span>Signing up...</span>';

            try {
                // Send to backend
                const response = await fetch('/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                });

                const data = await response.json();

                if (data.success) {
                    // Show success message
                    showMessage('Awesome! You\'re on the list! 🎉', 'success');

                    // Clear the form
                    emailInput.value = '';

                    console.log('Email submitted successfully:', email);
                } else {
                    // Show error message
                    if (response.status === 409) {
                        showMessage('You\'re already on the list! 😊', 'error');
                    } else {
                        showMessage(data.message || 'Oops! Something went wrong. Try again! 😅', 'error');
                    }
                }
            } catch (error) {
                console.error('Error submitting email:', error);
                showMessage('Oops! Something went wrong. Try again! 😅', 'error');
            } finally {
                // Re-enable button
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            }
        });
    }

    // Show message function
    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;

        // Auto-hide after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }

    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

// ===== SMOOTH SCROLLING =====
// Makes navigation links scroll smoothly
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== SCROLL ANIMATIONS =====
// Animate elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.overview-card, .feature-bubble, .polaroid, .signup-box'
    );

    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// ===== FLOATING SHAPES MOVEMENT =====
// Make the floating emoji shapes move around
document.addEventListener('DOMContentLoaded', () => {
    const shapes = document.querySelectorAll('.shape');

    shapes.forEach((shape, index) => {
        // Random movement for each shape
        setInterval(() => {
            const randomX = Math.random() * 100 - 50;
            const randomY = Math.random() * 100 - 50;

            shape.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomX}deg)`;
        }, 3000 + (index * 500));
    });
});

// ===== SOCIAL ICON HOVER SOUNDS (Optional) =====
// You can add sound effects when hovering social icons
// Uncomment if you add sound files to your assets folder
/*
const socialIcons = document.querySelectorAll('.social-icon');
const hoverSound = new Audio('assets/pop.mp3'); // Add your sound file

socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play().catch(e => console.log('Audio play failed:', e));
    });
});
*/

// ===== PARTICLE EFFECT ON CLICK (Optional) =====
// Creates a fun burst effect when clicking the CTA button
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');

    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            createParticles(e.clientX, e.clientY);
        });
    }

    function createParticles(x, y) {
        const particles = ['✨', '🌟', '⭐', '💫', '🎉'];
        const particleCount = 8;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.textContent = particles[Math.floor(Math.random() * particles.length)];
            particle.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                font-size: 2rem;
                pointer-events: none;
                z-index: 9999;
                animation: particle-burst 1s ease-out forwards;
            `;

            document.body.appendChild(particle);

            // Random direction for each particle
            const angle = (Math.PI * 2 * i) / particleCount;
            const velocity = 100;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;

            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);

            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }
});

// Add particle animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes particle-burst {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--tx), var(--ty)) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== LOADING ANIMATION =====
// Show a fun loading animation when page loads
window.addEventListener('load', () => {
    console.log('🚀 Site loaded! Ready to snatch! 💰');

    // You can add a loading screen here if needed
    // hideLoadingScreen();
});

// ===== EMOJI RAIN EASTER EGG =====
// Type "chaos" anywhere on the page to trigger emoji rain!
let keySequence = '';
const secretCode = 'chaos';

document.addEventListener('keypress', (e) => {
    keySequence += e.key.toLowerCase();

    if (keySequence.includes(secretCode)) {
        triggerEmojiRain();
        keySequence = '';
    }

    // Keep only last 10 characters
    if (keySequence.length > 10) {
        keySequence = keySequence.slice(-10);
    }
});

function triggerEmojiRain() {
    console.log('🎉 CHAOS MODE ACTIVATED! 🎉');

    const emojis = ['💰', '🚨', '💎', '🏃', '⭐', '🎮', '🔥', '⚡', '🎪', '🎉'];
    const emojiCount = 50;

    for (let i = 0; i < emojiCount; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}vw;
                top: -50px;
                font-size: ${Math.random() * 2 + 1}rem;
                pointer-events: none;
                z-index: 9999;
                animation: emoji-fall ${Math.random() * 3 + 2}s linear forwards;
            `;

            document.body.appendChild(emoji);

            setTimeout(() => {
                emoji.remove();
            }, 5000);
        }, i * 100);
    }
}

// Add emoji fall animation
const emojiStyle = document.createElement('style');
emojiStyle.textContent = `
    @keyframes emoji-fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0.5;
        }
    }
`;
document.head.appendChild(emojiStyle);

// ===== PARALLAX EFFECT =====
// Subtle parallax scrolling for floating shapes
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const shapes = document.querySelectorAll('.shape');

            shapes.forEach((shape, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                shape.style.transform = `translateY(${yPos}px)`;
            });

            ticking = false;
        });

        ticking = true;
    }
});

// ===== MOUSE TRAIL EFFECT (Subtle) =====
// Creates a subtle sparkle trail when moving the mouse
let mouseTrailEnabled = true;
let lastMouseX = 0;
let lastMouseY = 0;

document.addEventListener('mousemove', (e) => {
    if (!mouseTrailEnabled) return;

    const dx = e.clientX - lastMouseX;
    const dy = e.clientY - lastMouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Only create trail if mouse is moving fast enough
    if (distance > 50) {
        createSparkle(e.clientX, e.clientY);
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: 1rem;
        pointer-events: none;
        z-index: 9998;
        animation: sparkle-fade 1s ease-out forwards;
    `;

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle-fade {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

// ===== PERFORMANCE OPTIMIZATION =====
// Disable mouse trail on mobile devices to save battery
if (window.matchMedia('(max-width: 768px)').matches) {
    mouseTrailEnabled = false;
}

// ===== CONSOLE ART =====
// Fun ASCII art in the console for developers
console.log(`
%c
   _____ _   _     _______ _____ _    _ ______ _____   _____
  / ____| \\ | |   /\\|__   __/ ____| |  | |  ____|  __ \\ / ____|
 | (___ |  \\| |  /  \\  | | | |    | |__| | |__  | |__) | (___
  \\___ \\| . \` | / /\\ \\ | | | |    |  __  |  __| |  _  / \\___ \\
  ____) | |\\  |/ ____ \\| | | |____| |  | | |____| | \\ \\ ____) |
 |_____/|_| \\_/_/    \\_\\_|  \\_____|_|  |_|______|_|  \\_\\_____/

%c🎮 Steal. Run. Repeat. 💰
%c
Type "chaos" for a surprise! 🎉
`, 'color: #FF6B9D; font-weight: bold;', 'color: #4ECDC4; font-size: 16px;', 'color: #FFE66D;');

// ===== COUNTDOWN TIMER (COUNTS UP!) =====
// This is a joke timer that counts UP instead of down
// Because we have NO idea when we'll actually release! 😅
document.addEventListener('DOMContentLoaded', () => {
    // Set a "start date" - this could be when you first said "coming soon"
    // For fun, let's start from 30 days ago (like the old website)
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 30); // Started "30 days ago"

    function updateCountdown() {
        const now = new Date();
        const elapsed = Math.floor((now - startDate) / 1000); // Total seconds elapsed

        // Calculate days, hours, minutes, seconds
        const days = Math.floor(elapsed / 86400);
        const hours = Math.floor((elapsed % 86400) / 3600);
        const minutes = Math.floor((elapsed % 3600) / 60);
        const seconds = elapsed % 60;

        // Update the DOM
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = days;
        if (hoursEl) hoursEl.textContent = hours;
        if (minutesEl) minutesEl.textContent = minutes;
        if (secondsEl) secondsEl.textContent = seconds;
    }

    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);

    console.log('⏰ Countdown timer started - counting UP because why not! 🚀');
});

// ===== EXPORT FOR TESTING =====
// Export functions for easy testing (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidEmail: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        triggerEmojiRain,
        createSparkle
    };
}
