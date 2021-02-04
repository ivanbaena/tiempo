#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { webpack, npm, react, apollo } from './public/';

// initliaze dir options
const base: string = path.resolve();
const [, , ...args] = process.argv;
const folderName: string = args[0];

const root = (path: string, folder: string, cb: any) => {
  // Creates base project folder /tmp/apple, regardless of whether `/tmp` exist.
  console.log(`Setup folder @ ${path}/${folder}`);
  fs.mkdirSync(`${path}/${folder}`, { recursive: true });
  cb();
};

const init = () => {
  if (!folderName || folderName === '') {
    console.log('Please specify a folder name');
    return;
  }
  root(base, folderName, () =>
    webpack(base, folderName, () =>
      react(base, folderName, () =>
        apollo(base, folderName, () =>
          npm(folderName, () => console.log('All set happy coding!'))
        )
      )
    )
  );
};

// init cli
init();
