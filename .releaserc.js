const { createConfig } = require('semantic-release-config-gitmoji/lib/createConfig');

const config = createConfig({ npmPublish: false });

module.exports = config;
