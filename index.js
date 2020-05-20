
const Discord = require("discord.js");
const client = new Discord.Client();

// Server return line when lemon  is connected
client.on("ready", ()=> {
    console.log(`Logged in as ${client.user.tag}!`);
    msg.channel.send("I AM LEMON, AN STT CLIENT TO ALTER YOUR RYTHM");
});


client.on("message", msg => {
    // ADD THE COMMAND LIST HERE
    if (msg.content === "lemonhelp") {
        msg.channel.send("View the full command list at ");
    }

    else if(msg.content === "disconnect"){
        //ADD VOICE CHANNEL NAME HERE
        msg.channel.send("Lemon is now disconnected from your voice channel")
    }
    
});
