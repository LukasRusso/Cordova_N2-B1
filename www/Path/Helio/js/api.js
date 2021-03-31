function createCard(anime, quote){
    var card = document.createElement("div");
    card.className = "card";

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var cardAnime = document.createElement("h1");
    cardAnime.className = "card-anime";   
    cardAnime.innerHTML = anime;

    var cardQuote = document.createElement("div");
    cardQuote.className = "card-quote";
    cardQuote.align = "justify"
    cardQuote.innerHTML = quote       

    cardBody.appendChild(cardAnime);
    cardBody.appendChild(cardQuote);   
    card.appendChild(cardBody); 

    return card;
}

function getCardList(){
    return document.getElementById("cardList");
}

function setData(value) {
    var cardList = getCardList();
    cardList.innerHTML = ""; 
    for (let i = 0; i < 10; i++) {
        cardList.appendChild(createCard(value[i].anime, (value[i].character.toUpperCase() + ' - ' + value[i].quote)))               
    }         
}

searchJob = (value) => {
    var htmlRoute
    const BASE_API_URL = "https://animechan.vercel.app/api/quotes/anime?title="
    value.length < 1 ? htmlRoute = 'https://animechan.vercel.app/api/quotes' : (htmlRoute = BASE_API_URL + value)     
    
    $.ajax({ url: htmlRoute, method: "GET" }).done(function (response) {
        setData(response);         
      });
}