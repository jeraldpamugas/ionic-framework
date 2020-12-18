import { terser } from "rollup-plugin-terser";

const external = ['ionicons', 'ionicons/icons', '@ionic/core', '@ionic/core/loader', 'vue', 'vue-router'];

export default {
  input: 'dist-transpiled/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: true
    },
    {
      file: 'dist/index.min.js',
      format: 'esm',
      sourcemap: true,
      plugins: [terser()]
    }
  ],
  external: id => external.includes(id) || id.startsWith('@ionic/core')
};
