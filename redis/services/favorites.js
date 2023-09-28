class favoritesService {
  constructor(client) {
    this.client = client
  }

  getFavorites = async (username) => {
    const favAlbums = this.client.smembers(`${username}:favAlbums`);
    const favArtists = this.client.smembers(`${username}:favArtists`);
    
    const ret =  {
      username: username,
      albums: await favAlbums,
      artists: await favArtists
    }

    return ret
  }


  setFavorites = async (args) => {
    const favAlbumsKey = `${args.username}:favAlbums`;
    const favArtistsKey = `${args.username}:favArtists`;

    await this.client.sadd(favAlbumsKey, args.albumIds)
    await this.client.sadd(favArtistsKey, args.artistIds)
    
    const ret = {
      username: args.username,
      albums: await this.client.smembers(favAlbumsKey),
      artists: await this.client.smembers(favArtistsKey)
    }

    return ret;
  }
}

export { favoritesService }