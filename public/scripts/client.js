// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */

$(document).ready(function() {
  const $tweet = createTweetElement(tweetData);
  $('#tweet-container').prepend($tweet);
});

// (Test driver code) temporary tweets object

const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 };

const createTweetElement = function(tweetObj) {
  // console.log("DO I WORK?!");
  // console.log(tweetObj.user);
  
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
    <span>${tweetObj.created_at}</span>
    <span class="icons">
      <i class="fas fa-flag footer-icons"></i>
      <i class="fas fa-retweet footer-icons"></i>
      <i class="fas fa-heart footer-icons"></i>
    </span>
    </footer>
  </article>`;
  // $('.tweet-container').append(tweetLayout);
  return element;
};

// console.log("testing", $tweet);
// $('#tweet-container').append(`<h1>hello!</h1>`); //should add to the page so that we can see the temporary data displayed

