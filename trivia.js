document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById("quiz-container");
    const finalMessage = document.getElementById("final-message");
    let currentQuestionIndex = 0;
    let correctAnswers = 0;

    // Questions and Answers (emoji removed from answer texts)
    const questions = [
        { 
            question: "When is our anniversary?", 
            answers: ["14 Jan", "16 Jan", "16 Feb", "14 Feb"], 
            correct: 1 
        },
        { 
            question: "What's the first nickname you ever gave me?", 
            answers: ["Ani", "Dear", "Baby", "Nigga"], 
            correct: 1 
        },
        { 
            question: "What do you think I love about you the most?", 
            answers: ["Your smile", "Your face", "Your attitude", "Your everything"], 
            correct: "all"
        },
        { 
            question: "Do you love me and see a future with me?", 
            answers: ["Yes", "No"], 
            correct: 0 
        }
    ];

    // Load only the current question
    function loadCurrentQuestion() {
        quizContainer.innerHTML = ""; // clear previous content

        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];

            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question");

            const questionText = document.createElement("h2");
            questionText.innerText = q.question;
            questionDiv.appendChild(questionText);

            q.answers.forEach((answer, index) => {
                const button = document.createElement("button");
                button.innerText = answer;
                button.onclick = () => checkAnswer(index, q.correct, button);
                questionDiv.appendChild(button);
            });

            quizContainer.appendChild(questionDiv);
        } else {
            // When all questions are answered
            quizContainer.classList.add("hidden");
            finalMessage.classList.remove("hidden");
            fireworksEffect();
        }
    }

    // Check Answer and proceed to next question if correct
    function checkAnswer(selectedIndex, correctIndex, button) {
        if (correctIndex === "all" || selectedIndex === correctIndex) {
            button.style.backgroundColor = "lightgreen";
            confettiEffect();
            correctAnswers++;
            currentQuestionIndex++;
            setTimeout(() => {
                loadCurrentQuestion();
            }, 1000);  // slight delay before loading the next question
        } else {
            button.style.backgroundColor = "red";
            bombEffect();
        }
    }

    // 🎊 Confetti Effect
    function confettiEffect() {
        const confetti = document.createElement("div");
        confetti.innerHTML = "🎊";
        confetti.style.position = "absolute";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = "0px";
        confetti.style.fontSize = "30px";
        confetti.style.animation = "fall 2s linear";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 2000);
    }

    // 💣 Bomb Effect
    function bombEffect() {
        alert("💣 Boom! Nope, try again! 😆");
    }

    // 🎇 Fireworks Effect
    function fireworksEffect() {
        for (let i = 0; i < 10; i++) {
            const firework = document.createElement("div");
            firework.innerHTML = "🎇";
            firework.style.position = "absolute";
            firework.style.left = Math.random() * window.innerWidth + "px";
            firework.style.top = Math.random() * window.innerHeight + "px";
            firework.style.fontSize = "40px";
            document.body.appendChild(firework);
            setTimeout(() => firework.remove(), 3000);
        }
    }

    // Navigate to the next page (final surprise)
    function nextPage() {
        window.location.href = "final-surprise.html";  // Change this if needed
    }
    // Expose nextPage to global scope so it can be called from HTML
    window.nextPage = nextPage;

    // Load the first question on page load
    loadCurrentQuestion();
});
