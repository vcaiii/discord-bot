import Discord, { GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()
const { BOT_TOKEN } = process.env

const client = new Discord.Client({
	intents: [
    GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
})

client.login(BOT_TOKEN)

export default client