class artistsService {
  constructor(connection) {
    this.connection = connection
  }

  getArtists = () => {
    return this.connection('artists')
      .select('ArtistId as id', 'Name as name')
      .limit(10)
  }

  getArtistById = (id) => {
    return this.connection('artists')
      .select('ArtistId as id', 'Name as name')
      .where({ ArtistId: parseInt(id) })
      .first()
  }
}

export { artistsService }