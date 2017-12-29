# Installation

In terminal go to project root and run:
```
npm install
npm run start
```

# Always Online setup with PM2

Install pm2 

``` 
npm install -g pm2
```

Then in terminal go to project root and run 
```
pm2 start npm -- start
```
Project will be always running at the port specified in tools/srcServer.js 
