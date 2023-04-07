module.exports = async (client, roleId) => {
    try {
        const database = client.db("Hatsu_Yuki");
        const specialRoles = database.collection("Special_Roles");
        let query = { roleId : roleId };
        return await specialRoles.deleteOne(query);
    } catch (error) {
        return new Error(error);
    }
}