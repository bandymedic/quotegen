//version 2 with pull from API//
/*global $*/

  //establish variables for quote and author//
  var quote = "";
  var author = "";

$(document).ready(function() {
  getQuote();
  //call the getQuote function//
  $(".btn-primary").on("click", function(){
  getQuote();
  });
  //call the onClick function of the Totally Rad Quotes button//
});

  function getQuote(){
    //establish the getQuote function//
    var url = 'https://random-quote-generator.herokuapp.com/api/quotes/random';
    //establish variable for API source
    $.getJSON(url, function(data){
      //establish getJSON function to call and pull the data//
    quote = data.quote;
    author = data.author;
      //reassign values for quote and author to reflect the pull of data from the JSON//
    $("#quote").text(quote);
    $("#author").text(author);
      //pull the data based on type//
  });
  }
  
$(".btn-primary").on("click", function(){
  getQuote();
});
//call the onClick function of the Totally Rad Quotes button//

$(".tweet").on("click", tweet);
//call the onClick function of the Tweet button//
function tweet() {
  //establish a function for Tweet
  var qTweet = quote;
  var qAuthor = author;
  //establish variables to reflect the quote and author data pulled for output to twitter//
  var url="https://twitter.com/intent/tweet?text="+ qTweet + "  -"+ qAuthor;
  //compile values for twitter url, qTweet, and qAuthor for ease of use//
  window.open(url, "_blank");
  //call a new window to open with the twitter url + concatinated variables//
}

//version 1 with quotes from array//
//var quotes = [["Hello Newman. - Jerry Seinfeld"], ["Did I do that? - Steve Erkell"], ["You got it, dude. - Michelle Tanner"], ["D'oh! - Homer Simpson"], ["How the f&*$ am I funny? Funny how? Like a clown? I amuse you? - Joe Pesci - Goodfellas"], ["It's not a tumor! - Kindergarden Cop"], ["Keep the change, you filthy animal - Kevin McAlister"], ["Hasta La Vista, Baby! - Terminator 2: Judgement Day"], ["There's no crying in baseball! - A League of Their Own"], ["Schwing! - Wayne's World"]]

//function newQuote() {
//	var randomNumber = Math.floor(Math.random() * (quotes.length));
//	document.getElementById('text').innerHTML = quotes[randomNumber];
//}

