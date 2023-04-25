
// /*----- constants -----*/



// -create suits, ranks, and deck
//- probably use arrays

// /*----- app's state (variables) -----*/
let dealerSum = 0;
let playerSum = 0;

let dealerAceCount = 0; 
let playerAceCount = 0;

let deck;
let hidden;
let dealerCard2;
let playerCard1;
let playerCard2;

const canHit = true; //allows player to hit while sum is < 21;

// -think about state variables
// ->turn, player, dealer, played cards, count of cards

// /*----- cached element references -----*/

// -hit, stand, reset buttons
// -containers for player and dealer cards
// -win message
// -dealer and player score
// -balance, bet amount, etc

// /*----- event listeners -----*/

// -reset button
// -hit, stand buttons
// -different for different bets perhaps

// /*----- functions -----*/
buildDeck();
shuffleDeck();
// dealCards();

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

// function getValue() {
//     let card = deck.pop();
//     let value = card.split("-");
//     if(isNaN(value[1]) && value[1] === "A") {
//         return 11;
//     } else {
//         return 10;
//     }
//     return (parseInt(value[1]));
// }
function getValue() {
    let card = deck.pop();
    let value = card.split("-");
    if (isNaN(value[1]) && value[1] === "A") {
      return 11;
    } else if (isNaN(value[1])){
        return 10;
    } else {
        return parseInt(value[1])
    }
}
    
   



function dealerHand() {
    hidden = deck.pop();
    dealerCard2 = deck.pop();
    dealerHand = [];
    dealerHand.push(hidden, dealerCard2);
    return dealerHand;
}
function playerHand () {
    playerCard1 = deck.pop();
    playerCard2 = deck.pop();
    playerHand = [];
    playerHand.push(playerCard1, playerCard2);
    return playerHand;
}
console.log(getValue(playerHand));
// init() -> your initial state, think about:
// -Initializing new deck
// -clearing player and dealer cards
// -clearing messages of some sort
// -update card count
// -etc

// Dealer and player turn how would we handle it?

// Drawing cards?

// Adding card to hand?

// Calculating value of your hand?

// Checking win?