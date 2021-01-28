import fs from 'fs';
import { config } from './public/webpack';
import { npm } from './public/npm';

console.log('Tiempo');

// Make dir
const base = process.cwd();
const folderName = 'root';

console.log(base);
// Create webpack config
const webpack = config;
try {
  // Creates base project folder /tmp/apple, regardless of whether `/tmp` exist.
  fs.mkdirSync(`${base}/${folderName}`, { recursive: true });

  // Creates /tmp/apple/src.
  fs.mkdirSync(`${base}/${folderName}/src/`, { recursive: true });
  // Write src entry ts file
  fs.writeFileSync(`${base}/${folderName}/src/index.ts`, 'src-index');

  // Creates /tmp/apple/src/client.
  fs.mkdirSync(`${base}/${folderName}/src/client/`, { recursive: true });
  // Write server ts file
  fs.writeFileSync(`${base}/${folderName}/src/client/index.ts`, 'client-index');

  // Creates /tmp/apple/src/server.
  fs.mkdirSync(`${base}/${folderName}/src/server/`, { recursive: true });
  // Write server ts file
  fs.writeFileSync(`${base}/${folderName}/src/server/index.ts`, 'server-index');

  // Write base webpack config file
  fs.writeFileSync(`${base}/${folderName}/webpack.config.js`, webpack);

  // Success
} catch (err) {
  console.error(err);
}

// initialize npm
npm(folderName);
