
let cards=[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message=""
let cardsEl=document.querySelector("#cards-el")
let sumEl=document.querySelector("#sum")
let messageEl=document.getElementById("message-el")

let Player={
    name:"Triv",
    chips:145
}
let playEl=document.getElementById("player-el")
playEl.textContent=Player.name+" $"+Player.chips

function getrandomcard()
{
   let b= Math.floor(Math.random()*13)+1
    if(b>10)
    {
        return 10
    }
    else if(b===1)
    {
        return 11
    }
    else{
        return b
    }
}
// 1. Declare a variable called message and assign its value to an empty string
function Start()
{
    isAlive=true
    let firstCard = getrandomcard()
    let secondCard = getrandomcard()
    cards=[firstCard,secondCard]
    sum = firstCard+secondCard
    render()
}
// 2. Reassign the message variable to the string we're logging out
function render() {
    cardsEl.textContent="Cards: "
    for(let k=0;k<cards.length;k++)
    {
        cardsEl.textContent+=cards[k]+" "
    }
    sumEl.textContent="Sum: "+sum
    if (sum <= 20) {
        message="Do you want to draw a new card?"//console.log("Do you want to draw a new card? 🙂")
    } else if (sum === 21) {
        message="Wohoo! You've got Blackjack!"//console.log("Wohoo! You've got Blackjack! 🥳")
        hasBlackJack = true
    } else {
        message="You're out of the game!"//console.log("You're out of the game! 😭")
        isAlive = false
    }
    messageEl.textContent=message
    
    // 3. Log it out!
    //console.log(message)
}

function newCard()

{
    if(isAlive==true && hasBlackJack==false)
    {
        let newval=getrandomcard()
    cards.push(newval)
    sum+=newval
    render()

    }
    
    
}    




