const { CommandInteraction } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");
const { Message } = require("discord.js");

module.exports = {
  name: "say",
  description: `play song by song Name/Link`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  type: "CHAT_INPUT",
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,
  options: [
    {
      name: "text",
      description: `song Name/Link`,
      type: "STRING",
      required: true,
    },
  ],

  /**
   *
   * @param {JUGNU} client
   
   * @param {CommandInteraction} interaction
   * @param {Message} test
   */
  run: async (client, interaction, test) => {
    
    // Code
    let song = interaction.options.getString("text");
    interaction.deleteReply()
    // console.log(interaction.channel);
  
  return  interaction.channel.send({ content: `${song}` });
  },
};
