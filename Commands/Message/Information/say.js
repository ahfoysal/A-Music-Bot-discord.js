const { Message } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");
  
module.exports = {
  name: "say",

  description: `get ping of bot`,
  userPermissions: ['SEND_MESSAGES'],
  botPermissions: ['EMBED_LINKS'],
  category: "Information",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,

  /**
   *
   * @param {JUGNU} client
   * @param {Message} message
   * @param {String[]} args
   * @param {String} prefix
   * @param {Queue} queue
   */
  run: async (client, message, args, prefix, queue, msg ) => {
    // Code
    
    let arr =  args;
    const withoutCommas = arr.join(' ')
  
    console.log(withoutCommas)
     message.delete(1000);
     message.channel.send({ content: `${withoutCommas}` })
      
    
  },
};
