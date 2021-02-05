import fs from "fs";
import { exec } from "child_process";
import { devDependencies, dependencies } from "./";
import { scripts, tsConfig } from "./scripts";

export const npm = (folderName: string, cb: () => any): void => {
  console.log("Installing npm modules may take a few mins");
  exec(`cd ${folderName}; ls; npm init -y`, (error, stdout, stderr) => {
    npmDevInstall(folderName, cb);
    console.log(stderr);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
};

const npmDevInstall = (folderName: string, cb: () => any) => {
  exec(`cd ${folderName}; ls; ${devDependencies}`, (error, stdout, stderr) => {
    npmInstall(folderName, cb);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
};

const npmInstall = (folderName: string, cb: () => any) => {
  exec(`cd ${folderName}; ls; ${dependencies}`, (error, stdout, stderr) => {
    initTsc(folderName, cb);
    console.log(stderr);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
};

const initTsc = (folderName: string, cb: () => any) => {
  exec(`cd ${folderName}; tsc --init`, (error, stdout, stderr) => {
    updateScripts(folderName, cb);
    console.log(stderr);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
};

const updateScripts = (folderName: string, cb: () => any) => {
  fs.readFile(`${folderName}/package.json`, "utf8", (err: any, data: any) => {
    if (err) throw err;
    const updated = Object.assign(JSON.parse(data), scripts);
    fs.writeFileSync(`${folderName}/package.json`, JSON.stringify(updated));
  });
  // tsConfig
  fs.writeFileSync(`${folderName}/tsconfig.json`, JSON.stringify(tsConfig));
  lint(folderName, cb);
};

const lint = (folderName: string, cb: () => any) => {
  exec(`npx prettier --write ${folderName}/`, (error, stdout, stderr) => {
    cb();
    console.log(stderr);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
};
