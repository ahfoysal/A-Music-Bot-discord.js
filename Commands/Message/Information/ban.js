const { Message, EmbedBuilder, version, SlashCommandBuilder, PermissionFlagsBits, MessageEmbed } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "ban",
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
    
     let users = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let usern = message.mentions.users.first() || client.users.cache.get(args[0])
  
     
     let help_embed = new EmbedBuilder()
      .setColor(client.config.embed.color)
           .setTitle(`${usern.username} is Banned, Id: ${users.id} `)
     users.ban({  reason: 'They deserved it' })
  .then(console.log)
  .catch(console.error);
    

    
      message.channel.send({ embeds: [help_embed] })
         message.channel.send({ content: `https://cdn.discordapp.com/emojis/831673891382099968.gif` })

    
   
           

    
  },
};

   
