# Subpath imports are broken in [@swc-node/register](https://github.com/swc/swc-node) v1.10.1 and later

This repository contains a Minimum Reproducible Example for [swc-project/swc-node#895](https://github.com/swc-project/swc-node/issues/895).

The example given for a [Subpath import](https://nodejs.org/api/packages.html#subpath-imports) in the Node.js documentation shows loading a node dependency for the "node" import condition and a polyfill otherwise:

```json
{
  "imports": {
    "#dep": {
      "node": "dep-node-native",
      "default": "./dep-polyfill.js"
    }
  },
  "dependencies": {
    "dep-node-native": "^1.0.0"
  }
}
```

This breaks in swc-node.

To reproduce, run the following:

```
npm install
npm start
```

This gives the following output:

```
> start
> node --import @swc-node/register/esm-register test.js


node:internal/modules/run_main:123
    triggerUncaughtException(
    ^
Error: Cannot find module 'process': #subpath-import cannot be resolved in file:///Users/gordonmleigh/Projects/gordonmleigh/mre-swc-node-register-subpath-imports/test-package/main.js
    at resolve (file:///Users/gordonmleigh/Projects/gordonmleigh/mre-swc-node-register-subpath-imports/node_modules/@swc-node/register/esm/esm.mjs:157:15)
    at async nextResolve (node:internal/modules/esm/hooks:748:22)
    at async Hooks.resolve (node:internal/modules/esm/hooks:240:24)
    at async MessagePort.handleMessage (node:internal/modules/esm/worker:199:18)

Node.js v22.9.0
```

The expected output is:

```
> start
> node --import @swc-node/register/esm-register test.js

Everything worked!
```
