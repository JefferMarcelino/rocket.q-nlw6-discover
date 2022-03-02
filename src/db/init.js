const { init } = require("express/lib/application")
const Database = require("./config")

const initDb = {
    async init(){
        const db = await Database()

        await db.exec()
    }
}

initDb.init();