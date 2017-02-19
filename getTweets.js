var keys = require('./botKeys');
var twitter = require('twitter');
var jsonfile = require('jsonfile');

var planets = [];
exports.planets=planets;

exports.getPlanets = function(){
    var client = new twitter({
        consumer_key: keys.CONSUMER_KEY,
        consumer_secret: keys.CONSUMER_SECRET,
        access_token_key: keys.ACCESS_TOKEN_KEY,
        access_token_secret: keys.ACCESS_TOKEN_SECRET
    });

    function getPlanetID( text ){
        return text.split('\n')[0].split(':')[1].trim();
    }

    function getLife( text ){
        if( text.match('VOID') )
            return "NONE";
        else
            return text.split('\n')[1].split(':')[1].trim().split(' ')[0].trim();
    }

    var processTweets = function( error, tweets, resp ){
        tweets.forEach(
            function( item, index, array ){
                var planet = {
                    id: getPlanetID(item.text),
                    life: getLife(item.text)
                };
                planets.push( planet );
            }
        );
    };

    client.get(
        '/statuses/user_timeline.json',
        { screen_name: 'FermiPasteladox', count: 32 },
        processTweets );
}

exports.savePlanets = function( planets ){
    jsonfile.writeFile( 'planetData.json', planets, { spaces: 2 }, function(err) { console.error(err); });
}
