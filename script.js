// Floating hearts effect
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.querySelector('.hearts-container').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 500);

// Play background music when the page loads
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");
    audio.volume = 0.5;
    audio.play();
});

// Open the gift button action
function openGift() {
    alert("Surprise! More surprises coming soon! 🎁❤️");
}
