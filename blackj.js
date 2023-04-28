
// /*----- constants -----*/

const player = 0;
const dealer = 0;

// /*----- app's state (variables) -----*/

let dealerHand;
let playerHand;
let turn = 1;
let cardCount = 0;
let playedCards = [];
let deck;




// /*----- cached element references -----*/

const hitBtn = document.getElementById("hit");
const stayBtn = document.getElementById("stay");
const dealBtn = document.getElementById("deal");
let hiddenCardImg = document.getElementById("hidden");
let dealerCardsDiv = document.querySelector(".dealer-cards");
let playerCardsDiv = document.querySelector(".player-cards");
let playerSum = document.getElementById("player-sum")
let dealerCardSum = document.getElementById("dealer-sum");
let gameResult = document.getElementById("results");


// /*----- event listeners -----*/
hitBtn.addEventListener('click', handleClickHit)
stayBtn.addEventListener('click', handleClickStay)
dealBtn.addEventListener('click', handleClickDeal)



// /*----- functions -----*/


function init () {
    buildDeck();
    shuffleDeck();
    dealerCardsDiv.innerHTML = ''
    playerCardsDiv.innerHTML = ''
    playerSum.textContent = "Player"
    dealerCardSum.textContent = "Dealer"
    gameResult.textContent = ''
    dealerHand = deal(2);
    playerHand = deal(2);
    renderHand();
    winLogic();
    hitBtn.disabled = false;
    stayBtn.disabled = false;
    turn = 1;
}
    

function renderHand() {
    playerHand.forEach(card => {
        let playerNewCard = document.createElement('div')
        playerNewCard.classList.add('card', `${card}`, 'large')
        playerCardsDiv.append(playerNewCard)
    })
    dealerHand.forEach((card, idx) => {
        let dealerNewCard = document.createElement('div')
        dealerNewCard.classList.add('card', `${card}`, 'large')
        if(idx === 0)  dealerNewCard.classList.add('back-blue')
        dealerCardsDiv.append(dealerNewCard)
    })
}

function addToHand() {
    if (turn === 1) {
        let playerNewCard = document.createElement('div')
        playerNewCard.classList.add('card', `${playerHand[playerHand.length - 1]}`, 'large')
        playerCardsDiv.appendChild(playerNewCard)
    } else if (turn === -1) {
        let dealerNewCard = document.createElement('div')
        dealerNewCard.classList.add('card', `${dealerHand[dealerHand.length - 1]}`, 'large')
        dealerCardsDiv.appendChild(dealerNewCard)
    }
}
   
   
function handleClickHit(evt) {
   playerTurn()
        }
        
function handleClickStay(evt) {
     turn *= -1;
        dealerTurn()
        }

function handleClickDeal (evt) {
        init()
        }
    

                        
                  
                    
 function buildDeck() {
    let values = ["02", "03", "04", "05", "06", "07", "08", "09", "10", "J", "Q", "K", "A"];
    let suit = ["c", "d", "h", "s"];
         deck = [];
         for(let i = 0; i < suit.length; i++) {
         for(let j = 0; j < values.length; j++) {
            deck.push(suit[i] + values[j]);
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


function playerTurn() {
    drawCard(playerHand)

    console.log(playerHand);
    winLogic()
    playerSum.textContent = "Player: " + cardValue(playerHand)
}

function dealerTurn() {
    while (cardValue(dealerHand) < 17 && cardValue(playerHand) <= 21) {
        drawCard(dealerHand)
        cardValue(dealerHand)
    } 
    winLogic()
    console.log(dealerHand);
    dealerCardSum.textContent = "Dealer: " + cardValue(dealerHand)
    let allDealerCards = dealerCardsDiv.querySelectorAll('*')
allDealerCards.forEach(function (dealerCards) {
    dealerCards.classList.remove('back-blue')
})
}

function drawCard(array) {
    let randomCard = deck[0]
    if (!playedCards.includes(randomCard)) {
        playedCards.push(randomCard)
        array.push(randomCard)
        deck = deck.filter(function (usedCard) {
            return usedCard !== randomCard
        })
        addToHand()
        cardCount++
    }
}




function cardValue(array) {
    let cardValue = 0
    array.forEach(function (card) {
        let arr = card.split('')
        console.log(arr)
        let cardIdx = arr[arr.length - 1]
        if (cardIdx === 'J' || cardIdx === 'Q' || cardIdx === 'K' || cardIdx === '0') {
            cardValue += 10
        } else if (cardIdx === 'A') {
            cardValue += 11
        } else {
            cardValue += parseInt(cardIdx, 10)
        }
    })
    let aceArray = []
    array.forEach(function (name) {
        name = name.split('')
        if (name.includes('A')) {
            aceArray.push(name.filter(function (char) {
                return char === 'A'
            }))
        }

    })
    let aceCount = aceArray.length
    if (aceCount && cardValue > 21) {
        while (cardValue > 21 && aceCount) {
            cardValue -= 10
            aceCount--
        }
    }
    if (cardValue > 21 && turn === 1) {
        hitBtn.disabled = true;
        stayBtn.disabled = true;
    }
    return cardValue
}




function winLogic() {
    const playerTotal = cardValue(playerHand);
    const dealerTotal = cardValue(dealerHand);
    console.log(turn)
    if(turn === 1) {
      if (playerTotal > 21) {
            gameResult.textContent = 'Player Bust. Dealer Wins!'
        } 
        if (playerTotal === 21) {
            gameResult.textContent = 'Player Black-Jack'
            hitBtn.disabled = true;
            stayBtn.disabled = true;
        }
    }
    else {
        if (dealerTotal === playerTotal && dealerTotal <= 21) {
            gameResult.textContent = 'Push'
            hitBtn.disabled = true;
            stayBtn.disabled = true;
        }
        if (dealerTotal === 21) {
            gameResult.textContent = 'Dealer Wins'
            hitBtn.disabled = true;
            stayBtn.disabled = true;
        }
        if (playerTotal > dealerTotal && dealerTotal >= 17) {
            gameResult.textContent = 'You Win!'
            hitBtn.disabled = true;
            stayBtn.disabled = true;
            
        }
        if (playerTotal < dealerTotal && dealerTotal <= 21) {
            gameResult.textContent = 'Dealer Wins'
            hitBtn.disabled = true;
            stayBtn.disabled = true;
            
        }
        if (playerTotal < dealerTotal && dealerTotal > 21) {
            gameResult.textContent = 'Dealer Bust You Win!'
            hitBtn.disabled = true;
            stayBtn.disabled = true;

    }
}

}




    
         
init();
