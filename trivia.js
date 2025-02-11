document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById("quiz-container");
    const finalMessage = document.getElementById("final-message");
    let correctAnswers = 0;

    // Questions and Answers
    const questions = [
        { 
            question: "When is our anniversary?", 
            answers: ["14 Jan", "16 Jan", "16 Feb", "14 Feb"], 
            correct: 1 
        },
        { 
            question: "What's the first nickname you ever gave me?", 
            answers: ["Ani", "Dear", "Baby", "Love"], 
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

    let currentQuestionIndex = 0;

    // Function to show one question at a time
    function loadNextQuestion() {
        quizContainer.innerHTML = ""; // Clear previous question

        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];

            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question");

            const questionText = document.createElement("h2");
            questionText.innerHTML = q.question;
            questionDiv.appendChild(questionText);

            q.answers.forEach((answer, i) => {
                const button = document.createElement("button");
                button.innerHTML = answer;
                button.onclick = () => checkAnswer(i, q.correct);
                questionDiv.appendChild(button);
            });

            quizContainer.appendChild(questionDiv);
        } else {
            // All questions answered correctly
            quizContainer.classList.add("hidden");
            finalMessage.classList.remove("hidden");
            startFireworks();
        }
    }

    // Check Answer and Move to Next Question
    function checkAnswer(selectedIndex, correctIndex) {
        if (correctIndex === "all" || selectedIndex === correctIndex) {
            correctAnswers++;
            currentQuestionIndex++;
            setTimeout(loadNextQuestion, 500); // Load next question after short delay
        } else {
            alert("Nope, try again! 😆");
        }
    }

    // 🎆 Firework Animation Effect
    function startFireworks() {
        const canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100vw";
        canvas.style.height = "100vh";
        canvas.style.pointerEvents = "none";
        const ctx = canvas.getContext("2d");

        let fireworks = [];
        function createFirework() {
            fireworks.push({
                x: Math.random() * window.innerWidth,
                y: window.innerHeight,
                size: Math.random() * 3 + 2,
                speed: Math.random() * 3 + 2,
                color: `hsl(${Math.random() * 360}, 100%, 60%)`
            });
        }

        function animateFireworks() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            fireworks.forEach((fw, index) => {
                ctx.beginPath();
                ctx.arc(fw.x, fw.y, fw.size, 0, Math.PI * 2);
                ctx.fillStyle = fw.color;
                ctx.fill();
                fw.y -= fw.speed;
                if (fw.y < 0) fireworks.splice(index, 1);
            });

            requestAnimationFrame(animateFireworks);
        }

        for (let i = 0; i < 20; i++) {
            setTimeout(createFirework, i * 200);
        }
        animateFireworks();

        // Remove canvas after 5 seconds
        setTimeout(() => {
            document.body.removeChild(canvas);
        }, 5000);
    }

    // Load first question
    loadNextQuestion();
});
