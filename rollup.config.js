
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs    from '@rollup/plugin-commonjs';





const cjs = {

  input: 'build/typescript/index.js',

  output: {
    file   : 'build/rollup/index.cjs.js',
    format : 'cjs',
    name   : 'line_segment_intersect_ts'
  },

  plugins : [

    nodeResolve({
      mainFields     : ['module', 'main'],
      browser        : true,
      extensions     : [ '.js' ],
      preferBuiltins : false
    }),

    commonjs()

  ]

};





const es6 = {

  input: 'build/typescript/index.js',

  output: {
    file   : 'build/rollup/index.es6.js',
    format : 'es',
    name   : 'line_segment_intersect_ts'
  },

  plugins : [

    nodeResolve({
      mainFields     : ['module', 'main'],
      browser        : true,
      extensions     : [ '.js' ],
      preferBuiltins : false
    }),

    commonjs()

  ]

};





export default [cjs, es6];
