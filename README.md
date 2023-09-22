## Setup

### Make sure you have **redis** installed locally and have it running:

```
brew install redis
brew services start redis
```

### Update node version to the one listed in `.nvmrc` 
Not required, but should make setup less painful.

### Setup repo
Pull down the repo and run `npm install`

### PM2
Install `pm2` globally
```
npm install -g pm2
```

### Startup
To run the app:

If it's your first time running the app or you deleted `/dist/bundle.dev.js`, first run 
```
npm run freshstart
```

Once `/dist/bundle.dev.js` has been created, run: 

```
npm run start
```

The app should be running on http://localhost:4000/graphql


