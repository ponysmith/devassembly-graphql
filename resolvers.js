export const resolvers = {
  Query: {
    albums: (obj, args, ctx) => ctx.db.albums.getAlbums().then( (result) => result ),
    album: (obj, args, ctx) => ctx.db.albums.getAlbumById(args.id).then( (result) => result ),
    artists: (obj, args, ctx) => ctx.db.artists.getArtists().then( (result) => result ),
    artist: (obj, args, ctx) => ctx.db.artists.getArtistById(args.id).then( (result) => result ),
    favorites: (obj, args, ctx) => ctx.redis.favorites.getFavorites(args.username)
  },

  Album: {
    artist: (obj, args, ctx) => ctx.db.artists.getArtistById(obj.artist_id).then( (result) => result)
  },

  Artist: {
    albums: (obj, args, ctx) => ctx.db.albums.getAlbumsByArtistId(obj.id).then( (result) => result)
  },

  Favorites: {
    albums: (obj, args, ctx) => ctx.db.albums.getAlbums(obj.albums).then( (result) => result)
  }
}
