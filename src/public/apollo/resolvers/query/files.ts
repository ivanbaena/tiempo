import { user } from './user';
import { index } from './';

export const query = {
  user: { data: user, extension: 'ts' },
  index: { data: index, extension: 'ts' },
};
