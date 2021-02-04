import fs from 'fs';
import { ssr, helpers } from './ssr';
import { client, pages } from './client/';
import { writeMultipleFiles } from '../../helper';

export const react = (base: string, folderName: string, cb: () => any) => {
  console.log('Setting up client');
  // Creates /tmp/apple/src.
  fs.mkdirSync(`${base}/${folderName}/src/`, { recursive: true });
  // Write express ssr file
  fs.writeFileSync(`${base}/${folderName}/src/index.ts`, ssr);

  // Creates /tmp/apple/src/helpers
  fs.mkdirSync(`${base}/${folderName}/src/helpers/`, { recursive: true });
  // Write helpers folder files
  writeMultipleFiles(helpers, base, `${folderName}/src/helpers`);

  // Creates /tmp/apple/src/client.
  fs.mkdirSync(`${base}/${folderName}/src/client/`, { recursive: true });
  // Write client base files
  writeMultipleFiles(client, base, `${folderName}/src/client`);

  // Creates /tmp/apple/src/client/pages.
  fs.mkdirSync(`${base}/${folderName}/src/client/pages`, { recursive: true });
  // Write pages base files
  writeMultipleFiles(pages, base, `${folderName}/src/client/pages`, cb);
};
