// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;
let wallet=document.querySelector('#wallet')
wallet.innerText=JSON.parse(localStorage.getItem('amount'))
let m=document.querySelector('#search')
async function getmovies(){
    let url=`http://www.omdbapi.com/?apikey=21b260f7&s=${m.value}`
    let res= await fetch(url)
    let data= await res.json()
    console.log(data)
    return data
} 
async function main(){
    let data =await getmovies()
    if(!data.Response) return false
    display(data)
    console.log('data:', data)
}
function display({Search}){
    let movies=document.querySelector('#movies')
    movies.innerHTML=null
    Search.map((el)=>{
        let div=document.createElement('div')
        let h=document.createElement('h3')
        h.innerText=el.Title
        let img=document.createElement('img')
        img.src=el.Poster
        let btn=document.createElement('button')
        btn.classList.add('book_now')
        btn.textContent='Book Now'
        btn.addEventListener("click",booknowHandler(el))
        div.append(img,h,btn)
        movies.append(div)
    })

}


let movie=JSON.parse(localStorage.getItem("movie"))||{};
async function debounce(func,delay){
    if(id){
        clearTimeout(id)

    }
    id=setTimeout(()=>{
        func()
    },delay)
}
function booknowHandler(el){
    return ()=>{
        console.log(el)
        movie=(el)
        localStorage.setItem("movie",JSON.stringify(movie))
        window.location.href='./checkout.html'
    }
}