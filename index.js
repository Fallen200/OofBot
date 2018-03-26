const Discord = require("discord.js");

const PREFIX = "$"

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Bot Online!")
    bot.user.setPresence({game:{name:"Prefix $ | Made by VexNoid", type:"PLAYING"}});
    });

bot.on("message", function(message)  {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0].toLowerCase()) {
    
    case "help":
    var embed = new Discord.RichEmbed();
    embed.setColor(0xFFD700);
    embed.setTitle("Commmands")
    embed.addField("New Commands", "N/A")
    embed.addField("Useful Commands", "Help - List all the commands\nDm - DM a user through the bot\nDmall - DMs all the users in the server");
    embed.setFooter("Made by VexNoid | Fallen#9211");

    message.author.send(embed)
    message.author.send()
    message.channel.send("Check yo DM'S! :scream:")
    break;
    case "dmall":
    if (args.length >= 2) {
        if (message.member.roles.find("name", "Admin")) {
            args.shift();
            let user = message.mentions.users.first();
            let users = message.guild.members; 
            users.forEach(user => user.send(" " + args.slice(1).join(" ")));
        } else {
            message.channel.send("You must have the Admin role to use this command!");
        }
    } else {
        message.channel.send("Please use this format `~DMALL (Message)`")
    }
    break;
    case "vexnoid":
        message.channel.send("Come check the creators out! https://discord.gg/2Zbd3aZ")
        break;
    case "dm":
    if (args.length >= 3) {
        if (message.member.roles.find("name", "Admin")) {
            args.shift();
            let user = message.mentions.users.first();
            user.send(args.slice(1).join(" "));
            message.channel.send("You're DM message is sent! :white_check_mark:");
        } else {
            message.channel.send("You must have the Admin role to use this command!");
        }
    } else {
        message.channel.send("Please use this format ```~DM @(user) (Message)```")
    }
    break;
    default:
        message.channel.send("**Invalid Command! :red_circle:**")
}

});
bot.login(process.env.TOKEN);
