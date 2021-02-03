import { Routes } from './Routes';
import { index } from './index';
import { App } from './App';
import { Home, NotFound } from './pages';

export const client = {
  index: { data: index, extension: 'tsx' },
  App: { data: App, extension: 'tsx' },
  Routes: { data: Routes, extension: 'tsx' },
};

export const pages = {
  Home: { data: Home, extension: 'tsx' },
  NotFound: { data: NotFound, extension: 'tsx' },
};
