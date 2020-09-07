const quote=document.getElementById("quote");
const quoteContainer=document.getElementById("quote-container");
const author=document.getElementById("author");
const whatsapp=document.getElementById("whatsapp");
const facebook=document.getElementById("facebook");
const instagram=document.getElementById("instagram");
const next=document.getElementById("next")
const loader=document.getElementById("loader");

function loading(){
  loader.hidden=false;
  quoteContainer.hidden=true;
}
function complete(){
  loader.hidden=true;
  quoteContainer.hidden=false;
}
let quoteDetails=[];
function getQuote(){

  loading();
  fetch('https://type.fit/api/quotes')
  .then(function(res){
    return res.json()
  })
  .then(function(data){
    quoteDetails=data[Math.floor(Math.random() * data.length)];
    quote.innerHTML= '"' + quoteDetails.text + '"' ;
    if(quoteDetails.author === null)
    author.innerHTML='-'+ "Unknown";
    else
    author.innerHTML='-'+ quoteDetails.author;
 complete();
  })
  
}
 function whatsappmsg(){
  window.open(`https://web.whatsapp.com//send?text=${quote}`);
 
 }
function instagrammsg(){
window.open(`https://www.instagram.com`);
}
function facebookmsg(){
  window.open(`https://facebook.com`);
}
next.addEventListener('click',getQuote);
instagram.addEventListener('click',instagrammsg);
facebook.addEventListener('click',facebookmsg);
whatsapp.addEventListener('click',whatsappmsg);

getQuote();

