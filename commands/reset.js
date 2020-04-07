exports.run = (client, message, args) => {    
    const Constants = require('../config/constants');

    message.guild.roles.fetch(Constants.BLUE_TEAM_ROLE).then( role=> {
        role.members.forEach( m=> {
            m.roles.remove(Constants.BLUE_TEAM_ROLE)
        })
    }).catch(console.error)

    message.guild.roles.fetch(Constants.RED_TEAM_ROLE).then( role=> {
        role.members.forEach( m=> {
            m.roles.remove(Constants.RED_TEAM_ROLE)
        })
    }).catch(console.error)

    message.guild.roles.fetch(Constants.READY_ROLE).then( role=> {
        role.members.forEach( m=> {
            m.roles.remove(Constants.READY_ROLE)
        })
    }).catch(console.error)

    message.reply("RESET!");
}