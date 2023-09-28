import { defineBuildConfig } from 'unbuild'
import pkg from './package.json';

export default defineBuildConfig({
  entries: [
    './src/index'
  ],
  externals: [...Object.keys(pkg.dependencies)],
  declaration: true,
  rollup: {
    emitCJS: true
  }
})
