function setData(value) {
    let anime = ''    
    let quotes = '' 
    for (let i = 0; i < 10; i++) {
        anime = value[i].anime;    
        document.querySelector(".quote" + i).innerHTML = value[i].character.toUpperCase() + ' - ' + value[i].quote;          
    }   
    document.querySelector(".anime").innerHTML = anime;      
}

searchJob = (value) => {
    var htmlRoute
    const BASE_API_URL = "https://animechan.vercel.app/api/quotes/anime?title="
    value.length < 1 ? htmlRoute = 'https://animechan.vercel.app/api/quotes' : (htmlRoute = BASE_API_URL + value)     

    console.log(htmlRoute)
    $.ajax({ url: htmlRoute, method: "GET" }).done(function (response) {
        setData(response);         
      });
}