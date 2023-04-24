
// /*----- constants -----*/



// -create suits, ranks, and deck
//- probably use arrays

// /*----- app's state (variables) -----*/
// const dealerSum = 0;
// const playerSum = 0;

// const dealerAceCount = 0; 
// const playerAceCount = 0;

// const hidden;
var deck;

const canHit = true; //allows player to hit while sum is < 21;

// -think about state variables
// ->turn, player, dealer, played cards, count of cards

// /*----- cached element references -----*/
document.querySelectorAll("player-cards")
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


function buildDeck() {
    let values = ["r02", "r03", "r04", "r05", "r06", "r07", "r08", "r09", "r10", "J", "Q", "K", "A"];
    let suit = ["clubs", "diamonds", "hearts", "spades"];
    deck = [];
    for(let i = 0; i < suit.length; i++) {
        for(let j = 0; j < values.length; j++) {
            deck.push(suit[i] + "-" + values[j]);
        }
    }
    // return deck;
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
    


// console.log (deck);
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