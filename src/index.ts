#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { webpack, npm, react, apollo } from './public/';

// initliaze dir options
const base: string = path.resolve();
const [, , ...args] = process.argv;
const folderName: string = args[0];

const root = (path: string, folder: string) => {
  // Creates base project folder /tmp/apple, regardless of whether `/tmp` exist.
  console.log(`Setup folder @ ${path}/${folder}`);
  fs.mkdirSync(`${path}/${folder}`, { recursive: true });
};

const init = () => {
  if (!folderName || folderName === '') {
    console.log('Please specify a folder name');
    return;
  }
  console.log('Base Path');
  root(base, folderName);
  // Write all webpack config files
  console.log('Setting up webpack');
  webpack(base, folderName);
  // initialize npm & install modules
  console.log('Installing npm modules may take a few mins');
  npm(folderName);

  // Creates react src /tmp/apple/src/client.
  console.log('Setting up client');
  react(base, folderName);

  // Creates apollo src /tmp/apple/apollo/.
  console.log('Setting up apollo server');
  apollo(base, folderName);

  console.log('All set happy coding!');
};

// init cli
init();
