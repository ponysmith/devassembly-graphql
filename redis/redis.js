import Redis from 'ioredis';
import { favoritesService } from './services/favorites';

const _client = new Redis();

export const redis = {
  client: _client,
  favorites: new favoritesService(_client)
}