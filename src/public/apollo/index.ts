export const index = `
import { Apollo, params, app } from './server';

const apollo = new Apollo(4000, params, app);
apollo.init();
`;

export * from './apollo';
