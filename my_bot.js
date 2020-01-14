const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("with Javascript")

    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        // List all channels
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })

        // General Channel id:  665335105958576160
    })

    let generalChannel = client.channels.get("665335105958576160")
    const attachement = new Discord.Attachment("")
    generalChannel.send("I am alive!")
})

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    }
    receivedMessage.channel.send("Message received from " + receivedMessage.author.toString() + ": " + receivedMessage.content)

    //received
})


bot_secret_token = "NjY1NDEwMDExNTI2MDcwMjkx.XhlNeA.02XR2fxaQvrcFlctBSQnogAsLtI"

client.login(bot_secret_token)