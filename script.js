const symbols = ['🌸', '🐱', '🦄', '🌈', '🍦', '⭐', '🌸', '🐱', '🦄', '🌈', '🍦', '⭐'];
let board = document.getElementById('game-board');
let flippedCards = [];

// Kartları karıştır ve oluştur
function initGame() {
    symbols.sort(() => 0.5 - Math.random());
    board.innerHTML = '';
    symbols.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.symbol = symbol;
        card.dataset.index = index;
        card.innerText = "?";
        card.onclick = () => flipCard(card);
        board.appendChild(card);
    });
}

function flipCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
        card.innerText = card.dataset.symbol;
        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.symbol === card2.dataset.symbol) {
        flippedCards = [];
    } else {
        setTimeout(() => {
            card1.innerText = "?";
            card2.innerText = "?";
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

function resetGame() {
    initGame();
}

initGame();