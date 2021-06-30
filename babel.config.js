module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      '@babel/typescript',
      [
        '@babel/env',
        {
          useBuiltIns: 'usage',
          corejs: 3,
          modules: false,
          targets: {
            esmodules: true
          }
        }
      ]
    ]
  };

} 
