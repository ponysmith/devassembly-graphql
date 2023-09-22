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

### VS Code Extension
Install the GraphQL extension for better syntax highlighting with GraphQL Schemas (GraphQL extension by Orsen Kucher)

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


## Run some queries

### getAlbums
```
{
  albums {
    id
    title
    artist {
      id
      name
    }
  }
}
```

### getAlbumById
```
{
  album(id: 3) {
    id
    title
    artist {
      id
      name
    }
  }
}
```

### getArtists
```
{
  artists {
    id
    name
    albums {
      id
      title
    }
  }
}
```

### getArtistById
```
{
  artist(id: 50) {
    id
    name
    albums {
      id
      title
    }
  }
}
```

### getFavorites
```
# Requires you to add some favorites via a Mutation or manually in Redis (see below)
{
  favorites(username: "psmith") {
    albums {
      id
      title
    }
    artists {
      id
      name
    }
  }
}
```

## Manually add some favorites to Redis

You can add favorites via the Mutations. But if you want to add them manually you can do it directly in Redis:

```
# Launch Redis REPL
redis-cli

# In Redis REPL
sadd psmith:favAlbums 1 2 3 4
sadd psmith:favArtists 5 6 7 8
```