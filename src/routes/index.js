const { response } = require('express');
const rootPath = require('../helpers/rootDir')()
const route = require('express').Router();

const MessageModel = require('@src/model/message.model.js')


route.get('/', (req, res, next) => {
    
    res.sendFile(rootPath + '/src/pages/choice-chat.html')
})

route.get('/chat/:id', (req, res) => {

    res.sendFile(rootPath + '/src/pages/index.html')
})

route.get('/messages', async (req, res) => {
    const data = await MessageModel.find()
    res.send({body: data}).status(200).end();
})

module.exports = route