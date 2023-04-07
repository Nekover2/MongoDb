module.exports = async (client) => {
    try {
        const database = client.db("Hatsu_Yuki");
        const users = database.collection("Rate_Limit");
        await users.deleteMany({});
    } catch (error) {
        return new Error(error);
    }
}