document.addEventListener("DOMContentLoaded", function () {
    const finalPopupButton = document.getElementById("final-popup-button");
    const popup1 = document.getElementById("popup");
    const popup2 = document.getElementById("popup-2");
    const nextPageButton = document.getElementById("next-page-button");

    // Open first popup
    finalPopupButton.addEventListener("click", function () {
        popup1.style.display = "block";
        finalPopupButton.style.display = "none"; // Hide button after opening
    });

    // Go to the next part of the message
    nextPageButton.addEventListener("click", function () {
        popup1.style.display = "none";
        popup2.style.display = "block";
    });
});
