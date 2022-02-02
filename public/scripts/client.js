// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */
const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];


$(document).ready(function() {
  const createTweetElement = function(tweetObj) {
    // creating the tweet element
  const element = `
  <article>
    <header class="tweet-header">
      <div>
        <img src="${tweetObj.user.avatars}" alt="id-photo" />
        <span class="display-name">${tweetObj.user.name}</span>
      </div>
        <span class="user-handler">${tweetObj.user.handle}</span>
    </header>
    <label for="previous-tweetsObj">${tweetObj.content.text}</label>
    <footer class="tweet-footer">
    <span>${timeago.format(tweetObj.created_at)}</span>
    <span class="icons">
      <i class="fas fa-flag footer-icons"></i>
      <i class="fas fa-retweet footer-icons"></i>
      <i class="fas fa-heart footer-icons"></i>
    </span>
    </footer>
  </article>`;

  // adding/prepending the new tweet element to the tweet-container
  $('#tweet-container').prepend(element); //should add to the page so that we can see the temporary data displayed
};

// loops through the tweets database
const renderTweets = function(tweetsArr) {
  for (let tweet of tweetsArr) {
    // calls the createTweetElement function
    createTweetElement(tweet);
  }
}
// returns the value and prepends it to the tweet-container
renderTweets(tweetData);


  // event listener for submit from the form
$('.tweet-form').on('submit', (event) => {
  event.preventDefault(); //prevents the default submission behaviour

  // serialize the form data into a jquery string
  const param = $('.tweet-form').serialize();
  
  // submit a POST request that sends the serialized data to the server
  $.post("/tweets", param);
  //the request returns an xhr request in devTools
})
});


