module.exports = `
    .user {
        font-family: Helvetica, Arial, sans-serif;
    }
    .user_outer_ul:hover {
        background: #eee;
    }
    .user_outer_ul {
        max-width: 500px;
        display: inline-block;
        border-radius: 4px;
        padding: 10px;
        border: 1px solid #eee;
    }
    .user_ul, .user_outer_ul {
        list-style: none;
        padding-left: 10px;
    }
    .user_li {
        vertical-align: middle;
        display: inline-block;
        margin: 0 20px 0 0;
        font-size: 14px;
        line-height: 1;
    }
    .user_thumbnail {
        height: 50px;
        border-radius: 50%;
    }
    .user_label {
        font-weight: 500;
        color: #444;
    }
    .user_count {
        margin: 0 0 0 2px;
        color: #bbb;
    }
    .user_link, .user_name_link {
        text-decoration: none;
        display: inline-block;
        color: #999;
    }
    .user_name_link {
        color: #000;
    }
    .user_info {
        text-align: center;
        padding: 0 0 15px;
    }
`;
