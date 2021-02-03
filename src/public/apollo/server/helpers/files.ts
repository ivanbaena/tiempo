import { MONGO_URI } from './db';
import { index } from './';
import { mongo } from './mongo';

export const apolloHelpers = {
  db: { data: MONGO_URI, extension: 'ts' },
  index: { data: index, extension: 'ts' },
  mongo: { data: mongo, extension: 'ts' },
};
