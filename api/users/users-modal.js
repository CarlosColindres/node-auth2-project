const db = require("../../database/connection.js")

module.exports = {
    getAll() {
        return db('users')
    }
}