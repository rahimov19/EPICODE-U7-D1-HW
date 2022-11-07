const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0804dffc02mshffe59d44538faefp143e0bjsne323b0c03419",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", options)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    displayTitle(data, mainDiv);
    songsList(data, eminemList);
    // for (title of data.title) {
    //   let addDiv = document.createElement("div");
    //   let mainDiv = document.querySelector("#main");
    //   addDiv.innerText = data.title;
    //   mainDiv.appendChild(addDiv);
    // }
  })

  .catch((err) => console.error(err));

const options2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0804dffc02mshffe59d44538faefp143e0bjsne323b0c03419",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

fetch(
  "https://deezerdevs-deezer.p.rapidapi.com/search?q=system%20of%20a%20down",
  options2
)
  .then((response) => response.json())
  .then((data) => {
    displayTitle(data, mainDiv2);
    songsList(data, soadList);
  })

  .catch((err) => console.error(err));

const options3 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0804dffc02mshffe59d44538faefp143e0bjsne323b0c03419",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

fetch(
  "https://deezerdevs-deezer.p.rapidapi.com/search?q=limp%20bizkit",
  options3
)
  .then((response) => response.json())
  .then((data) => {
    displayTitle(data, mainDiv3);
    songsList(data, lbList);
  })

  .catch((err) => console.error(err));

const mainDiv = document.querySelector("#body");
const mainDiv2 = document.querySelector("#soad");
const mainDiv3 = document.querySelector("#limp");
const eminemList = document.querySelector("#eminemList");
const soadList = document.querySelector("#soadList");
const lbList = document.querySelector("#lbList");

function displayTitle(data, mainDiv) {
  for (i = 0; i < data.data.length; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card pl-3";
    cardDiv.style = "width: 13rem;";
    let img = document.createElement("img");
    img.src = data.data[i].album.cover_medium;
    img.className = "card-img-top";
    cardDiv.appendChild(img);
    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";
    cardDiv.appendChild(cardBodyDiv);
    let addH5 = document.createElement("h5");
    addH5.className = "card-title";
    addH5.innerText = data.data[i].artist.name + " " + data.data[i].title;
    cardBodyDiv.appendChild(addH5);
    let addP = document.createElement("p");
    addP.className = "card-text";
    addP.innerText = "Song ID: " + data.data[i].id;
    let addButton = document.createElement("a");
    addButton.className = "btn btn-primary";
    addButton.href = data.data[i].link;
    addButton.innerText = "Listen on Deezer";
    cardBodyDiv.appendChild(addP);
    cardBodyDiv.appendChild(addButton);
    // cardDiv.innerText = data.data[i].title;
    mainDiv.appendChild(cardDiv);
  }
  2000;
}

let songsList = function (data, eminemList) {
  for (i = 0; i < data.data.length; i++) {
    let createLi = document.createElement("li");
    createLi.innerText = data.data[i].title;
    eminemList.appendChild(createLi);
  }
};
