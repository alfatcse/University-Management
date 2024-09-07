import { createClient } from 'redis';
import logger from './logger';
import config from '../config';
let redisClient = createClient({
  password: config.redis.pass,
  socket: {
    host: config.redis.url,
    port: 18475
  }
});
redisClient.on('error', (err) => logger.error('Redis Error', err));
redisClient.on('connect', () => logger.info('Redis Connected'));
const connect = async (): Promise<void> => {
  await redisClient.connect();
};
export const RedisClient = {
  connect
};
