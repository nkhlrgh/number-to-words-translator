var userInput = document.querySelector("#input");

var buttonClick = document.querySelector("#btn");

var translatedOutput = document.querySelector("#output");

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=testing";

userInput.addEventListener("onclick", clickHandler);

buttonClick.addEventListener("click", clickHandler);

function errorHandler(error) {
    console.log("Error occurred: ", error);
    alert("Oops! Something is not right. Please try again after sometime");
}

function clickHandler() {
    fetch(url)
    .then(response => response.json())
    .then(json => {
        var finalOutput = json.contents.translated;
        translatedOutput.innerHTML = finalOutput;
    })
    .catch(errorHandler)
}