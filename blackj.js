
// /*----- constants -----*/

const player = 0;
const dealer = 0;

// -create suits, ranks, and deck
//- probably use arrays

// /*----- app's state (variables) -----*/
// -think about state variables
// ->turn, player, dealer, played cards, count of cards


let dealerHand;
let playerHand;

let dealerAce = 0; 
let playerAce = 0;

let deck;

let hidden;


const canHit = true; //allows player to hit while sum is < 21;


// /*----- cached element references -----*/

// -hit, stand, reset buttons
const hitBtn = document.getElementById("hit");
const stayBtn = document.getElementById("stay");
const dealBtn = document.getElementById("deal");
// -containers for player and dealer cards
// -win message
// -dealer and player score



// /*----- event listeners -----*/
// -reset button
// -hit, stand buttons
hitBtn.addEventListener('click', handleClick)
stayBtn.addEventListener('click', handleClick)
dealBtn.addEventListener('click', handleClick)





// /*----- functions -----*/


function init () {
    buildDeck();
    shuffleDeck();
    renderGame();
}

function handleClick(evt) {
    // const click = button.indexOf(evt.target);
    console.log("click");
}


function renderGame() {
    dealerHand = cardValue(deal(2));
   playerHand = cardValue(deal(2));
   console.log(dealerHand, playerHand)
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



function deal(numCards) {
    let shuffledDeck = shuffleDeck();
    let card = [];
    for (let i = 0; i < numCards; i++) {
        card.push(shuffledDeck.pop());
    }
    return card;
}


function cardValue(hand) {
    let handTotal = [];
    handTotal.push(...hand)
    let total = 0;
    for(let i =0; i < hand.length; i++) {
        let value = hand[i].split("-");
        if (isNaN(value[1]) && value[1] === "A") {
            total += 11;
        } else if (isNaN(value[1])){
            total += 10;
        } else {
            total +=(parseInt(value[1]));
        }
    }
    handTotal.push(total);
    return handTotal;
}
        
            
            



init();

// // // Calculating value of your hand?
// function getCardValue(card) 
//     let card = deck.pop();
//      value = deal(1).split("-");
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