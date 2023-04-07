module.exports = async (client, roleId, data = { mutebyneko : 0, super_mute : 0, hard_mute : 0}) => {
    try {
        const database = client.db("Hatsu_Yuki");
        const specialRoles = database.collection("Special_Roles");
        
        if(data.mutebyneko == undefined) data.mutebyneko = 0;
        if(data.super_mute == undefined) data.super_mute = 0;
        if(data.hard_mute == undefined) data.hard_mute = 0;

        let query = { roleId : roleId };
        const options = { upsert: true };
        const newData = {
            $set : data
        }
        return await specialRoles.updateOne(query, newData, options);
    } catch (error) {
        return new Error(error);
    }
}