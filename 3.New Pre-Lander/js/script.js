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
        document.getElementById("prize").classList.remove("hidden");
    }, 1000);
}
