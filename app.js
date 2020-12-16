var userInput = document.querySelector("#input");

var buttonClick = document.querySelector("#btn");

var translatedOutput = document.querySelector("#output");

var url = "	https://api.funtranslations.com/translate/numbers.json";

userInput.addEventListener("onclick", clickHandler);

buttonClick.addEventListener("click", clickHandler);

function getUrl(input) {
    var finalUrl = url + "?text=" + input;
    return finalUrl;
}

function errorHandler(error) {
    console.log("Error occurred: ", error);
    alert("Oops! Something is not right. Please try again after sometime");
}

function clickHandler() {
    var finalInput = userInput.value;
    fetch(getUrl(finalInput))
    .then(response => response.json())
    .then(json => {
        var finalOutput = json.contents.translated;
        translatedOutput.innerHTML = finalOutput;
    })
    .catch(errorHandler)
}