import fs from "fs";
import { ssr, helpers } from "./ssr";
import { client, pages } from "./client/";
import { custom, indexCss, appCss } from "./custom";
import { writeMultipleFiles } from "../../helper";

export const react = (base: string, folderName: string, cb: () => any) => {
  console.log("Setting up client");
  // Creates /tmp/apple/src.
  fs.mkdirSync(`${base}/${folderName}/src/`, { recursive: true });

  // Write client index file
  fs.writeFileSync(`${base}/${folderName}/src/index.ts`, ssr);

  // Write css declaration file
  fs.writeFileSync(`${base}/${folderName}/src/custom.d.ts`, custom);

  // Creates /tmp/apple/src/helpers
  fs.mkdirSync(`${base}/${folderName}/src/helpers/`, { recursive: true });
  // Write helpers folder files
  writeMultipleFiles(helpers, base, `${folderName}/src/helpers`);

  // Creates /tmp/apple/src/client.
  fs.mkdirSync(`${base}/${folderName}/src/client/`, { recursive: true });
  // Write client base files
  writeMultipleFiles(client, base, `${folderName}/src/client`);
  // Write App.module.css
  fs.writeFileSync(`${base}/${folderName}/src/client/App.module.css`, appCss);

  // Creates /tmp/apple/src/client/pages.
  fs.mkdirSync(`${base}/${folderName}/src/client/pages`, { recursive: true });
  // Write pages base files
  writeMultipleFiles(pages, base, `${folderName}/src/client/pages`, cb);

  // Creates /tmp/apple/client/styles.
  fs.mkdirSync(`${base}/${folderName}/src/client/styles`, { recursive: true });
  // Write App.module.css
  fs.writeFileSync(
    `${base}/${folderName}/src/client/styles/index.css`,
    indexCss
  );
};
