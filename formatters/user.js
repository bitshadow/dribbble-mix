const _ = require('lodash');
const userStyle = require('./userStyle');

module.exports = {
    format: function(user) {
        if (!user || _.isEmpty(user)) {
            return `<span>User not found</span>`
        }

        const output =  `
            <!DOCTYPE html>
            <html>
                <style>
                    ${userStyle}
                </style>
                <body>
                    <div class="user">
                        <ul class="user_outer_ul">
                            <li class="user_li">
                                <a href="${user.html_url}" class="user_link">
                                    <img class="user_thumbnail" src="${user.avatar_url}"></img>
                                </a>
                            </li>
                            <li class="user_li">
                                <div class="user_info">
                                    <a class="user_name_link" href="${user.html_url}">${user.name}</a>
                                </div>
                                <ul class="user_ul">
                                    <li class="user_li">
                                        <a href="${user.followers_url}" class="user_link">
                                            <span class="user_label">Followers</span>
                                            <span class="user_count">${user.followers_count}</span>
                                        </a>
                                    </li>
                                    <li class="user_li">
                                        <a href="${user.projects_url}" class="user_link">
                                            <span class="user_label">Projects</span>
                                            <span class="user_count">${user.projects_count}</span>
                                        </a>
                                    </li>
                                    <li class="user_li">
                                        <a href="${user.likes_url}" class="user_link">
                                            <span class="user_label">Likes</span>
                                            <span class="user_count">${user.likes_received_count}</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </body>
            </html>
        `;

        return output;
    }
};
