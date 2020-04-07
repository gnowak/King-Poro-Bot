exports.run = (client, message, args) => {
    /**
     *  Take users in specified channel (args), shuffle users into 2 teams and assign role based on result
     *  @param  {Object}    client      Discord Bot Client Object
     *  @param  {Object}    message     Message Object that instanciated this bot command 
     *  @param  {String}    args        List of additional arguments provided with the command
     **/
    
     //Load constants from file
    const Constants = require('../config/constants');

    console.log(`ARGUMENTS: ${args}`)

    //Fetch Users in ready role
    message.guild.roles.fetch(Constants.READY_ROLE)
    .then(ready=>{
        //Get Ready Players ****CHANGE VARIABLE NAME****
        let randomizedPlayers = ready.members.map(m=>m.user.id);
        
        //Randomize array of ready players 
        for( let i = randomizedPlayers.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i);
            const temp = randomizedPlayers[i];
            randomizedPlayers[i] = randomizedPlayers[j];
            randomizedPlayers[j] = temp;
        }

        //Split players into 2 teams
        let blueTeam = randomizedPlayers.splice(0, Math.ceil(randomizedPlayers.length / 2));
        let redTeam = randomizedPlayers;

        //Add proper role for each blue team player
        blueTeam.forEach(m=> {
            message.guild.members.fetch(m).then(teamMember => {
                    teamMember.roles.add(Constants.BLUE_TEAM_ROLE)
                    teamMember.roles.remove(Constants.READY_ROLE)
                })
                .catch(console.error);
        })
        //Add proper role for each red team player
        redTeam.forEach(m=> {
            message.guild.members.fetch(m)
            .then(teamMember => {
                teamMember.roles.add(Constants.RED_TEAM_ROLE)
                teamMember.roles.remove(Constants.READY_ROLE)
            })
            .catch(console.error);
        })
        
        //Send a message to the channel with members of each team
        message.guild.roles.fetch(Constants.BLUE_TEAM_ROLE)
        .then(blueMember=>message.channel.send("BLUE TEAM: " + blueMember.members.map(m=>m.displayName)))
        .catch(console.error);
        
        message.guild.roles.fetch(Constants.RED_TEAM_ROLE)
        .then(redMember=>message.channel.send("RED TEAM: " + redMember.members.map(m=>m.displayName)))
        .catch(console.error);
    })
    return 'WOOOWWW!';
}