import { createClient } from 'redis';
import { favoritesService } from './services/favorites';

const client = createClient();
client.connect()
client.on('error', err => console.log('Redis Client Error', err));

export const redis = {
  client: client,
  favorites: new favoritesService(client)
}