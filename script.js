document.getElementById("yesButton").onclick = function() {

    showConfetti();

    hideButtons();

    document.getElementById("finalMessage").textContent = "You made your choice, no take backs.";
    document.getElementById("finalMessage").style.display = "block";
};

document.getElementById("noButton").onclick = function() {
    document.body.innerHTML = "<h1 style='color:red; text-align:center;'>Oops! The website has crashed! Invalid Error!!!!</h1>";
};

function showConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti';
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.backgroundColor = getRandomColor();
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDuration = Math.random() * 2 + 3 + 's';
        confettiPiece.style.animationDelay = Math.random() * 5 + 's';
        confettiContainer.appendChild(confettiPiece);
    }
}

function hideButtons() {
    document.getElementById("buttonContainer").style.display = "none";
}

function getRandomColor() {
    const colors = ['#ffcc00', '#ff5733', '#33ff57', '#3357ff', '#ff33a1'];
    return colors[Math.floor(Math.random() * colors.length)];
}
