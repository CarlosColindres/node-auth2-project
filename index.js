const server = require('./api/server')

server.listen('5000', (_ , res) => {
    console.log('Server up and running')
})