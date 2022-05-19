const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]}
    )
    
client.login(process.env.token)

client.on("ready", () => {
    console.log("BOT ONLINE")
})

client.on("messageCreate", (message) =>{
    if(message.content == "!skribbl"){
        message.channel.send("https://skribbl.io")
    }

    if(message.content == "ciao") {
        message.channel.send("ciao a te pirla")
    }  

    if(message.content == "!osu") {
        message.channel.send("https://osu.ppy.sh/home")
    } 
    
    if(message.content == "!valorant") {
        message.channel.send("https://playvalorant.com/it-it/agents/")
    } 

    if(message.content == "!spotify") {
        message.channel.send("Ecco la migliore playlist del mondo: https://open.spotify.com/playlist/6aFrZfPb2Rd7E6XRQEqZ9U?si=58dfb3c7ca094a16")
    } 

})




