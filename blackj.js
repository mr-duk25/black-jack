
// /*----- constants -----*/

// const player = [playerHand];
// const dealer = [dealerHand];

// -create suits, ranks, and deck
//- probably use arrays

// /*----- app's state (variables) -----*/
// -think about state variables
// ->turn, player, dealer, played cards, count of cards


let dealerTotal = 0;
let playerTotal = 0;

let dealerAce = 0; 
let playerAce = 0;

let deck;

let hidden;


const canHit = true; //allows player to hit while sum is < 21;


// /*----- cached element references -----*/

// -hit, stand, reset buttons
const buttons = document.querySelectorAll(".button");
// -containers for player and dealer cards
// -win message
// -dealer and player score
// -balance, bet amount, etc
// /*----- event listeners -----*/

// -reset button
// -hit, stand buttons
// document.querySelectorAll("button").addEventListener('click', buttons);
// -different for different bets perhaps

// /*----- functions -----*/
buildDeck();
shuffleDeck();

function renderGame() {
    shuffleDeck;
    deal(2);
    
}

function buildDeck() {
    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let suit = ["clubs", "diamonds", "hearts", "spades"];
    deck = [];
    for(let i = 0; i < suit.length; i++) {
        for(let j = 0; j < values.length; j++) {
            deck.push(suit[i] + "-" + values[j]);
        }
    }
   
}
//Fisher-Yates algorithm
function shuffleDeck() {
    for(let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let value = deck[i];
        deck[i] = deck[j];
        deck[j] = value;
    }
    return deck;
}

console.log(deck);

function deal(numCards) {
    let shuffledDeck = shuffleDeck();
    let card = [];
    for (let i = 0; i < numCards; i++) {
        card.push(shuffledDeck.pop());
    }
    return card;
}



// // Calculating value of your hand?
// function getCardValue() 
//     let card = deck.pop();
//     let value = card.split("-");
//     if (isNaN(value[1]) && value[1] === "A") {
//       return 11;
//     } else if (isNaN(value[1])){
//         return 10;
//     } else {
//         return parseInt(value[1])
//     }




// Drawing cards?


// init() -> your initial state, think about:
// -Initializing new deck
// -clearing player and dealer cards
// -clearing messages of some sort
// -update card count
// -etc

// Dealer and player turn how would we handle it?


// Adding card to hand?

// Checking win?