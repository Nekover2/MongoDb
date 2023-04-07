module.exports = async (client, property) => {
    try {
        const database = client.db("Hatsu_Yuki");
        const propertyList = database.collection("General");
        if(property !== undefined) return await propertyList.findOne({ name : property})
        else {
            let it =  await propertyList.find();
            return await it.toArray();
        }
    } catch (error) {
        return new Error(error);
    }
}