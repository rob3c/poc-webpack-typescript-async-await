This project explores async/await with TypeScript targeting ES6 and bundled using Webpack.

I used Node v4.4.0 in order for `for...of` to work when iterating the array in the demo, but Node v0.12 can be used with the `--harmony` flag for just the basic async/await functionality (TS targeting ES6 uses generators to polyfill them).

Unfortunately, we still need Babel to transpile the ES6 code TypeScript creates, because Webpack still expects commonjs modules. I tried to create the minimal configuration to support this. Maybe I'll update it to use the Webpack 2 beta someday :-)
