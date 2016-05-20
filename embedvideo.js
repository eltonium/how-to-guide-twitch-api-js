var requestType = "GET";
var queryURL = "https://api.twitch.tv/kraken/";
var queryString = "streams?game=Hearthstone%3A%20Heroes%20of%20Warcraft&limit=5";
var apiKey = "1zw23lfvfnmt8lou01dncryhevk3hky";

var request = new XMLHttpRequest();
request.open(requestType, queryURL + queryString, true);
request.setRequestHeader("Client-ID", apiKey);
request.addEventListener("load", function() {
    var response = JSON.parse(request.responseText);
    for (var p in response.streams) {
        var streamName = response.streams[p].channel.name;
        var streamPreview = response.streams[p].preview.medium;
        var streamLink = response.streams[p].channel.url;

        var newImage = document.createElement('img');
        var newLink = document.createElement('a');
        var newDiv = document.createElement('div');
        var newP = document.createElement('p');

        newDiv.classList.add("stream");
        newImage.src = streamPreview;
        newLink.href = streamLink;
        newLink.appendChild(newImage);
        newP.textContent = streamName;
        newDiv.appendChild(newP);
        newDiv.appendChild(newLink);
        document.body.appendChild(newDiv);
    }
});

request.send(null);
