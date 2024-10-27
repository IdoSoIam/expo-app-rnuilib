module.exports = function (api) {
  api.cache(false);
  return {
    presets: ["babel-preset-expo"],
      plugins: [
         [
            "module-resolver",
            {
               extensions: [".tsx", ".jsx", ".ts", ".js", ".json"],
               root: ['./'],
               alias: {
                  '@': './', // Configure '@' pour pointer vers la racine
                  '@/components': './components', // Alias pour le dossier components
                  '@/themes': './themes', // Alias pour le dossier themes
               },
            }
         ],
         [
            'module:react-native-dotenv',
            {
              envName: 'APP_ENV',
              moduleName: '@env',
              path: '.env',
              safe: false,
              allowUndefined: true,
              verbose: false,
            }
         ],
         "react-native-reanimated/plugin",
     ],
  };
};
