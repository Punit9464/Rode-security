module.exports = async(client) => {
    client.on("ready",async() => {
        console.log(`${client.user.username} Aagya on bhai <3`)
        client.user.setPresence({
            activities : [{
                name : `${client.config.prefix}help`,
                type : "WATCHING"
            }],
            status : "online"
        });
    });
};
