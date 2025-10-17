// Birthday messages array
const birthdayMessages = [
    "Like a rare succulent, you've developed a unique beauty that can't be replicated.",
    "Another year of wisdom cultivated, like a master gardener tending their collection.",
    "You've mastered the art of resilience - thriving in any environment with grace.",
    "Aging with the sophistication of a vintage wine and the endurance of desert flora.",
    "Each year adds another layer of depth to your already fascinating character.",
    "You've perfected the balance of strength and elegance, just like nature's finest succulents.",
    "Time has only enhanced your natural ability to flourish wherever you're planted.",
    "Like the finest botanical specimens, you continue to surprise and inspire year after year."
];

// Animation delays for letters
document.addEventListener('DOMContentLoaded', function() {
    // Animate letters with delays
    const letters = document.querySelectorAll('.letter, .exclamation');
    letters.forEach((letter, index) => {
        const delay = parseInt(letter.getAttribute('data-delay')) || index * 100;
        letter.style.animationDelay = delay + 'ms';
    });

    // Set random birthday message
    const messageElement = document.getElementById('birthdayMessage');
    const randomMessage = birthdayMessages[Math.floor(Math.random() * birthdayMessages.length)];
    messageElement.textContent = randomMessage;

    // Add typing effect to the message
    typeMessage(messageElement, randomMessage);
});

// Typing effect for birthday message
function typeMessage(element, message) {
    element.textContent = '';
    let i = 0;
    const speed = 50;
    
    function typeChar() {
        if (i < message.length) {
            element.textContent += message.charAt(i);
            i++;
            setTimeout(typeChar, speed);
        }
    }
    
    // Start typing after other animations
    setTimeout(typeChar, 2000);
}

// Candle blowing functionality
let candleLit = true;

function blowCandle() {
    const flame = document.getElementById('flame');
    const button = document.querySelector('.blow-candle-btn');
    
    if (candleLit) {
        // Blow out the candle
        flame.style.display = 'none';
        button.textContent = '�️ Rekindle the Light';
        candleLit = false;
        
        // Add some celebration
        createConfetti();
        playBlowAnimation();
    } else {
        // Light the candle
        flame.style.display = 'block';
        button.textContent = '�️ Make a Wish';
        candleLit = true;
        
        // Flicker effect when lighting
        flame.style.animation = 'none';
        setTimeout(() => {
            flame.style.animation = 'flicker 0.8s ease-in-out infinite alternate';
        }, 100);
    }
}

// Blow animation effect
function playBlowAnimation() {
    const cake = document.querySelector('.cake');
    cake.style.animation = 'shake 0.5s ease-in-out';
    
    setTimeout(() => {
        cake.style.animation = '';
    }, 500);
}

// CSS for shake animation (added dynamically)
const shakeKeyframes = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}`;

const style = document.createElement('style');
style.textContent = shakeKeyframes;
document.head.appendChild(style);

// Succulent garden interaction
function plantSucculent(pot) {
    pot.classList.add('clicked');
    
    // Create growing animation
    const plant = pot.querySelector('.succulent-plant');
    const originalSize = plant.style.fontSize || '2rem';
    
    // Grow animation
    plant.style.transform = 'translateX(-50%) scale(1.3)';
    plant.style.transition = 'transform 0.3s ease';
    
    setTimeout(() => {
        plant.style.transform = 'translateX(-50%) scale(1)';
    }, 300);
    
    // Remove clicked class after animation
    setTimeout(() => {
        pot.classList.remove('clicked');
    }, 600);
    
    // Add sparkle effect
    createSparkles(pot);
}

// Sparkle effect for succulent interaction
function createSparkles(element) {
    const sparkles = ['✨', '⭐', '🌟', '💫'];
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.position = 'fixed';
        sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        sparkle.style.fontSize = '1rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1001';
        sparkle.style.animation = 'sparkleFloat 1.5s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }
}

// Add sparkle animation
const sparkleKeyframes = `
@keyframes sparkleFloat {
    0% {
        opacity: 1;
        transform: translateY(0) scale(0);
    }
    50% {
        opacity: 1;
        transform: translateY(-30px) scale(1);
    }
    100% {
        opacity: 0;
        transform: translateY(-60px) scale(0);
    }
}`;

const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = sparkleKeyframes;
document.head.appendChild(sparkleStyle);

// Main celebration function
function startCelebration() {
    const button = document.querySelector('.celebrate-btn');
    button.style.transform = 'scale(0.95)';
    button.textContent = '🥂 Celebrating You! 🥂';
    
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 200);
    
    // Multiple effects
    createConfetti();
    createFloatingEmojis();
    flashColors();
    celebrationMessage();
    
    // Reset button after celebration
    setTimeout(() => {
        button.textContent = '🥂 Raise a Toast 🥂';
    }, 3000);
}

// Confetti animation
function createConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confetti = [];
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6ab04c'];
    const succulentEmojis = ['🌵', '🪴', '🌿', '🌱'];
    
    // Create confetti pieces
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: -10,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 4,
            emoji: Math.random() > 0.7 ? succulentEmojis[Math.floor(Math.random() * succulentEmojis.length)] : null,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10
        });
    }
    
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confetti.forEach((piece, index) => {
            piece.x += piece.vx;
            piece.y += piece.vy;
            piece.rotation += piece.rotationSpeed;
            
            ctx.save();
            ctx.translate(piece.x, piece.y);
            ctx.rotate((piece.rotation * Math.PI) / 180);
            
            if (piece.emoji) {
                ctx.font = piece.size + 'px Arial';
                ctx.fillText(piece.emoji, -piece.size/2, piece.size/2);
            } else {
                ctx.fillStyle = piece.color;
                ctx.fillRect(-piece.size/2, -piece.size/2, piece.size, piece.size);
            }
            
            ctx.restore();
            
            // Remove if off screen
            if (piece.y > canvas.height + 10) {
                confetti.splice(index, 1);
            }
        });
        
        if (confetti.length > 0) {
            requestAnimationFrame(animateConfetti);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    
    animateConfetti();
}

// Floating celebration emojis
function createFloatingEmojis() {
    const emojis = ['🎉', '🎊', '🥳', '🎈', '🎂', '🌵', '🪴', '✨'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.position = 'fixed';
            emoji.style.left = Math.random() * window.innerWidth + 'px';
            emoji.style.top = window.innerHeight + 'px';
            emoji.style.fontSize = (Math.random() * 2 + 1) + 'rem';
            emoji.style.pointerEvents = 'none';
            emoji.style.zIndex = '1002';
            emoji.style.animation = 'floatUp 3s ease-out forwards';
            
            document.body.appendChild(emoji);
            
            setTimeout(() => {
                emoji.remove();
            }, 3000);
        }, i * 200);
    }
}

// Float up animation for emojis
const floatKeyframes = `
@keyframes floatUp {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(-${window.innerHeight + 200}px) rotate(360deg);
        opacity: 0;
    }
}`;

const floatStyle = document.createElement('style');
floatStyle.textContent = floatKeyframes;
document.head.appendChild(floatStyle);

// Flash background colors
function flashColors() {
    const body = document.body;
    const originalBackground = body.style.background;
    const colors = [
        'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        'linear-gradient(135deg, #8e44ad 0%, #3498db 100%)',
        'linear-gradient(135deg, #d4af37 0%, #f39c12 100%)',
        'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)',
        'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)'
    ];
    
    let colorIndex = 0;
    const flashInterval = setInterval(() => {
        body.style.background = colors[colorIndex % colors.length];
        colorIndex++;
    }, 300);
    
    setTimeout(() => {
        clearInterval(flashInterval);
        body.style.background = originalBackground;
    }, 2000);
}

// Birthday celebration message
function celebrationMessage() {
    const messages = [
        "🥂 Cheers to Another Year of Excellence 🥂",
        "✨ Celebrating Your Journey & Growth ✨",
        "🌿 Here's to Wisdom, Grace & New Adventures 🌿",
        "� Toast to Your Continued Flourishing �"
    ];
    
    const messageDiv = document.createElement('div');
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '50%';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translate(-50%, -50%)';
    messageDiv.style.fontSize = 'clamp(1.5rem, 4vw, 3rem)';
    messageDiv.style.color = '#fff';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.zIndex = '1003';
    messageDiv.style.pointerEvents = 'none';
    messageDiv.style.textShadow = '3px 3px 6px rgba(0,0,0,0.5)';
    messageDiv.style.animation = 'celebrationPop 2s ease-out forwards';
    messageDiv.textContent = messages[Math.floor(Math.random() * messages.length)];
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 2000);
}

// Celebration pop animation
const celebrationKeyframes = `
@keyframes celebrationPop {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.3);
    }
    50% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.2);
    }
    100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(1);
    }
}`;

const celebrationStyle = document.createElement('style');
celebrationStyle.textContent = celebrationKeyframes;
document.head.appendChild(celebrationStyle);

// Handle window resize for confetti canvas
window.addEventListener('resize', () => {
    const canvas = document.getElementById('confetti-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Add some random floating animations to existing elements
setInterval(() => {
    const floatingSucculents = document.querySelectorAll('.floating-succulents .succulent');
    floatingSucculents.forEach(succulent => {
        const randomDelay = Math.random() * 2;
        succulent.style.animationDelay = randomDelay + 's';
    });
}, 10000);

// Easter egg: Konami code for extra celebration
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        // Super celebration mode!
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                startCelebration();
            }, i * 500);
        }
        konamiCode = [];
        
        // Show secret message
        const secret = document.createElement('div');
        secret.textContent = '� EXCLUSIVE CELEBRATION MODE ACTIVATED! �';
        secret.style.position = 'fixed';
        secret.style.bottom = '20px';
        secret.style.left = '50%';
        secret.style.transform = 'translateX(-50%)';
        secret.style.background = 'rgba(0,0,0,0.8)';
        secret.style.color = '#4ecdc4';
        secret.style.padding = '10px 20px';
        secret.style.borderRadius = '25px';
        secret.style.zIndex = '1004';
        secret.style.animation = 'fadeInOut 3s ease-out';
        
        document.body.appendChild(secret);
        
        setTimeout(() => {
            secret.remove();
        }, 3000);
    }
});

const fadeKeyframes = `
@keyframes fadeInOut {
    0%, 100% { opacity: 0; transform: translateX(-50%) translateY(20px); }
    50% { opacity: 1; transform: translateX(-50%) translateY(0); }
}`;

const fadeStyle = document.createElement('style');
fadeStyle.textContent = fadeKeyframes;
document.head.appendChild(fadeStyle);