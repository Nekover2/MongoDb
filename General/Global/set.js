module.exports = async (client, propertyName , propertyValue) => {
    try {
        if( propertyName === undefined || propertyValue === undefined ) throw new Error("Thiếu dữ liệu cho data");
        let database = client.db("General");
        let propertyList = database.collection("Global");
        const options = { upsert: true };
        const newData = {
            $set : {
                value : propertyValue
            }
        }
        return await propertyList.updateOne({name : propertyName}, newData, options);
    } catch (error) {
        return new Error(error);
    }
}