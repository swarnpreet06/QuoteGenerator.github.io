// Get Quotes from api
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("authors");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
//show loading
function loading(){
    loader.hidden=false;
    quoteContainer.hidden=true;
}
//hide loading
function complete(){
    quoteContainer.hidden=false;
    loader.hidden=true;
}

let apiQuotes=[];
//show new Quotes
function newQuotes(){
    loading();
    const quote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
    //To check if the author field is blank and replace it with unknown
    if(!quote.author){
        authorText.textContent='Unknown';
    }
    else{
        authorText.textContent = quote.author;
    }
     
    //Check quote length to determine styling
    if(quote.text.length>120){
        quoteText.classList.add("long-quote");
    }
    else{
        quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = quote.text;
    complete();
}
async function getQuotes(){
    loading();
    const api = "https://type.fit/api/quotes";
    try{
        const response=await fetch(api);
        apiQuotes=await response.json();
        newQuotes();
    }catch(error){
        alert(error)
    }
}
//Event listeners
newQuoteBtn.addEventListener('click',newQuotes)
//on loads
getQuotes();
