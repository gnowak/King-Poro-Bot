const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config/config.json');


const prefix = config.prefix;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(msg.author.id !== config.ownerID) return;
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;

    switch(command) {

        case 'summon' :
            msg.channel.send('WHAT IS YOUR COMMAND FOR THE PORO KING, '+msg.author.username+'?!');
            break;
        case "ping" :
            msg.channel.send("pong!");
            break;
        case "foo" :
            msg.channel.send("bar!");
            break;
        default:
            msg.channel.send("YOU SEEM TO BE CONFUSED...")
    }
});

client.login(config.token);