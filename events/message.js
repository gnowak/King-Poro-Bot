module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;
    //Ignore all requests except bot owner defined in config
    if (message.author.id !== client.config.ownerID) return;
  
    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) !== 0) return;
  
    // Our standard argument/command name definition.
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();
  
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(commandName);

    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
    
  
    // Run the command
    cmd.run(client, message, args);
};