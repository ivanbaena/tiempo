import fs from 'fs';
import { exec } from 'child_process';
import { devDependencies, dependencies } from './';
import { scripts } from './scripts';

export const npm = (folderName: string): void => {
  exec(`cd ${folderName}; ls; npm init -y`, (error, stdout, stderr) => {
    npmDevInstall(folderName);
    console.log(stderr);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
};

const npmDevInstall = (folderName: string) => {
  exec(`cd ${folderName}; ls; ${devDependencies}`, (error, stdout, stderr) => {
    npmInstall(folderName);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
};

const npmInstall = (folderName: string) => {
  exec(`cd ${folderName}; ls; ${dependencies}`, (error, stdout, stderr) => {
    initTsc(folderName);
    console.log(stderr);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
};

const initTsc = (folderName: string) => {
  exec(`cd ${folderName}; tsc --init`, (error, stdout, stderr) => {
    updateScripts(folderName);
    console.log(stderr);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
};

const updateScripts = (folderName: string) => {
  fs.readFile(`${folderName}/package.json`, 'utf8', (err: any, data: any) => {
    if (err) throw err;
    const updated = Object.assign(JSON.parse(data), scripts);
    fs.writeFileSync(`${folderName}/package.json`, JSON.stringify(updated));
  });
};
