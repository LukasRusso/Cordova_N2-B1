function setData(image, name, genre, year, bio) {
  const artistName = document.querySelector(".name");
  artistName.innerHTML = name;

  const img = document.querySelector(".image");
  img.src = image;

  const arttistGenre = document.querySelector(".genre");
  arttistGenre.innerHTML = genre;

  const arttistYear = document.querySelector(".year");
  arttistYear.innerHTML = year;

  const arttisBio = document.querySelector(".bio");
  arttisBio.innerHTML = bio;
}

function getCardList() {
  return document.getElementById("cardList");
}

searchData = (name) => {
  const BASE_API_URL = "https://www.theaudiodb.com/api/v1/json/1/search.php?s=";
  var htmlRoute = BASE_API_URL + name;

  $.ajax({ url: htmlRoute, method: "GET" }).done(function (response) {
    var data = response;
    console.log(response);
      
      data.artists.forEach((element) => {
        setData(
          element.strArtistThumb,
          element.strArtist,
          element.strGenre,
          element.intBornYear,
          element.strBiographyEN
        );
      });
  });
};
