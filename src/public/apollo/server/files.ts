import { params } from './params';
import { app } from './app';
import { Server } from './Server';
import { index } from './';

export const apolloServer = {
  params: { data: params, extension: 'ts' },
  app: { data: app, extension: 'ts' },
  Server: { data: Server, extension: 'ts' },
  index: { data: index, extension: 'ts' },
};
