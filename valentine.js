// script.js
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.top = `${Math.floor(Math.random() * (window.innerHeight - 50))}px`;
    heart.style.left = `${Math.floor(Math.random() * (window.innerWidth - 50))}px`;
    heart.innerHTML = '&hearts;';
    document.body.appendChild(heart);

    // Remove the heart after the animation completes
    setTimeout(() => {
        heart.remove();
    }, 700); // Match the animation duration
}

// Function to generate hearts at random intervals
function generateHearts() {
    createHeart();
    setTimeout(generateHearts, Math.random() * 500 + 200); // Random interval between 200ms and 700ms
}

// Start generating hearts
generateHearts();

document.getElementById('yes').addEventListener('click', () => {
    alert('Yaay! I love you too!');
});

document.getElementById('no').addEventListener('mouseover', () => {
    const noButton = document.getElementById('no');
    noButton.style.position = 'absolute';
    noButton.style.left = `${Math.random() * 90}vw`;
    noButton.style.top = `${Math.random() * 90}vh`;
});