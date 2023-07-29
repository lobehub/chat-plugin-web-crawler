import { Config, createConfig } from '@umijs/test';

const base = createConfig({
  target: 'node',
});

const config: Config.InitialOptions = {
  ...base,
  collectCoverageFrom: ['api/**/*.{ts,js,tsx,jsx}'],
  /* if needed other snapshotSerializers should go here */
  // if you require some es-module npm package, please uncomment below line and insert your package name
  // transformIgnorePatterns: ['node_modules/(?!.*(lodash-es|your-es-pkg-name)/)']
};

export default config;
