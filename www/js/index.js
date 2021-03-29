function getCorpo() {
  return document.getElementById("Corpo");
}

function getList() {
  return document.getElementById("list");
}

function News() {
  var list = getList();
  list.innerHTML = "";
  var corpo = getCorpo();
  corpo.innerHTML = "";

  $.ajax("./Path/Russo/news.html").done(function (data) {
    $("#Corpo").html(data);
  });

  var logo = document.getElementById("logo");
  logo.setAttribute("src", "./img/NYT_logo.png");

  var routes = ["Articles", "Business", "Food", "Health", "Home"];

  routes.forEach((element) => {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.setAttribute("onclick", "get" + element + "()");
    a.innerHTML = element;
    a.href = "#";

    li.appendChild(a);
    list.appendChild(li);
  });
}

function Music() {
  var list = getList();
  list.innerHTML = "";
  var corpo = getCorpo();
  corpo.innerHTML = "";

  const search = document.querySelector("#search");
  const searchButton = document.querySelector("#search-button");

  var logo = document.getElementById("logo");
  logo.setAttribute("src", "./img/music.png");

  $.ajax("./Path/Music/music.html").done(function (data) {
    $("#Corpo").html(data);
  });

  searchButton.addEventListener("click", function () {
    searchData(search.value);
  });
}

function Games() {
  var list = getList();
  list.innerHTML = "";
  var corpo = getCorpo();  
  corpo.innerHTML = "Games";

  const search = document.querySelector("#search");
  const searchButton = document.querySelector("#search-button");

  $.ajax("./Path/Helio/index.html").done(function (data) {
    $("#Corpo").html(data)
  });

  var logo = document.getElementById("logo");
  logo.setAttribute("src", "./img/kakashi.png");

  searchButton.addEventListener("click", function () {
    searchJob(search.value);
  });
}

function Books() {
  var list = getList();
  list.innerHTML = "";
  var corpo = getCorpo();
  corpo.innerHTML = "";

  corpo.innerHTML = "Books";

  $.ajax("./Path/Alessandra/index.html").done(function (data) {
    $("#Corpo").html(data);
  });

  var logo = document.getElementById("logo");
  logo.setAttribute("src", "./img/logoBook.png");

  var routes = ["All Books", "Where Buy", "New One"];
  routes.forEach((element) => {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.setAttribute("onclick", "get" + element.replace(' ','_') + "()");
    a.innerHTML = element;
    a.href = "#";

    li.appendChild(a);
    list.appendChild(li);
  });

}
