require('dotenv').config()
const http = require('http')
const express = require('express')
const Socket = require('socket.io').Server
const { Deepgram } = require('@deepgram/sdk')

const app = express()
const server = http.createServer(app)
const io = new Socket(server)
const deepgram = new Deepgram(process.env.DEEPGRAM_KEY)

app.use(express.static('public'))
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => { res.sendFile(__dirname + '/views/index.html') })
app.get('/student', (req, res) => { res.sendFile(__dirname + '/views/student.html') })
app.get('/lecturer', (req, res) => { res.sendFile(__dirname + '/views/lecturer.html') })

// Start server
server.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
})
