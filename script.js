// Floating Hearts Effect
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.querySelector('.hearts-container').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 500);

// Play Background Music When Page Loads
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("bg-music");
    if (audio) {
        audio.volume = 0.5;
        audio.play().catch(error => console.log("Auto-play blocked:", error));
    }
});

// Open the Gift Button Action
document.querySelector(".btn").addEventListener("click", function() {
    alert("Surprise! More surprises coming soon! 🎁❤️");
});
