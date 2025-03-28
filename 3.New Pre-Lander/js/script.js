let currentQuestion = 0;
const questions = [
    { text: "How often do you shop at Tesco?", options: ["Daily", "Weekly", "Rarely"] },
    { text: "What’s your favorite Tesco product?", options: ["Groceries", "Clothing", "Electronics"] },
    { text: "How satisfied are you with Tesco?", options: ["Very", "Neutral", "Not Happy"] },
    { text: "Would you recommend Tesco to friends?", options: ["Yes", "Maybe", "No"] }
];

function startQuiz() {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    const container = document.getElementById("question-container");
    container.innerHTML = `<h3>${questions[currentQuestion].text}</h3>`;
    questions[currentQuestion].options.forEach(option => {
        container.innerHTML += `<button onclick="nextQuestion()">${option}</button>`;
    });
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        document.getElementById("quiz").classList.add("hidden");
        document.getElementById("game").classList.remove("hidden");
    }
}

function checkWin(element) {
    element.style.background = "url('images/winning-bag.png') no-repeat center/cover";
    setTimeout(() => {
        document.getElementById("game").classList.add("hidden");
        showPrize(); // Call the function to start confetti
    }, 1000);    
}
// Confetti Animation
const confettiCanvas = document.getElementById("confettiCanvas");
const ctx = confettiCanvas.getContext("2d");

let confetti = [];

function initConfetti() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height - confettiCanvas.height,
            size: Math.random() * 6 + 2,
            speed: Math.random() * 3 + 1,
            color: `hsl(${Math.random() * 360}, 100%, 70%)`
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confetti.forEach((c) => {
        ctx.fillStyle = c.color;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
        ctx.fill();
        c.y += c.speed;

        if (c.y > confettiCanvas.height) {
            c.y = -c.size;
            c.x = Math.random() * confettiCanvas.width;
        }
    });

    requestAnimationFrame(drawConfetti);
}

// Show prize section & start confetti
function showPrize() {
    document.getElementById("prize").classList.remove("hidden");
    
    // Start confetti animation
    initConfetti();
    drawConfetti();

    // Stop confetti after 5 seconds
    setTimeout(() => {
        confetti = [];
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }, 5000);
}
