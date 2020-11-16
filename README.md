# Node HTTP Server Client Basics

## First Install

```
[fork or clone]

git clone https://github.com/zwerb/basic_node_http

cd basic_node_http

npm install
```

## Get Started (after First install)

```
npx pm2 start
    # or: npx pm2 start <server-http.js|server-express.js>

npx pm2 status
    
# then log into browser:
        # for server-http
    http://localhost:3000 
        # for server-express
    http://localhost:3000 
```

## To check Server Status and Restart

```
npx pm2 status 

npx pm2 restart all
    # or replace 'all' with specific script nanme e.g. server-express.js

npx pm2 kill
``


### Reference: Packages

`npm install`:

    # package abstraction for node http
`express`
    # a process manager for running server as a daemon
`pm2`
    # a lib to route through a random managed domain
`ngrok`