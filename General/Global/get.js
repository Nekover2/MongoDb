module.exports = async (client, property) =>  {
    try {
        const database = client.db("General");
        const propertyList = database.collection("Global");
        if(property !== undefined) return await propertyList.findOne({ name : property})
        else {
            let it =  await propertyList.find();
            return await it.toArray();
        }
    } catch (error) {
        return new Error(error);
    }
}