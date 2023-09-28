class artistsService {
  constructor(connection) {
    this.connection = connection
  }

  getArtists = (ids = null) => {
    const q = this.connection('artists').select('ArtistId as id', 'Name as name')
    if(Array.isArray(ids) && ids.length > 0) {
      const _ids = []
      Object.values(ids).forEach( (n) => _ids.push(parseInt(n) ) )
      q.whereIn('id', _ids )
    }    
    q.limit(10)
    return q
  }

  getArtistById = (id) => {
    return this.connection('artists')
      .select('ArtistId as id', 'Name as name')
      .where({ ArtistId: parseInt(id) })
      .first()
  }
}

export { artistsService }