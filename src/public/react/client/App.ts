export const App = `
import React from 'react';
import { renderRoutes } from 'react-router-config';

import styles from './App.module.css';

const App = ({ route }: any) => {
  return <div>{renderRoutes(route.routes)}</div>;
};

export default {
  component: App,
};
`;
