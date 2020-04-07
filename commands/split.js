exports.run = (client, message, args) => {
    const Constants = require('../config/constants');

    message.guild.channels.create("Blue Team", {
            type: 'voice'
        })
        .then(channel => {
            channel.setParent('694227683294314567');

            message.guild.roles.fetch(Constants.BLUE_TEAM_ROLE)
                .then(blueMembers => {
                    blueMembers.members.forEach(member => {
                        if (member.voice.channel)
                            member.voice.setChannel(channel);
                        else console.log("Blue, Join a channel please")
                    });
                })
                .catch(console.error)
        })

    message.guild.channels.create("Red Team", {
            type: 'voice'
        })
        .then(channel => {
            channel.setParent('694227683294314567');

            message.guild.roles.fetch(Constants.RED_TEAM_ROLE)
                .then(redMembers => {
                    redMembers.members.forEach(member => {
                        if (member.voice.channel)
                            member.voice.setChannel(channel);
                        else console.log("Red, Join a channel please")

                    });
                })
                .catch(console.error)
        })
}