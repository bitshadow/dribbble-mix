const request = require('request-promise');
const dribbble_token = process.env.DRIBBBLE_TOKEN;

module.exports = {
    getUserData: function(userId) {
        const options = {
            url: `https://api.dribbble.com/v1/users/${userId}?access_token=${dribbble_token}`
        }

        return request(options)
            .then(function(body) {
                return JSON.parse(body)
            });
    }
}
