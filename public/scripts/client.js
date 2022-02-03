// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
// const { json } = require("body-parser");
//  */

// const tweetData = [
//     {
//       "user": {
//         "name": "Newton",
//         "avatars": "https://i.imgur.com/73hZDYK.png"
//         ,
//         "handle": "@SirIsaac"
//       },
//       "content": {
//         "text": "If I have seen further it is by standing on the shoulders of giants"
//       },
//       "created_at": 1461116232227
//     },
//     {
//       "user": {
//         "name": "Descartes",
//         "avatars": "https://i.imgur.com/nlhLi3I.png",
//         "handle": "@rd" },
//       "content": {
//         "text": "Je pense , donc je suis"
//       },
//       "created_at": 1461113959088
//     }
//   ];


$(document).ready(function () {
  // makes a request using jquery to /tweets and receives the array of tweets
  const loadTweets = function () {
    $('#tweet-container').empty();
    $.ajax('/tweets', { method: 'GET', format: 'json' }).then(function (tweetsArr) {
      // the callback function will call renderTweets function and pass it the response from the ajax response
      renderTweets(tweetsArr);
    });
  };

  loadTweets();


  const createTweetElement = function (tweetObj) {

    const escape = function (str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    }

    // creating the tweet element
    const element = `
  <article>
    <header class="tweet-header">
      <div>
        <img src="${escape(tweetObj.user.avatars)}" alt="id-photo" />
        <span class="display-name">${escape(tweetObj.user.name)}</span>
      </div>
        <span class="user-handler">${escape(tweetObj.user.handle)}</span>
    </header>
    <label for="previous-tweetsObj">${escape(tweetObj.content.text)}</label>
    <footer class="tweet-footer">
    <span>${timeago.format(escape(tweetObj.created_at))}</span>
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
  const renderTweets = function (tweetsArray) {

    for (let tweet of tweetsArray) {
      // returns the value and calls the createTweetElement function to prepend it to the tweet-container
      createTweetElement(tweet);
    }
  };


  // event listener for submit from the form
  $('.tweet-form').on('submit', function (event) {
    event.preventDefault(); //prevents the default submission behaviour

    const inputLength = $("form").find("textarea").val().length;
    // console.log(inputLength);

    //error message will be display
    $('.error-msg').hide().slideDown(400).text('');
    if (inputLength > 140) {

      // should receive an error alert when length of tweet is too long
      $('.error-msg').slideDown(400).text('Character count has exceeded the max!');

    } else if (inputLength === '' || inputLength === null || inputLength <= 0) {
      //user should receive an error pop-up when their submission is empty string, null, or when the length is less than and equal to 0)
      $('.error-msg').slideDown(400).text('Your tweet cannot be empty!');
    } else {
      // serialize the form data into a jquery string
      const param = $(this).serialize();

      // a POST request is received whenever a user submits a new tweet and it's passed to the loadTweets function and is shown on the page without having to refresh
      $.ajax({
        url: '/tweets', method: 'POST', data: param, success: function () {
          loadTweets();
        }
      });

    }


  });



});