function createCard(image, title, text, link){
    var card = document.createElement("div");
    card.className = "card";

    var cardImg = document.createElement("img");
    cardImg.className = "card-img-top";
    cardImg.src = image;

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = title;
    cardTitle.style = "font-weight: bold";

    var cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerHTML = text;

    var cardLink = document.createElement("a");
    cardLink.className = "btn btn-primary";
    cardLink.target = "_blank"
    cardLink.innerHTML = "Go to the WebSite";
    cardLink.href = link;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardLink);

    card.appendChild(cardImg);
    card.appendChild(cardBody);

    return card;
}

function getCardList(){
    return document.getElementById("cardList");
}

function getArticles(){
    const apiKey = "RxqU7wHepyxF3ADjIQqAmkVijsp7EJuu";

    var cardList = getCardList();
    cardList.innerHTML = "";

    var htmlRoute = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    htmlRoute += "?sort=newest";
    htmlRoute += "&api-key=" + apiKey;


    $.ajax({url: htmlRoute, method: "GET"})
        .done(function(response) {            
            var data = response;

            if(response.status == "OK"){
                data.response.docs.forEach(element => {                    
                    cardList.appendChild(
                        createCard(
                            "https://static01.nyt.com/" + element.multimedia[0].url,
                            element.abstract,
                            element.lead_paragraph,
                            element.web_url
                        )
                    )
                });
            }
        })       
}

function getBusiness(){
    const apiKey = "RxqU7wHepyxF3ADjIQqAmkVijsp7EJuu";

    var cardList = getCardList();
    cardList.innerHTML = "";

    var htmlRoute = "https://api.nytimes.com/svc/topstories/v2/business.json"; 
    htmlRoute += "?api-key=" + apiKey;


    $.ajax({url: htmlRoute, method: "GET"})
        .done(function(response) {            
            var data = response;

            if(response.status == "OK"){
                data.results.forEach(element => {                    
                    cardList.appendChild(
                        createCard(
                            element.multimedia[0].url,
                            element.title,
                            element.abstract,
                            element.web_url
                        )
                    )
                });
            }
        })       
}

function getFood(){
    const apiKey = "RxqU7wHepyxF3ADjIQqAmkVijsp7EJuu";

    var cardList = getCardList();
    cardList.innerHTML = "";

    var htmlRoute = "https://api.nytimes.com/svc/topstories/v2/food.json"; 
    htmlRoute += "?api-key=" + apiKey;


    $.ajax({url: htmlRoute, method: "GET"})
        .done(function(response) {            
            var data = response;

            if(response.status == "OK"){
                data.results.forEach(element => {                    
                    cardList.appendChild(
                        createCard(
                            element.multimedia[0].url,
                            element.title,
                            element.abstract,
                            element.web_url
                        )
                    )
                });
            }
        })      
}

function getHealth(){
    const apiKey = "RxqU7wHepyxF3ADjIQqAmkVijsp7EJuu";

    var cardList = getCardList();
    cardList.innerHTML = "";

    var htmlRoute = "https://api.nytimes.com/svc/topstories/v2/health.json"; 
    htmlRoute += "?api-key=" + apiKey;


    $.ajax({url: htmlRoute, method: "GET"})
        .done(function(response) {            
            var data = response;

            if(response.status == "OK"){
                data.results.forEach(element => {                    
                    cardList.appendChild(
                        createCard(
                            element.multimedia[0].url,
                            element.title,
                            element.abstract,
                            element.web_url
                        )
                    )
                });
            }
        })      
}

function getHome(){
    const apiKey = "RxqU7wHepyxF3ADjIQqAmkVijsp7EJuu";

    var cardList = getCardList();
    cardList.innerHTML = "";

    var htmlRoute = "https://api.nytimes.com/svc/topstories/v2/home.json"; 
    htmlRoute += "?api-key=" + apiKey;


    $.ajax({url: htmlRoute, method: "GET"})
        .done(function(response) {            
            var data = response;

            if(response.status == "OK"){
                data.results.forEach(element => {                    
                    cardList.appendChild(
                        createCard(
                            element.multimedia[0].url,
                            element.title,
                            element.abstract,
                            element.web_url
                        )
                    )
                });
            }
        })         
}