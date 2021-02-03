import { root } from './root';
import { user } from './user';

export const schema = {
  root: { data: root, extension: 'ts' },
  user: { data: user, extension: 'ts' },
};
