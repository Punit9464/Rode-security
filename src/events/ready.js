module.exports = async(client) => {
    client.on("ready",async() => {
        console.log(`${client.user.username} Aagyaon bhai <3`)
        client.user.setPresence({
            activities : [{
                name : `${client.config.prefix}help`,
                type : "WATCHING"
            }],
            status : "online"
        });
    });
};
