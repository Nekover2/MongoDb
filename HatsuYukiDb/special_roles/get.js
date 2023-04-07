module.exports = async (client) => {
    try {
        const database = client.db("Hatsu_Yuki");
        const users = database.collection("Special_Roles");
        let it = await users.find();
        return it.toArray();
    } catch (error) {
        return new Error(error);
    }
}
