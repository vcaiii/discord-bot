import express from 'express'
import client from './discord/client.js'
import { getMusic } from './discord/music.js'

const app = express()
const port = process.env.PORT || 3000

app.get('/', async (req, res) => {
  res.send('Hello World!')
})

app.get('/music', async (req, res) => {
  const musicLinks = await getMusic(client)
  res.json({ data: musicLinks })
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})


