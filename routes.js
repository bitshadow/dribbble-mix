const url = require('url');
const dribbble = require('./api/dribbble');
const formatter = require('./formatters/user');

/**
 * Index Route used for handling request on index endpoint(/)
 * @type {Object}
 */
const route = {
    handleRequest: function(req, res, next) {
        const self = this;
        const params = url.parse(req.url, true).query;

        if (!params.url) {
            res.send('Missing url');
            return next();
        }

        const userId = params.url.match(/com\/(\w+)\/?/)[1];

        dribbble
            .getUserData(userId)
            .then(function(user) {
                const userHTML = formatter.format(user);
                if (params.htmlOnly) {
                  return res.send(userHTML);
                }

                return res.json({
                    body: userHTML
                });
            });
    }
};

module.exports = route;
