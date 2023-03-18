const MessageModel = require('@src/model/message.model.js')

const connect = async ({socket, io}) => {
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('new user connected', e => {
        const {name} = e;
        console.log(name, " acabou de conectar")
        io.sockets.emit('new user connected', [{
            name
        }])
    })

    socket.on('chat message', (e) => {

        const {name, message} = e
        console.log(name, ' enviou uma mensagem: ', message)

        const msg = new MessageModel({
            user: name,
            message,
            visualized: false
        })
        msg.save().then(data => console.log('data', data))

        io.sockets.emit('chat message', [{
            user:name,
            message
        }])
    })

}


module.exports = {
    connect
}