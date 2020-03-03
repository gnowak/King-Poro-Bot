/* DEFINE DISCORD ROLE ID's */
const BLUE_TEAM_ROLE = '684139549814685869';
const RED_TEAM_ROLE = '684139721274032177';
const READY_ROLE = '684139186411798627';
const BOT_GUILD = '210171568066658304';

exports.run = (client, message, args) => {

    let ready = message.guild.roles.cache.get(READY_ROLE).members;
    
    console.log( 'Ready Player List: ' + ready.map(m=>m.user.username) );

    let randomizedPlayers = ready.map(m=>m.user.id);

    for( let i = randomizedPlayers.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i);
        const temp = randomizedPlayers[i];
        randomizedPlayers[i] = randomizedPlayers[j];
        randomizedPlayers[j] = temp;
    }
    
    console.log('Randomized list: ' + randomizedPlayers);
    
    let blueTeam = randomizedPlayers.splice(0, Math.ceil(randomizedPlayers.length / 2));
    let redTeam = randomizedPlayers;

    console.log('Blue Team: ' + blueTeam);
    console.log('Red Team: ' + redTeam);

    blueTeam.forEach(m=> {
        message.guild.members.fetch(m).then(teamMember => {
            teamMember.roles.add(BLUE_TEAM_ROLE)
            teamMember.roles.remove(READY_ROLE)
            .catch(console.error);
        })
    })
    redTeam.forEach(m=> {
        message.guild.members.fetch(m).then(teamMember => {
            teamMember.roles.add(RED_TEAM_ROLE)
            teamMember.roles.remove(READY_ROLE)
            .catch(console.error)
            ;
        })
    })

   return 'WOOOWWW!';
}