import { Html } from './Html';
import { renderer } from './renderer';
import { apollo } from './apollo';
import { index } from './';

export const helpers = {
  index: { data: index, extension: 'ts' },
  apollo: { data: apollo, extension: 'ts' },
  Html: { data: Html, extension: 'tsx' },
  renderer: { data: renderer, extension: 'tsx' },
};
