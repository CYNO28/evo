// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let seats=document.querySelector('#number_of_seats')
let user_name=document.querySelector('#user_name')
let btn=document.querySelector('#confirm')
let mov=document.querySelector('#movie')
let amount=JSON.parse(localStorage.getItem('amount'))
let movie=JSON.parse(localStorage.getItem('movie'))
let wallet=document.querySelector('#wallet')
wallet.innerText=amount
btn.addEventListener(`click`,()=>{
    if(user_name=='') alert('Enter your name')
    
    else{
        amount=Number(amount)
        let charge=100*Number(seats.value)
        if(charge>amount){
            alert('Insufficient Balance !')
        }else{
            amount-=charge
            wallet.innerText=amount
    localStorage.setItem('amount',amount)   
    alert('Booking Successful!')
   
}

    }
})


let div=document.createElement('div')
let title=document.createElement('h3')
title.innerText=movie.Title
let img=document.createElement('img')
img.src=movie.Poster
div.append(title,img)
mov.append(div)
