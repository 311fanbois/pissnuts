var Botkit = require('botkit');
require('dotenv').config()
var Fuckbot = require('./bot/fuckbot');

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