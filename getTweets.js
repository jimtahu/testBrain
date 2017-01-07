var keys = require('./botKeys');
var twitter = require('twitter');

var client = new twitter({
  consumer_key: keys.CONSUMER_KEY,
  consumer_secret: keys.CONSUMER_SECRET,
  access_token_key: keys.ACCESS_TOKEN_KEY,
  access_token_secret: keys.ACCESS_TOKEN_SECRET
});
var func = function( error, tweets, resp ){
  tweets.forEach( function( item, index, array ){ console.log( item.text ); } );
};
client.get('/statuses/user_timeline.json', { screen_name: 'jimtahu', count: 16 }, func);
