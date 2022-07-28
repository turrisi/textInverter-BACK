import express from 'express'
import routes from './routes/index.js'

const server = express()

// Add the routes to the server
// and any middleware we need

server.use(express.json())
server.use('/iecho', routes)

export default server;
