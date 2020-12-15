const db = require("../../database/connection.js")

module.exports = {
    getById(id ) {
        return db("users").where({ id }).first()
    },
    async insert(user){
        const [id] = await db("users").insert(user, "id")
        return this.getById(id)
    },
    findBy(username) {
        return db("users").where(username).orderBy("id")
    }
}