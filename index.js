const SteamUser = require('steam-user');

const user = new SteamUser();

var username = process.env.username;
var password = process.env.password;

const logOnOptions = {
	accountName: username,  //Enter here your account login
	password: password		 //Enter your password
}

user.logOn(logOnOptions);

user.on('loggedOn', () => {
	console.log(logOnOptions.accountName + ' - Successfully logged on');
	user.setPersona(1);                 //1 - online, 7 - invisible
	user.gamesPlayed([730,570,252490,271590,359550,1172620,1517290,2221490]);    //List app IDs
});
