require('module-alias/register')
const {Server} = require('./src/server')
Server.listen(3000, _ => console.log('rodando na 3000'));
