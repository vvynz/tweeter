$(document).ready(function() {
  $("#tweet-text").keyup(function(event) {
    // gets the length of input from the textarea
    const tweetLength = $(this).val().length;
    // console.log("Length:", tweetLength);
    const remainingChar = 140;
    const outputChar = remainingChar - tweetLength;
    console.log(outputChar);

    // const counter = $(this).parent("tweet-box").siblings("tweet-footer").children("#counter");
    // $(counter).addClass("counter");
    
    $("#counter").text(outputChar);
    if(outputChar < 0) {
      $("#counter").css({ color: "red" });
    } 
    if (outputChar > 0) {
      $("#counter").css({ color: "#555149" });
    }
  })
});