document.addEventListener('DOMContentLoaded', () => {
    const cards = [
        {
            name: "bunny",
            image: "images/bunny.png"
        },
        {
            name: "bunny",
            image: "images/bunny.png"
        },
        {
            name: "dog",
            image: "images/dog.png"
        },
        {
            name: "dog",
            image: "images/dog.png"
        },
        {
            name: "pikachu",
            image: "images/pikachu.png"
        },
        {
            name: "pikachu",
            image: "images/pikachu.png"
        },
        {
            name: "lion",
            image: "images/lion.png"
        },
        {
            name: "lion",
            image: "images/lion.png"
        },
        {
            name: "bulbasaur",
            image: "images/bulbasaur.png"
        },
        {
            name: "bulbasaur",
            image: "images/bulbasaur.png"
        },
        {
            name: "squirrel",
            image: "images/squirrel.png"
        },
        {
            name: "squirrel",
            image: "images/squirrel.png"
        }
    ]

    cards.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const score = document.querySelector('#score');
    selectedCards = [];
    selectedCardIds = [];
    cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cards.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/card.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // check cards
    function checkCards() {
        var cards = document.querySelectorAll('img');
        const selectedCardOne = selectedCardIds[0];
        const selectedCardTwo = selectedCardIds[1];

        if(selectedCards[0] === selectedCards[1]) {
            alert("Cool!");
            cards[selectedCardOne].setAttribute('src', 'images/blank.png');
            cards[selectedCardTwo].setAttribute('src', 'images/blank.png');
            cardsWon.push(selectedCards);
        } else {
            cards[selectedCardOne].setAttribute('src', 'images/card.png');
            cards[selectedCardTwo].setAttribute('src', 'images/card.png');
            alert('Oops! Try again.');
        }
        selectedCards = [];
        selectedCardIds = [];
        score.textContent = cardsWon.length;
        if(cardsWon.length === cards.length / 2) {
            score.textContent = 'Congratulations!'
        }
    }

    // flip cards
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        selectedCards.push(cards[cardId].name);
        selectedCardIds.push(cardId);
        this.setAttribute('src', cards[cardId].image);
        if (selectedCards.length === 2) {
            setTimeout(checkCards, 500);
        }
    }

    createBoard();
});