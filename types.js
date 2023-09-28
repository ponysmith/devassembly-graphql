export const typeDefs = /* GraphQL */ `
  
  # Query 
  type Query {
    albums: [Album]
    album(id: Int!): Album
    artists: [Artist]
    artist(id: Int!): Artist
    favorites(username: String!): Favorites
  }

  # Artist
  type Artist {
    id: Int!
    name: String
    albums: [Album]
  }
 
  # Album
  type Album {
    id: Int!
    title: String
    artist: Artist
  }
  
  # Favorites
  type Favorites {
    username: String!
    albums(ids: [String!]): [Album]
    artists(ids: [String!]): [Artist]
  }


  type Mutation {
    setFavorites(username: String!, albumIds: [Int], artistIds: [Int]): Favorites
  }

`