const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"]}
    )
    
client.login(process.env.token)

client.on("ready", () => {
    console.log("BOT ONLINE")
})

var messaggi = ["Ciao", "Come va", "Hey", "Ehi", "Non ti rispondo", "bot", "pietro bamba"]
var dado = ["1", "2", "3", "4", "5","6"]

client.on("messageCreate", (message) =>{
    if(message.content == "!skribbl"){
        message.channel.send("https://skribbl.io")
    }

    if(message.content == "ciao") {
        message.channel.send("ciao" + message.author.toString())
    }  

    if(message.content == "!andrea") {
        message.channel.send("Hey <@681846390468378675>")
    } 

    if (message.content == "!random"){
            var random= Math.floor(Math.random() * messaggi.lenght)
            message.channel.send(message.author.toString() + " " + messaggi[random])
    }

    if (message.content == "!dado"){
        var random= Math.floor(Math.random() * dado.lenght)
        message.channel.send(message.author.toString() + " " + dado[random])
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


    if(message.content == "!bot"){
        message.author.send("Hey io sono Gatto, il bot di Discord creato da Andrea")
    }

})


function OraAttuale(){
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();

    var canale = client.channels.cache.get("948329695395610624");
    if (hour == 15 && minute == 0){
        canale.send("BUONGIORNO!!")
    }
}
setInterval(OraAttuale, 1000*60)



