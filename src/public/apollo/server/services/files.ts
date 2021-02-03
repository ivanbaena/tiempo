import { auth } from './auth';
import { index } from './';
import { passportConfig } from './passportConfig';

export const services = {
  auth: { data: auth, extension: 'ts' },
  index: { data: index, extension: 'ts' },
  passportConfig: { data: passportConfig, extension: 'ts' },
};
