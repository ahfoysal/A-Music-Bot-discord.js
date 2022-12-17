const { Message } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");
const hi = 'lamo';
const fetchData = async (city) => {
  const { data } = await axios.get(`https://api.consumet.org/anime/gogoanime/watch/spy-x-family-episode-1?server=gogocdn`);
  console.log('hi')

  return data;
};
module.exports = {
  name: "anime",
  aliases: ["okay"],
  description: `get ping of bot`,
  userPermissions: ['SEND_MESSAGES'],
  botPermissions: ['EMBED_LINKS'],
  category: "Information",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,

  
  

  run: async (client, message, args, prefix, queue, msg, hi, fetchData ) => {
    // Code
    client.embed(message, `${args} ${hi} ${fetchData}`);
    
  },
};
