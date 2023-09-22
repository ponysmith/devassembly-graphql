import knex from 'knex';
import { config } from './knexfile';
import { albumsService } from './services/albums';
import { artistsService } from './services/artists';

const connection = knex(config)

export const db = {
  knex: connection,
  albums: new albumsService(connection),
  artists: new artistsService(connection)
}