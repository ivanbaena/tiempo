export const devDependencies =
  "npm i --save-dev webpack webpack-cli typescript ts-loader webpack-node-externals webpack-merge @types/react @types/react-dom @types/react-router-config @types/react-router-dom @types/express css-loader file-loader mini-css-extract-plugin @types/mini-css-extract-plugin npm-run-all rimraf style-loader @types/mongoose @types/passport @types/passport-local source-map-loader @types/express-session @types/bcryptjs typescript-plugin-css-modules";

const apolloDependencies =
  "@apollo/client apollo-datasource-mongodb apollo-server-express express-session graphql mongoose passport passport-local session connect-mongo cross-fetch";

export const dependencies = `npm i react react-dom react-router-dom react-router-config express bcryptjs ${apolloDependencies}`;
