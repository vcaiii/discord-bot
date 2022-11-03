import Discord, { GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()
const { BOT_TOKEN } = process.env

// Developer Portal: https://discord.com/developers/applications
const client = new Discord.Client({
	intents: [ // https://discord.com/developers/docs/topics/gateway#list-of-intents
    GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
})

client.login(BOT_TOKEN)

export default client