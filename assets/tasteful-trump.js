(() => {
  function changeTweets() {
    let tweets = document.querySelectorAll('[role="article"]');
    if (tweets.length > 0) {
      [...tweets].forEach(tweet => {
        let testTweet = tweet.querySelector('[data-testid="tweet"]');
        let leftHalf = testTweet.querySelector('div');
        if (leftHalf && !leftHalf.querySelector('[href="/realDonaldTrump"]')) return;
        let donaldTweet = tweet.querySelector('div [lang]:not(.nice-donald-done)');
        if (donaldTweet) {
          donaldTweet.classList.add("nice-donald-done")
          let compliment = compliments[Math.floor(Math.random() * compliments.length)];
          donaldTweet.innerHTML = compliment;
        }
      });
    }
    setTimeout(changeTweets, 500)
  }
  setTimeout(changeTweets, 500);
})()