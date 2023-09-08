

let player = {
    name:"chandu",
    chips:200

}
let cards = []
let sum = 0

let hasBlackjack=false

let isalive = false

let message =""

let messsageEl= document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")

let cardsEl = document.getElementById("cards-el")

let playerel = document.getElementById("player-el")

playerel.textContent = player.name + ": $" + player.chips

function getRandomcard() {
    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber > 10) {
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else {
        return randomNumber
    }

}
function startgame(){
    isalive = true
    let firstcard = getRandomcard()
    let secondcard = getRandomcard()
    cards = [firstcard,secondcard]
    sum = firstcard+ secondcard
    rendergame()
}

function rendergame(){
    cardsEl.textContent="cards: " 

    for(i=0;i<cards.length;i++ ){
        cardsEl.textContent += cards[i]+" "
    }
 
    sumEl.textContent= "sum: " + sum
    if (sum <=20) {
        message="Do you want to draw a new card ?"
    }
     
    else if(sum===21) {
        message="You won the game"
        hasBlackjack = true
    
    }
    
    else {
        message="You are out of the game!"
        isalive=false
    }
    
    messsageEl.textContent= message
}

function newcard(){
    if(isalive===true && hasBlackjack=== false){
        let card =getRandomcard()
        
        sum += card
        cards.push(card)
        console.log(cards)
        rendergame()}

        
}