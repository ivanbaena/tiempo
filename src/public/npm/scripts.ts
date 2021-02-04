export const scripts = {
  scripts: {
    'apollo-init': 'cd ./dist/; touch apollo.js',
    'clean:apollo': 'rimraf dist/apollo.js',
    'apollo:start-server':
      'nodemon --watch dist/apollo.js --exec "node dist/apollo.js"',
    'apollo:build-server':
      'webpack --config webpack.apollo.js --watch --progress',
    'apollo-setup': 'npm run clean:apollo && npm run apollo-init',
    apollo: 'npm run apollo-setup && npm-run-all --parallel apollo:*',
    'dev-init': 'mkdir dist; cd ./dist; touch ssr.js; touch bundle.js',
    'clean:dev': 'rimraf dist/ssr.js && rimraf dist/bundle.js',
    'dev:server': 'nodemon --watch dist/ssr.js --exec "node dist/ssr.js"',
    'dev:build-client': 'webpack --config webpack.client.js --watch --progress',
    'dev:build-server': 'webpack --config webpack.ssr.js --watch --progress',
    dev: 'NODE_ENV=development && npm run build',
    prebuild: 'npm run clean:dev && npm run dev-init',
    build: 'npm-run-all --parallel dev:*',
  },
};
export const tsConfig = {
  compilerOptions: {
    allowJs: true,
    allowSyntheticDefaultImports: true,
    esModuleInterop: true,
    experimentalDecorators: true,
    forceConsistentCasingInFileNames: true,
    jsx: 'react',
    lib: ['dom', 'dom.iterable', 'esnext'],
    module: 'esnext',
    moduleResolution: 'node',
    noImplicitAny: true,
    outDir: './dist/',
    plugins: [{ name: 'typescript-plugin-css-modules' }],
    skipLibCheck: true,
    strict: true,
    target: 'es6',
    typeRoots: ['node_modules/@types', 'node_modules/@types/node'],
    types: ['node'],
  },
};
