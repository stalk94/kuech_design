const { QuickDB, MongoDriver } = require("quick.db");
const mongoDriver = new MongoDriver(`mongodb+srv://pigTest:pigTest@cluster0.tt6h3ti.mongodb.net/`);


async function run() {
    await mongoDriver.connect().then(console.log);
    const db = new QuickDB({driver: mongoDriver});
    //db.set("test", { difficulty: "Easy" })
    console.log("s")
}

run()