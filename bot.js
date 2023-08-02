import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const TOKEN = process.env['token']
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply({ content: 'Pong!', ephemeral: true });
  }
  if (interaction.commandName === 'link') {
    await interaction.reply('https://www.youtube.com/');
  }

});

client.login(TOKEN);
