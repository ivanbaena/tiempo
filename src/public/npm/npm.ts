import { exec } from 'child_process';
import { devDependencies, dependencies } from './';

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
    console.log('success: ', stdout);
    console.log(stderr);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
};
