const { Message, EmbedBuilder, version } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "av",
  description: `see stats of bot`,
  userPermissions: ["SEND_MESSAGES"],
  botPermissions: ["EMBED_LINKS"],
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
  run: async (client, message, args, prefix, queue) => {
    // Code
    
     let users = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    let test = users.displayAvatarURL({ size: 4096, dynamic: true, format: "jpg" })
   
     let help_embed = new EmbedBuilder()
      .setColor(client.config.embed.color)
       .setTitle( `Avatar`)
      .setImage( users.displayAvatarURL({  size: 4096, dynamic: true, format: "jpg"}) )
    .setFooter(client.getFooter(message.author));


    
      message.channel.send({ embeds: [help_embed] })
  },
};

   
