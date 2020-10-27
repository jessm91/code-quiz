var highScore = document.querySelector("#highScore");
var clearButton = document.querySelector("#clearButton");
var backButton = document.querySelector("#backButton");

clearButton.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}

backButton.addEventListener("click", function () {
    window.location.replace("./index.html");
});