/* DEFINE DISCORD ROLE ID's */
const BLUE_TEAM_ROLE = '684139549814685869';
const RED_TEAM_ROLE = '684139721274032177';
const READY_ROLE = '684139186411798627';
const BOT_GUILD = '210171568066658304';

exports.run = (client, message, args) => {    
    message.guild.roles.fetch(BLUE_TEAM_ROLE).then( role=> {
        role.members.forEach( m=> {
            m.roles.remove(BLUE_TEAM_ROLE)
        })
    }).catch(console.error)

    message.guild.roles.fetch(RED_TEAM_ROLE).then( role=> {
        role.members.forEach( m=> {
            m.roles.remove(RED_TEAM_ROLE)
        })
    }).catch(console.error)

    message.guild.roles.fetch(READY_ROLE).then( role=> {
        role.members.forEach( m=> {
            m.roles.remove(READY_ROLE)
        })
    }).catch(console.error)

    message.reply("RESET!");
}