var Twitter = require('twitter');
 
var client = new Twitter({
//   consumer_key: '', // fill your own
//   consumer_secret: '', // fill your own
//   access_token_key: '', // fill your own
//   access_token_secret: '' // fill your own
  consumer_key: 'dvurxEsAY1UNkUAQNQjO1y2f5',
  consumer_secret: 'SsYdnDWE1MNcleFtItCmniEujGBMArdCwYa5HjtuXNmghaMTeK',
  access_token_key: '1731032910-jEuzwwZPBxykCYKstvJQHKKdx3RgAjGGN5gcbZR',
  access_token_secret: '3c1vMwgKcg5VPK1Iv4cIxng3Y1vYnUxA3GhKZSe73nQE1'
});
 
var params = {
    // screen_name: 'm41highway',
    screen_name: 'sid_travel',
    count: 50
};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    // console.log(tweets);
    console.log(tweets.length);
    // console.log(tweets);

    tweets.forEach(function (tweet) {
        console.log(tweet.created_at);
        console.log(tweet.text);
        // console.log(tweet.entities);

        if (tweet.entities.media && tweet.entities.media.length > 0) {
            console.log('=== Media ===');
            tweet.entities.media.forEach(function (m){
                console.log(m.media_url);
            })
        }

        if (tweet.entities.hashtags && tweet.entities.hashtags.length > 0) {
            console.log('=== hashtags ===');
            tweet.entities.hashtags.forEach(function (h) {
                console.log('#' + h.text);
                console.log(h.indices);
            })
        }

        // console.log(tweet.retweet_count);
        console.log('-------------------------');

    })
  }
});
