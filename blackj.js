
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

let aceCount = [];

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
// dealBtn.addEventListener('click', handleClickDeal)





// /*----- functions -----*/


function init () {
    buildDeck();
    shuffleDeck();
    renderGame();
    // dealerHand = cardValue(deal(2));
    dealerHand = deal(2);
    playerHand = deal(2);
    console.log(dealerHand, playerHand)
}


function renderGame() {
// let cardImg = document.createElement("img");
// let card = deal(1);
// cardImg.src = "./imges/" + card + ".svg";
// dealerHand += cardValue(dealerHand)
// document.querySelectorAll(".player-cards").append(cardImg);
}


    // function handleClickHit(evt) {
    //     let val = playerHand[playerHand.length-1]
    //     console.log(val)
    //     if (val < 21) {
    //         playerHand.unshift(...deal(1));
    //     }
    
    //         // Exit the loop if the total value of the playerHand is greater than or equal to 21
    //         else  {
    //            return  console.log(`You Bust`)
    //         }
    //     playerHand = cardValue(playerHand)
    //     console.log(playerHand);
    
    //     // Render the game
    //     renderGame();
    //     }

   
   
   
   
   
        function handleClickHit(evt) {
            let val = cardValue(playerHand)
            if (val < 21) {
                playerHand.unshift(...deal(1));
                console.log(playerHand);
                console.log(val)
            } else  {
                return  console.log(`You Bust`)
            }
            renderGame();
       }
    
        // Exit the loop if the total value of the playerHand is greater than or equal to 21
    
        function handleClickStay(evt) {
            // Add cards to dealerHand until its total value is 17 or greater
            let valDealer = dealerHand[dealerHand.length - 1]
            let valPlayer = playerHand[playerHand.length - 1]
            if (valDealer < 17 && valPlayer <= 21) {
                dealerHand.unshift(...deal(1));
            } else {
                console.log('Dealer')
            }
                // Exit the loop if the total value of the dealerHand is greater than or equal to 17
        
        
        
            // Calculate the total value of the dealerHand
            dealerHand = cardValue(dealerHand);
        
            // Log the dealerHand to the console
            console.log(dealerHand);
          
            // Render the game
            renderGame();
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
    let total = 0;
    let aceCount = 0;
    for(let i =0; i < hand.length; i++) {
       let value = 0;
       const card = hand[i].split("-")[1]
       if(card === "A") {
            value = 11;
            aceCount++
       }else if(card === "J" || card === "Q" || card === "K") {
            value = 10;
       } else {
            value = Number(card)
       }
       total+= value;
     }
     while(total > 21 && aceCount > 0) {
        total-= 10;
        aceCount--
     } 
    return total;
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