
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
let turn = 1;

let deck;

let hidden;




// /*----- cached element references -----*/

// -hit, stand, reset buttons
//allows player to hit while sum is < 21;
const hitBtn = document.getElementById("hit");
const stayBtn = document.getElementById("stay");
const dealBtn = document.getElementById("deal");
let hiddenCardImg = document.getElementById("hidden")
let dealerCardsImg = document.querySelector(".dealer-cards")
let playerCardsImg = document.querySelector(".player-cards")
// -containers for player and dealer cards
// -win message
// -dealer and player score



// /*----- event listeners -----*/
hitBtn.addEventListener('click', handleClickHit)
stayBtn.addEventListener('click', handleClickStay)
dealBtn.addEventListener('click', handleClickDeal)





// /*----- functions -----*/


function init () {
    buildDeck();
    shuffleDeck();
    renderGame();
    dealerHand = deal(2);
    playerHand = deal(2);
    // console.log(dealerHand, playerHand)
    console.log(dealerHand, playerHand)
    
}


function renderGame() {
    // let cardImg = document.createElement("img");
// let card = deal(1);
// cardImg.src = "./imges/" + card + ".svg";
// dealerHand += cardValue(dealerHand)
// document.querySelectorAll(".player-cards").append(cardImg);
}


   
   
function handleClickHit(evt) {
    playerHand.unshift(...deal(1));
        let val = cardValue(playerHand)
            if (val <= 21) {
            console.log(playerHand);
            console.log(val)
        } else  {
                    console.log(playerHand);
                hitBtn.disabled = true;
                }
            renderGame();
            winLogic()
        }
        
        // Exit the loop if the total value of the playerHand is greater than or equal to 21
        
        function handleClickStay(evt) {
            turn = -1;
            let valDealer = cardValue(dealerHand)
            let valPlayer = cardValue(playerHand)
            while (valDealer < 17 && valPlayer <= 21) {
                dealerHand.unshift(...deal(1));
                valDealer = cardValue(dealerHand)
                
                
                console.log(dealerHand);
                console.log(valDealer)
            } 
            hitBtn.disabled = true;
            stayBtn.disabled = true;
            // console.log(`Dealer Bust`)
            renderGame();
            winLogic()
        }

        function handleClickDeal (evt) {
            hitBtn.disabled = false;
            stayBtn.disabled = false;
            init();
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
    //  console.log(total)
    return total;
}



function winLogic() {
    const playerTotal = cardValue(playerHand);
    const dealerTotal = cardValue(dealerHand);
    console.log(turn)
    if(turn === 1) {
        if (playerTotal > 21) {
            console.log("Player Bust! Dealer Wins")
        }
    }
     else {
    if (dealerTotal === playerTotal && dealerTotal <= 21) {
        console.log("Push")
    }
    if (playerTotal === 21) {
        console.log("You Winsss")
    }
    if (dealerTotal === 21) {
        console.log("Dealer Win")
    }
    if (playerTotal > dealerTotal && dealerTotal >= 17) {
        console.log("You Winsss")
    }
    if (playerTotal < dealerTotal && dealerTotal <= 21) {
        console.log("Dealer Wins")
    }
    if (playerTotal < dealerTotal && dealerTotal > 21) {
        console.log("Dealer Bust! You Winsss")
    }
}
}




    
         
            
            



init();

