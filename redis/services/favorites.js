class favoritesService {
  constructor(client) {
    this.client = client
  }

  getFavorites = async (username) => {
    const favAlbums = this.client.sMembers(`${username}:favAlbums`);
    const favArtists = this.client.sMembers(`${username}:favArtists`);
    
    const ret =  {
      username: username,
      albums: await favAlbums,
      artists: await favArtists
    }

    return ret
  }
}

export { favoritesService }