const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING","GUILD_SCHEDULED_EVENTS"]}
    )
    
client.login(process.env.token)

var messaggi = ["Ciao", "Come va", "Hey", "Ehi", "Non ti rispondo", "bot", "pietro bamba"]
var dado = ["1", "2", "3", "4", "5","6"]

client.on("ready", () => {
    console.log("BOT ONLINE")
})

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

    /* IF PER KICK UTENTE
    if (message.content.startsWith("!kick")){

        var utenteKick = message.mentions.members.first();

        if(!message.member.permissions.has("KICK_MEMBERS")){
            message.channel.send("Non hai il permesso di eseguire questo");
            return;
        }
        
        if(!utenteKick){
            message.channel.send("Non hai menzionato nessun utente");
            return;
        }

        if(!utenteKick.kickable){
            message.channel.send("Il bot non ha il permesso");
            return;
        }

        utenteKick.kick()
            .then(() => message.channel.send ("<@" + utenteKick + "> è stato kiccato"))
    }
    */

    /* IF BAN UTENTE
    if (message.content.startsWith("!ban")){

        var utenteBan = message.mentions.members.first();

        if(!message.member.permissions.has("BAN_MEMBERS")){
            message.channel.send("Non hai il permesso di eseguire questo");
            return;
        }
        
        if(!utenteBan){
            message.channel.send("Non hai menzionato nessun utente");
            return;
        }

        if(!utenteBan.kickable){
            message.channel.send("Il bot non ha il permesso");
            return;
        }

        utenteKick.ban()
            .then(() => message.channel.send ("<@" + utenteBan + "> è stato kiccato"))
    }
    */

    if(message.content == "!reactFun"){
        message.channel.send("HAPPY")
            .then(function (message){
                message.react("😂")
                message.react("🤣")
        })
    }

    if(message.content == "!react"){
        message.channel.send("Scegli una reazione")
            .then(messaggio => {
                messaggio.react("✅");
                messaggio.react("❌");

                var filtro = (reaction, user) => ["✅", "❌"].includes(reaction.emoji.name) && user.id == message.author.id;

                messaggio.awaitReactions(filtro, {max:1, time: 10000})
                    .then(collected => {
                        var reazione = collected.first().emoji.name;
                        if(reazione == "✅"){
                            message.channel.send("Bravo, hai fatto la scelta giusta");
                        }

                        if(reazione == "❌"){
                            message.channel.send("Hai sbagliato, mi dispiace");
                        }

                        message.delete();
                        messaggio.delete();

                    }).catch(collected => {
                        return message.channel.send("Tempo scaduto!")
                    })
        
        })

        
    }

    if(message.content == "!verifica"){
        if(message.member.roles.cache.has("814491147065884673")){
            message.channel.send("Hai il ruolo!");
        }
        else{
            message.channel.send("Non hai il ruolo");
        }
    }
   
});

client.on("guildMemberAdd", (member) => {
    client.channels.cache.get("814495773412163620").send("Benvenuto" + member.toString() + "in" + member.guild.name + ", sei il " + member.guild.memberCount + "° membro");
});

client.on("guildMemberRemove", (member) => {
    client.channels.cache.get("814495773412163620").send("Arrivederci" + member.toString() + "torna presto qui su" + member.guild.name);
});

client.on("messageCreate", (message) => {
    if(message.content.startsWith("£clear")){
        if(!message.member.permissions.has("MANAGE_MESSAGES")){
        message.channel.sedn("Non hai il permesso");
        return;
        }
        if(!message.guild.me.permissions.has("MANAGE_MESSAGES")){
            message.channel.send("Non ho il permsso");
            return;
        }

        var count = message.content.slice(7);
        count = parseInt(count);

        if(!count){
            message.channnel.send("Inserisci un numero valido");
            return;
        }

        message.channel.bulkDelete(count, true);
        message.channel.send("Ho eliminato" + count + " messaggi")
        .then(msg =>{
            msg.delete({timeout: 10000 })
        })
    }
});

client.on("messageCreate", (message) =>{
if (message.content == "!casual"){
    var random = Math.floor(Math.random() * messaggi.lenght)
    message.channel.send(message.author.toString() + " " + messaggi[random])
}

if (message.content == "!dado"){
    var random = Math.floor(Math.random() * dado.lenght)
    message.channel.send(message.author.toString() + " " + dado[random])
}
});

function OraAttuale(){
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();

    var canale = client.channels.cache.get("948329695395610624");
    if (hour == 15 && minutes == 0){
        canale.send("BUONGIORNO!!")
    }
}
setInterval(OraAttuale, 1000*60)



