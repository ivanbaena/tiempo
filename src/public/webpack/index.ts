import { ssr } from './ssr';
import { base } from './base';
import { client } from './client';
import { apollo } from './apollo';
import { writeMultipleFiles } from '../../helper';

const configs = {
  base: { data: base, extension: 'js' },
  ssr: { data: ssr, extension: 'js' },
  client: { data: client, extension: 'js' },
  apollo: { data: apollo, extension: 'js' },
};

export const webpack = (base: string, folderName: string, cb: () => any) => {
  console.log('Setting up webpack');
  // Write base webpack config file
  writeMultipleFiles(configs, base, folderName, cb, true);
};
