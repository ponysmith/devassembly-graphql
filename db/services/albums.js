class albumsService {
  constructor(connection) {
    this.connection = connection
  }

  getAlbums = (ids = null) => {
    const q = this.connection('albums').select('AlbumId as id', 'Title as title', 'ArtistId as artist_id')
    if(Array.isArray(ids) && ids.length > 0) {
      const _ids = []
      Object.values(ids).forEach( (n) => _ids.push(parseInt(n) ) )
      q.whereIn('id', _ids )
    }    
    q.limit(10)
    return q
  }

  getAlbumById = (id) => {
    return this.connection('albums')
      .select('AlbumId as id', 'Title as title', 'ArtistId as artist_id')
      .where({ AlbumId: parseInt(id) })
      .first()
  }

  getAlbumsByArtistId = (id) => {
    return this.connection('albums')
      .select('AlbumId as id', 'Title as title')
      .where({ ArtistId: parseInt(id) })
  }
}

export { albumsService }