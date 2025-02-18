/* 
    Deck of cards using methods 
    ** Disadvantage is need to keep hold of values **
    ** Keeping values global restrict us from creating more than one deck **
*/
function initializeDeck(){
    const deck = []
    const suits = ["Heart", "Club", "Spade", "Diamond"]
    const values = "2,3,4,5,6,7,8,9,10,A,J,Q,K"
    for(let value of values.split(",")){
        for(let suit of suits){
            deck.push({
                suit,
                value
            })
        }
    }
    return deck
}

function drawOneCard(deck, drawnCard){
    const card = deck.pop()
    drawnCard.push(card)
    return card
}

function drawMultiCard(deck,drawnCard, num){
    const cards = []
    for(let i = 0; i < num; i++){
        let card = drawOneCard(deck, drawnCard)
        cards.push(card)
    }
    return cards
}

function shuffleCard(deck){
    for(let i = deck.length-1; i >0; i--){
        let j = Math.floor(Math.random() * (i+1));
        [deck[i], deck[j]] = [deck[j], deck[i]]
    }
}


const deck1 = initializeDeck()
const drawnCard1 = []
shuffleCard(deck1)
console.log(deck1.length)
console.log(drawOneCard(deck1,drawnCard1))
console.log(deck1.length)
console.log(drawnCard1.length)
console.log(drawMultiCard(deck1,drawnCard1,5))
console.log(deck1.length)
console.log(drawnCard1.length)

/* 
    Deck of cards using methods 
    ** Disadvantage is can create only one deck **
*/

const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ["Heart", "Club", "Spade", "Diamond"],
    values: "2,3,4,5,6,7,8,9,10,A,J,Q,K",
    initializeDeck(){
        const {deck,suits,values} = this
        for(let value of values.split(",")){
            for(let suit of suits){
                deck.push({
                    suit,
                    value
                })
            }
        }
    },
    drawOneCard(){
        const {deck, drawnCards} = this
        const card = deck.pop()
        drawnCards.push(card)
        return card
    },
    drawMultiCard(num){
        const {deck, drawnCards} = this
        const cards = []
        for(let i = 0; i < num; i++){
            cards.push(this.drawOneCard())
        }
        return cards
    },
    shuffleCard(){
        const {deck} = this
        let j = 0
        for(let i = deck.length-1; i >0; i--){
            j = Math.floor(Math.random() * (i+1));
            [deck[i], deck[j]] = [deck[j], deck[i]]
        }
    }
}

myDeck.initializeDeck()
console.log(myDeck.deck.length)
console.log(myDeck.drawOneCard())
console.log(myDeck.drawMultiCard(4))
console.log(myDeck.deck.length)
console.log(myDeck.drawnCards.length)

/* 
    Deck of cards combining functions & methods 
    Here object with method is returned for each function call.
*/

const makeDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        suits: ["Heart", "Club", "Spade", "Diamond"],
        values: "2,3,4,5,6,7,8,9,10,A,J,Q,K",
        initializeDeck(){
            const {deck,suits,values} = this
            for(let value of values.split(",")){
                for(let suit of suits){
                    deck.push({
                        suit,
                        value
                    })
                }
            }
        },
        drawOneCard(){
            const {deck, drawnCards} = this
            const card = deck.pop()
            drawnCards.push(card)
            return card
        },
        drawMultiCard(num){
            const {deck, drawnCards} = this
            const cards = []
            for(let i = 0; i < num; i++){
                cards.push(this.drawOneCard())
            }
            return cards
        },
        shuffleCard(){
            const {deck} = this
            let j = 0
            for(let i = deck.length-1; i >0; i--){
                j = Math.floor(Math.random() * (i+1));
                [deck[i], deck[j]] = [deck[j], deck[i]]
            }
        }
    }
}

const deck2 = makeDeck()
deck2.initializeDeck()
console.log(deck2.deck.length)
console.log(deck2.drawOneCard())
console.log(deck2.drawMultiCard(4))
console.log(deck2.deck.length)
console.log(deck2.drawnCards.length)

const deck3 = makeDeck()
deck3.initializeDeck()
console.log(deck3.deck.length)
console.log(deck3.drawOneCard())
console.log(deck3.drawMultiCard(7))
console.log(deck3.deck.length)
console.log(deck3.drawnCards.length)