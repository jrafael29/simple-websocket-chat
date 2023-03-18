const {connect} = require('@src/handler/chat.handler.js')
const { createServer } = require('http');
const app = require('express')()
const httpServer = createServer(app);
const { Server } = require('socket.io');
const ioServer = new Server(httpServer);
const routes = require('@src/routes/index.js')

app.use(routes)

ioServer.on('connection', (socket) => {
    connect({socket, io: ioServer})
} );

module.exports = {
    Server: httpServer
}