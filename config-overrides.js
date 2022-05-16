module.exports = function override(config, env) {
  const experiments = config.experiments || {};
  config.experiments = {
		...experiments,
    asyncWebAssembly: true,
    syncWebAssembly: true,
    topLevelAwait: true,
  };
  
  const wasmExtensionRegExp = /\.wasm$/;
  config.resolve.extensions.push('.wasm');

  config.module.rules.forEach((rule) => {
    (rule.oneOf || []).forEach((oneOf) => {
      if (oneOf.type === "asset/resource") {
        oneOf.exclude.push(wasmExtensionRegExp);
      }
    });
  });
            
  return config;
}
