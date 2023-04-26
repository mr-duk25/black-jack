
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




// /*----- cached element references -----*/

// -hit, stand, reset buttons
//allows player to hit while sum is < 21;
const hitBtn = document.getElementById("hit");
const stayBtn = document.getElementById("stay");
const dealBtn = document.getElementById("deal");
// -containers for player and dealer cards
// -win message
// -dealer and player score



// /*----- event listeners -----*/
// -reset button
// -hit, stand buttons
hitBtn.addEventListener('click', handleClickHit)
stayBtn.addEventListener('click', handleClickStay)
// stayBtn.addEventListener('click', handleClick)
// dealBtn.addEventListener('click', handleClick)





// /*----- functions -----*/


function init () {
    buildDeck();
    shuffleDeck();
    dealerHand = cardValue(deal(2));
    playerHand = cardValue(deal(2));
    console.log(dealerHand, playerHand)
    renderGame();
}


    
    function handleClickHit(evt) {
        let val = playerHand[playerHand.length-1]
        console.log(val)
        if (val < 21) {
            playerHand.unshift(...deal(1));
        }
    
            // Exit the loop if the total value of the playerHand is greater than or equal to 21
            else  {
                console.log('its more than 21 we stopped adding cards')
            }
        playerHand = cardValue(playerHand)
        console.log(playerHand);
    
        // Render the game
        renderGame();
        }
    
   
   
   
   
  
    
    // function handleClickStay(evt) {
        //     // Add cards to dealerHand until its total value is 17 or greater
        //     while (cardValue(dealerHand) < 17) {
//         dealerHand.unshift(...deal(1));
        
//         // Exit the loop if the total value of the dealerHand is greater than or equal to 17
//         if (cardValue(dealerHand) >= 17) {
//             break;
//         }
//     }

//     // Calculate the total value of the dealerHand
//     dealerHand = cardValue(dealerHand);

//     // Log the dealerHand to the console
//     console.log(dealerHand);
  
//     // Render the game
//     renderGame();
// }




function handleClickStay(evt) {
    // Add cards to dealerHand until its total value is 17 or greater
    while (cardValue(dealerHand) < 17) {
        dealerHand.unshift(...deal(1));
        
        // Exit the loop if the total value of the dealerHand is greater than or equal to 17
        if (cardValue(dealerHand) >= 17) {
            break;
        }
    }

    // Calculate the total value of the dealerHand
    dealerHand = cardValue(dealerHand);

    // Log the dealerHand to the console
    console.log(dealerHand);
  
    // Render the game
    renderGame();
}

function renderGame() {
let cardImg = document.createElement("img")
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
        if(typeof hand[i] !== "number") {
            let value = hand[i].split("-");
            if (isNaN(value[1]) && value[1] === "A") {
                total += 11;
            } else if (isNaN(value[1])){
                total += 10;
            } else {
                total +=(parseInt(value[1]));
            }} 
        }
        if(typeof handTotal[handTotal.length -1] === "number") {
            handTotal[handTotal.length -1] = total;
        } else {
            handTotal.push(total);
        }
    return handTotal;
}

    
         
            
            



init();

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