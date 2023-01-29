require(`dotenv`).config();
const config = {
    "token" : "" || process.env.token,
    prefix : "!" || process.env.prefix,
    webhook_error : "https://discord.com/api/webhooks/1046078068437045309/UAWpYXGKDUoRrM7v7YiT9K5b7KFuLEFD2O18zAqSQCaqPDEdOsT4QZdoUQztZPeH3SSf",
    mongoURL1 : "mongodb+srv://Punitkumar94:jHwvyqF8UaZDK46a@securitymain1.ybt4chg.mongodb.net/?retryWrites=true&w=majority" || process.env.mongourl,
    mongoURL2 : "mongodb+srv://Punitkumar94:R3S1W7fjBAVMokyQ@securitymain2.4f8efe1.mongodb.net/?retryWrites=true&w=majority" || process.env.mongourl,
    mongoURL3 : "mongodb+srv://Punitkumar94:p6mEClou7dIYaVZ7@securitymain3.d1ybrbc.mongodb.net/?retryWrites=true&w=majority" || process.env.mongourl,
    owner : ["765841266181144596","1018135896555532328"],
    gban_channel_id : "1061296809999347792",
    support_server_link : "https://discord.gg/c5VbdzYajq",
    guildLogs : "1001490200503009311"
}
module.exports = config;