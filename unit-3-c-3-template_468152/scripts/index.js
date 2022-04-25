// Store the wallet amount to your local storage with key "amount"
let amount=JSON.parse(localStorage.getItem("amount"))||0;
let am= document.querySelector('#amount');
let add_to_wal=document.querySelector('#add_to_wallet');
let wallet=document.querySelector('#wallet')
wallet.innerText=amount
add_to_wal.addEventListener('click',()=>{
    (amount)+=Number(am.value)
    localStorage.setItem("amount",JSON.stringify(amount))
    am.value=null;
    wallet.innerText=amount
})