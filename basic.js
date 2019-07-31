
var Botkit = require('botkit');
require('dotenv').config()

if (!process.env.slack_token) {
  console.log('Error: Specify token in environment');
  process.exit(1);
}

var controller = Botkit.slackbot({
 debug: false
});

controller.spawn({
  token: process.env.slack_token
}).startRTM(function(err) {
  if (err) {
    throw new Error(err);
  }
});


controller.on('hello',function(bot,message) {
  console.log('fired');
  bot.say("[opening riff]");
});

//random
controller.hears(['gatecreeper'],['ambient'], function(bot,message){bot.reply(message, "oh you mean fat Nails?? suck me off bitch boy that band sucks POWER TRIP")});
controller.hears(['dill'],['ambient','direct_mention'], function(bot,message){bot.reply(message, "more like dildo mondi amirite scrodeos? :dill::dill::dill:")});
controller.hears(['beatles'],['ambient','direct_mention'], function(bot,message){bot.reply(message, "you misspelled beetles")});
controller.hears(['president','trump','Trump'],['ambient','direct_mention'], function(bot,message){bot.reply(message, "President Cuck of Fucksboro you shitass JILL STEIN 4 EVA")});
controller.hears(['CIRCLE','circle'],['ambient','direct_mention'], function(bot,message){bot.reply(message, "https://www.youtube.com/watch?v=1z7DhxOHaBY")});
controller.hears(['billy'],['ambient','direct_mention'], function(bot,message){bot.reply(message, "COMMENCE THE JIGGLIN")});
controller.hears(['grape'],['ambient','direct_mention'], function(bot,message){bot.reply(message, "GUYS they did surgery on a grape!")});

controller.hears(['hello','hi','sup','salp','sapp'],['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,"You can all go fuck yourselves with a dirty speculum");
});

controller.hears(['pissnuts'],['ambient','direct_mention'],function(bot,message){
  bot.reply(message, "WHATS UP CUCKS");
});
controller.hears(['pee','peanuts','nuts'],['ambient','direct_mention'], function(bot,message){bot.reply(message, "Pee is stored in the nuts. Fact.")});
controller.hears(['311'],['ambient','direct_mention'], function(bot,message){bot.reply(message, 
`:blart::blart::blart::blart: :311::311::311::311::311:\n
:blart::blart::blart::blart::sublime::sublime::sublime::sublime::sublime:\n
:blart::blart::blart::blart::311::311::311::311::311:\n
:sublime::sublime::sublime::sublime::sublime::sublime::sublime::sublime::sublime:\n
:311::311::311::311::311::311::311::311::311:\n
:sublime::sublime::sublime::sublime::sublime::sublime::sublime::sublime::sublime:\n 
`,"P-NUT SLAP THAT BASSSSSSS!!! https://media1.tenor.com/images/946a73232adf2cb87cebdcad9adbf0f8/tenor.gif?itemid=5761260")
});

controller.hears(['boys','bois'],['ambient'],function(bot,message){
  bot.reply(message, "THE BOYS ARE BACK IN TOWN!!!!1111");
});

controller.hears(['stizz'],['ambient'],function(bot,message){
  bot.reply(message, "shout out love to the money and the drugs");
});

controller.hears(['sitch'],['ambient'],function(bot,message){
  bot.reply(message, "But for real though whats the donkey sauce sitch?");
});

controller.hears(['jarf'],['ambient'],function(bot,message){
  bot.reply(message,"Hey can someone call Jeff? I'm worried about him.");
});

controller.hears(['gary'],['ambient'],function(bot,message){
  bot.reply(message,"His name is Old Rob! WE GOT A TWINSIES SITUATION GOIN' BOYS!");
});

controller.hears(['tommy'],['ambient'],function(bot,message){
  bot.reply(message,"Fuck Tommy :eggplant:");
});

controller.hears(['turgid'], ['ambient'], function(bot,message) {
  bot.reply(message,"TURGE ZWIKKER");
});
