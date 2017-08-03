Running Instructions:
=====================

```sh
 $ git clone https://github.com/bitshadow/dribbble-mix.git
 $ cd dribbble-mix && npm install && DRIBBLE_TOKEN=xyz nodemon
```

in browser visit:
    http://localhost:5000/?url=https%3A%2F%2Fdribbble.com%2Fcreativemints&htmlOnly=true
    
params:
-------
  `url`: Dribble user profile url

  `htmlOnly`: Returns html version of the resolver if flag is `true` else returns JSON.

Make sure you host this server in public network before using in Mixmax dashboard.

Mixmax Dashboard:
============
1. Go to Mixmax Dashboard,
2. Click on Settings
3. Click on Integrations,
4. Click Add Link Resolver.
5. Enter the following parameters:
   Description: Dribble
   Regular Expression: dribbble.com/*
   Resolver URL: https://yourdomain.com/
