import fs from 'fs';
export const writeMultipleFiles = (
  filesObj: any,
  base: string,
  folderName: string,
  cb: () => any = () => {},
  webpack: boolean = false
) => {
  for (const file in filesObj) {
    const baseFolder = `${base}/${folderName}`;
    const filename = webpack
      ? `webpack.${file}.${filesObj[file].extension}`
      : `${file}.${filesObj[file].extension}`;
    fs.writeFileSync(`${baseFolder}/${filename}`, filesObj[file].data);
  }
  cb();
};
