let __dirname: string;

if (process.env.BUILD_FORMAT === 'esm') {
  // ESM-specific import (dynamic import for ESM)
  import('./dirname.esm').then((module) => {
    __dirname = module.__dirname;
  });
} else if (process.env.BUILD_FORMAT === 'cjs') {
  // CJS-specific require
  const { __dirname: cjsDirname } = require('./dirname.cjs');
  __dirname = cjsDirname;
} else {
  // ESM-specific import (dynamic import for ESM)
  import('./dirname.esm').then((module) => {
    __dirname = module.__dirname;
  });
}

export { __dirname };
