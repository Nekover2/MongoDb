const HatsuYukiDb = require('./HatsuYukiDb');
const GeneralDb = require('./General')
const MongoDb = require('mongodb');


async function run() {
    let dbClient = new MongoDb.MongoClient("mongodb://127.0.0.1:27017", { useNewUrlParser: true, useUnifiedTopology: true, family: 4 });
    await dbClient.connect();

    let testResult = await GeneralDb.Global.get(dbClient);
    console.log(testResult);
    await dbClient.close();
}

run();

module.exports = {
    HatsuYukiDb : HatsuYukiDb,
    GeneralDb : GeneralDb
}