
var apiKey = "zT3sAwoK5popRJdbPQ8S7olIC3zH8YDp";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&begin_date=19800101&end_date=19900101&api-key=" + apiKey;

$.ajax({
    url:queryURL,
    method: "GET"
    }).then(function(response) {
        console.log(response);
    });
