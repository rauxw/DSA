// // problem : Build a feature to show latest tweet and last tweet

// // Data structure to Choose : array[]

// //                   first           latest
// const tweetArray = ["Hello", "Bye", "Wooo"];

// // array stores elements in sequnce

// function firstTweetAndLatestTweet(array) {
//   // we will compute least time & space operation : first tweet
//   let firstTweet = array[0];
//   let latestTweet = "";
//   // Now this opeartion costs more time & space : latest tweet
//   for (let i = 0; i < array.length; i++) {
//     if (i === array.length - 1) {
//       latestTweet = array[i];
//       break;
//     }
//   }
//   return { firstTweet, latestTweet };
// }

// const data = firstTweetAndLatestTweet(tweetArray);

// console.log(data);

function getTweets(array) {
  const getLastTweet = array[0];
  const getLatestTweet = array[array.length - 1];
  return { getLastTweet, getLatestTweet };
}

console.log(getTweets(tweetArray));
