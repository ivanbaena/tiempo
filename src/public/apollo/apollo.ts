import fs from 'fs';
import { writeMultipleFiles } from '../../helper';
import { apolloServer } from './server/files';
import { apolloHelpers } from './server/helpers/files';
import { services } from './server/services/files';
import { index as apolloInit } from './';
import { index as schemaInit } from './schema';
import { schema } from './schema/types/files';
import { index as resolvers } from './resolvers';
import { mutation } from './resolvers/mutation/files';
import { query } from './resolvers/query/files';
import { index as modelIndex, user } from './models';
import { index as dataIndex, User } from './data-source';

export const apollo = (base: string, folderName: string, cb: () => any) => {
  console.log('Setting up apollo server');
  // Creates /tmp/apple/apollo.
  fs.mkdirSync(`${base}/${folderName}/apollo/`, { recursive: true });
  // Write express ssr file
  fs.writeFileSync(`${base}/${folderName}/apollo/index.ts`, apolloInit);

  // Creates /tmp/apple/apollo/server
  fs.mkdirSync(`${base}/${folderName}/apollo/server/`, { recursive: true });
  // Write server folder files
  writeMultipleFiles(apolloServer, base, `${folderName}/apollo/server`);

  // Creates /tmp/apple/apollo/server/helpers
  fs.mkdirSync(`${base}/${folderName}/apollo/server/helpers`, {
    recursive: true,
  });
  // Write helper folder files
  writeMultipleFiles(
    apolloHelpers,
    base,
    `${folderName}/apollo/server/helpers`
  );

  // Creates /tmp/apple/apollo/server/services
  fs.mkdirSync(`${base}/${folderName}/apollo/server/services`, {
    recursive: true,
  });
  // Write services folder files
  writeMultipleFiles(services, base, `${folderName}/apollo/server/services`);

  // Creates /tmp/apple/apollo/schema.
  fs.mkdirSync(`${base}/${folderName}/apollo/schema`, { recursive: true });
  // Write express ssr file
  fs.writeFileSync(`${base}/${folderName}/apollo/schema/index.ts`, schemaInit);

  // Creates /tmp/apple/apollo/schema/types
  fs.mkdirSync(`${base}/${folderName}/apollo/schema/types`, {
    recursive: true,
  });
  // Write services folder files
  writeMultipleFiles(schema, base, `${folderName}/apollo/schema/types`);

  // Creates /tmp/apple/apollo/resolvers.
  fs.mkdirSync(`${base}/${folderName}/apollo/resolvers`, { recursive: true });
  // Write express ssr file
  fs.writeFileSync(
    `${base}/${folderName}/apollo/resolvers/index.ts`,
    resolvers
  );

  // Creates /tmp/apple/apollo/resolvers/mutation
  fs.mkdirSync(`${base}/${folderName}/apollo/resolvers/mutation`, {
    recursive: true,
  });
  // Write services folder files
  writeMultipleFiles(mutation, base, `${folderName}/apollo/resolvers/mutation`);

  // Creates /tmp/apple/apollo/resolvers/query
  fs.mkdirSync(`${base}/${folderName}/apollo/resolvers/query`, {
    recursive: true,
  });
  // Write services folder files
  writeMultipleFiles(query, base, `${folderName}/apollo/resolvers/query`);

  // Creates /tmp/apple/apollo/data-source.
  fs.mkdirSync(`${base}/${folderName}/apollo/data-source`, { recursive: true });
  // Write express ssr file
  fs.writeFileSync(
    `${base}/${folderName}/apollo/data-source/index.ts`,
    dataIndex
  );
  fs.writeFileSync(`${base}/${folderName}/apollo/data-source/User.ts`, User);

  // Creates /tmp/apple/apollo/models.
  fs.mkdirSync(`${base}/${folderName}/apollo/models`, { recursive: true });
  // Write express ssr file
  fs.writeFileSync(`${base}/${folderName}/apollo/models/index.ts`, modelIndex);
  fs.writeFileSync(`${base}/${folderName}/apollo/models/user.ts`, user);
  cb();
};
