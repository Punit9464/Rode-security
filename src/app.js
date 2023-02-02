const { Client , Collection , MessageEmbed , WebhookClient , ShardingManager } = require("discord.js");
const { mongoURL1 , mongoURL2 , mongoURL3 , token , webhook_error } = require("./config.js");
const { Database } = require("quickmongo");
const ascii = require("ascii-table");
const Commandtable = new ascii().setHeading("Message Commands","Status");
const EventsTable = new ascii().setHeading("Client Events","Status");
const { readdirSync } = require("fs");
const client = new Client({intents : ["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES","GUILD_INVITES","GUILD_EMOJIS_AND_STICKERS","GUILD_BANS","GUILD_WEBHOOKS","GUILD_PRESENCES","MESSAGE_CONTENT"],
    partials : ["CHANNEL","GUILD_MEMBER","MESSAGE","REACTION","USER"],
    allowedMentions : {
        repliedUser : true,
        parse : ["everyone","roles","users"]
    }
});
module.exports = client;
client.commands = new Collection();
client.cools = new Collection();
client.data = new Database(mongoURL1);
//logschannel,roles,idsetc
client.data2 = new Database(mongoURL2);
//antinuke,server toggling
client.data3 = new Database(mongoURL3);
//whitelist data
client.data.connect();
client.data2.connect();
client.data3.connect();
client.config = require(`./config.json`);
client.emoji = require(`./emojis.json`);


readdirSync(`./src/commands/`).forEach(d => {
    const c = readdirSync(`./src/commands/${d}`).filter(f => f.endsWith('.js'));
    for(const f of c) {
        const cmd = require(`../src/commands/${d}/${f}`);
        client.commands.set(cmd.name,cmd)
        Commandtable.addRow(cmd.name,"✅");
    }
});
console.log(Commandtable.toString());

readdirSync("./src/events/").forEach(e => {
    require(`../src/events/${e}`)(client);
    let eve = e.split(".")[0];
    EventsTable.addRow(eve,"✅");
});
console.log(EventsTable.toString());

client.login(token);
const web = new WebhookClient({url : webhook_error})
process.on("unhandledRejection",(err) => {
    console.error(err)
    web.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`\`\`\`js\n${err}\`\`\``)]})
});
process.on("uncaughtException",(er) => {
    console.error(er)
    web.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`\`\`\`js\n${er}\`\`\``)]})
})
