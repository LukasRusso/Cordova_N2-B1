

function createCard(rank,title, description,buy,image)
{
    var card = document.createElement("div");
    card.className = "card";

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    //Posição do Rank Best Sellers
    var cardRank = document.createElement("p");
    cardRank.className = "card-rank";
    cardRank.innerHTML = rank;

    //Nome do livro
    var cardTitle = document.createElement("h2");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = title;
    cardTitle.style = "font-weight: bold";

    //Descrição
    var cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerHTML = description;
    
    //Onde Comprar
    var cardBuy = document.createElement("p");
    cardBuy.className = "card-rank";
    cardBuy.innerHTML = buy;

    var cardImg = document.createElement("img");
    cardImg.className = "card-img-top";
    cardImg.src = image;

    cardBody.appendChild(cardRank);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardBuy);
    
    card.appendChild(cardImg);
    card.appendChild(cardBody);

    return card;
}

function createListBuy (title,link)
{
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.setAttribute("onclick",link);
    a.innerHTML = title;
    a.href = link;
    a.target = "_blank";

    li.appendChild(a);
    
    return li
}

function getCardList()
{
    return document.getElementById("cardList");
}

//Recupera os 3 primeiros livros
function get3Books()
{ 
    var cardList = getCardList();
    cardList.innerHTML = "";

    $.ajax({url: "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=bGVCvDfP5bmC942U18tq5XYB2YbG0Qpo", method: "GET"})
    .done(function(response) 
    {            
        if(response.status == "OK")
        {
            for (let i=0 ; i<3 ;i++)
           { 
                cardList.appendChild(
                    createCard(
                        "",
                        response.results.books[i].rank,
                        response.results.books[i].description,
                        "",
                        response.results.books[i].book_image
                    )
                )
            };
        }
    })       
}

//recuperar todos os livros disponiveis
function getAll_Books()
{
    //Apaga a area de apresentação
    document.getElementById('apresentacao')? document.getElementById('apresentacao').remove():document.getElementById('apresentacao');

    var cardList = getCardList();
    cardList.innerHTML = "";

    $.ajax({url: "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=bGVCvDfP5bmC942U18tq5XYB2YbG0Qpo", method: "GET"})
    .done(function(response) 
    {            
        if(response.status == "OK")
        {
            for (let dado of response.results.books )
           { 
                cardList.appendChild(
                    createCard(
                        "",                        
                        dado.rank,
                        dado.description,
                        "",
                        dado.book_image
                    )
                )
            };
        }
    })       
}

//trazer apenas a informação de onde comprar os livros
function getWhere_Buy()
{
    //Apaga a area de apresentação
    document.getElementById('apresentacao')? document.getElementById('apresentacao').remove():document.getElementById('apresentacao');
    
    var cardList = getCardList();
    cardList.innerHTML = "";

    $.ajax({url: "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=bGVCvDfP5bmC942U18tq5XYB2YbG0Qpo", method: "GET"})
    .done(function(response) 
    {            
        if(response.status == "OK")
        {
            for (let i of response.results.books)
            { 
              //Criar uma  lista de lugares para comprar cada book
                cardList.appendChild(createListBuy(i.title,i.buy_links[0].url));
            }
        }
    })       
}

//Trazer novos livros a partir de  weeks_on_list == 1
function getNew_One()
{
    //Apaga a area de apresentação
    document.getElementById('apresentacao')? document.getElementById('apresentacao').remove():document.getElementById('apresentacao');

    var cardList = getCardList();
    cardList.innerHTML = "";

    $.ajax({url: "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=bGVCvDfP5bmC942U18tq5XYB2YbG0Qpo", method: "GET"})
    .done(function(response) 
    {            
        if(response.status == "OK")
        {
            for (let i=0 ; i<3 ;i++)
           {
               if(response.results.books[i].weeks_on_list == 1)
                {
                    cardList.appendChild(
                        createCard(
                            response.results.books[i].rank,
                            response.results.books[i].title,
                            response.results.books[i].description,
                            "",
                            response.results.books[i].book_image
                        )
                    )
                }
            };
        }
    })       
}