let general = {
    get : require('./general/get'),
    set : require('./general/set')
}

let rateLimit = {
    get : require('./rate_limit/get'),
    reset : require('./rate_limit/reset')
}

let specialRoles = {
    get : require('./special_roles/get'),
    set : require('./special_roles/set'),
    delete : require('./special_roles/delete')
}

module.exports = {
    general : general,
    rateLimit : rateLimit,
    specialRoles : specialRoles
}