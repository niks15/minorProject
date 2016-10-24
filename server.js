var express = require('express');
var app = express();

var Bing = require('node-bing-api')({accKey: "BvCed+3KGgMrvlgqDeKPEnuA+xgAQoa4r+xBceCSrss"});

var NewsApi = require('news-api-njs');
var news = new NewsApi({
    apiKey: "9e6eb4655c9445479eafee051767896b"
});

var mongojs = require('mongojs');
var db = mongojs('apiData', ['apiData']);

var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/loadPage/:ids', function(req, res){

    var id = req.params.ids;

    console.log("I recieved a GET Request");
    console.log(id);

    // function makeCall(callback){
    //     var body = 'Test Post';
    //
    //     Bing.news(id, {
    //         top: 10,  // Number of results (max 15)
    //         skip: 3,   // Skip first 3 results
    //         newsSortBy: "Date", //Choices are: Date, Relevance
    //         newsCategory: "rt_Business", // Choices are:
    //                                     //   rt_Business
    //                                     //   rt_Entertainment
    //                                     //   rt_Health
    //                                     //   rt_Politics
    //                                     //   rt_Sports
    //                                     //   rt_US
    //                                     //   rt_World
    //                                     //   rt_ScienceAndTechnology
    //         newsLocationOverride: "US.WA" // Only for en-US market
    //     }, function(error, res, body){
    //         console.log(body.d.results[0]);
    //         callback(body.d.results[0]);
    //     });
    // };
    //
    // function processResponse(response){
    //     res.json(response);
    // }
    // makeCall(processResponse);

    news.getArticles({
        source: 'techcrunch',
        sortBy: 'latest'
    }).then(function(response) {
        console.log(response);
        res.json(response)
    }).catch(function(err) {
        console.log(err);
    });
});

app.listen(3000);

console.log("server running on port 3000");