/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test driver code
const tweetsObj = {
  user: {
    name: "Newton",
    avatars: "https://i.imgur.com/73hZDYK.png",
    handle: "@SirIsaac",
  },
  content: {
    text: "If I have seen further it is by standing on the shoulders of giants",
  },
  created_at: 1461116232227,
};

const createTweetElement = function (tweetsObj) {
  console.log("DO I WORK?!");
  console.log(tweetsObj.user);
  const tweetLayout = `
  <article>
    <header class="tweet-header">
      <div>
        <img src="${tweetsObj.user.avatars}" alt="id-photo" />
        <span class="display-name">${tweetsObj.user.name}</span>
      </div>
        <span class="user-handler">${tweetsObj.user.handle}</span>
    </header>
    <label for="previous-tweetsObj">${tweetsObj.content.text}</label>
    <footer class="tweet-footer">
    <span>${tweetsObj.created_at}</span>
    <span class="icons">
      <i class="fas fa-flag footer-icons"></i>
      <i class="fas fa-retweet footer-icons"></i>
      <i class="fas fa-heart footer-icons"></i>
    </span>
    </footer>
  </article>`;
  $('.tweet-container').append(tweetLayout);
};

const $tweet = createTweetElement(tweetsObj);

console.log("testing", $tweet);
// $('.tweet-container').append($tweet);
