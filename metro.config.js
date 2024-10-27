const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.alias = {
  '@': __dirname,
  '@/components': `${__dirname}/components`,
  '@/themes': `${__dirname}/themes`,
};

module.exports = defaultConfig;