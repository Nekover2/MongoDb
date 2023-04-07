const getSpecialRoles = require('../special_roles/get');

/**
 * 
 * @param {MongodbClient} client 
 * @param {String} discordId 
 */
module.exports = async (client, discordMember, command = "mutebyneko") => {
    try {
        const database = client.db("Hatsu_Yuki");
        const users = database.collection("Rate_Limit");
        //Find user
        let query = {discordId : discordMember.id}
        let userRate = await users.findOne(query);
        let newUserRate = {
            mutebyneko : 8,
            super_mute : 0,
            hard_mute : 0
        }
        if(!userRate)
        {
            let specialRoles = await getSpecialRoles(client);
            for (const specialRole of specialRoles) {
                if (interaction.member.roles.cache.some(role => role.id == specialRole.roleId)) {
                    newUserRate.mutebyneko += specialRole.mutebyneko;
                    newUserRate.super_mute += specialRole.super_mute;
                    newUserRate.hard_mute += specialRole.hard_mute;
                }
            }
        } else {
            newUserRate.mutebyneko = userRate.mutebyneko;
            newUserRate.super_mute = userRate.super_mute;
            newUserRate.hard_mute = userRate.hard_mute;
        }

        switch (command) {
            case "mutebyneko":
                newUserRate.mutebyneko -= 1;
                break;
            case "super_mute":
                newUserRate.super_mute -= 1;
                break;
            case "hard_mute" :
                newUserRate.hard_mute -= 1;
            default:
                break;
        }

        const options = { upsert: true };
        const newData = {
            $set : newUserRate
        }
        await users.updateOne(query, newData, options);

        return newUserRate;
    } catch (error) {
        return new Error(error);
    }
}