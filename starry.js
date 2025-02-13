document.addEventListener("DOMContentLoaded", function () {
    const starContainer = document.querySelector(".star-container");
    const messageBox = document.getElementById("message-box");
    const messageText = document.getElementById("message-text");
    const finalMessage = document.getElementById("final-message");
    const finalButton = document.getElementById("final-button");

    const messages = [
        "I love the way you smile. ❤️",
        "Every moment with you is special. ✨",
        "You make my world brighter. 💫",
        "With you, every day feels like magic. 🌟",
        "You're my greatest adventure. 🏔️",
        "No words can express how much you mean to me. 💖"
    ];

    let finalStarClicked = false;

    // Generate random stars (Only in the top half of the screen)
    for (let i = 0; i < 20; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 45 + "vh";  // Restricts stars to the top half
        star.style.left = Math.random() * 100 + "vw";

        // Add click event to reveal message
        star.addEventListener("click", function () {
            if (!finalStarClicked) {
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                messageText.innerHTML = randomMessage;
                messageBox.style.display = "block";
                setTimeout(() => { messageBox.style.display = "none"; }, 2000);
                star.remove();
            }
        });

        starContainer.appendChild(star);
    }

    // One special final star (Now placed randomly)
    const finalStar = document.createElement("div");
    finalStar.classList.add("star", "final-star");
    finalStar.style.top = Math.random() * 45 + "vh";  // Random position in the top half
    finalStar.style.left = Math.random() * 100 + "vw";

    finalStar.addEventListener("click", function () {
        finalStarClicked = true;
        finalMessage.style.display = "block";
        starContainer.style.display = "none";
    });

    // Button functionality to redirect to the final page
    finalButton.addEventListener("click", function () {
        window.location.href = "final.html"; // Redirects to the final letter page
    });

    starContainer.appendChild(finalStar);
});
