$(document).ready(function() {
  $("#tweet-text").on("keyup", function(event) {
    // gets the length of input from the textarea
    const tweetLength = $(this).val().length;
    // console.log("Length:", tweetLength);
    const remainingChar = 140;
    const outputChar = remainingChar - tweetLength;

    const counter = $(this).closest(".tweet-form").find(".counter").text(outputChar);
    // counter.text(outputChar);

    if (outputChar < 0) {
      counter.addClass("red");
    }
    if (outputChar >= 0) {
      counter.removeClass("red");
    }
  });
});
