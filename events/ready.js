const { ActivityType } = require("discord.js");
const client = require("../index");
const { TOKEN } = require("../settings/config");

client.on("ready", async () => {
  console.log(`${client.user.username} Is Online`);
  client.user.setActivity({
    name: ` /help o_o Pewds👉👈` ,
    type: ActivityType.Playing,
  });

  // loading database
  require("../handlers/Database")(client);

  // loading dashboard
  require("../Dashboard/server");

  client.guilds.cache.forEach(async (guild) => {
    await client.updateembed(client, guild);
  });
});
