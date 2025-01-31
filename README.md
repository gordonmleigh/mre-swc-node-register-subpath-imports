# Subpath imports are broken in [@swc-node/register](https://github.com/swc/swc-node) v1.10.1 and later

This repository contains a Minimum Reproducible Example for this bug.

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
Error: Tsconfig not found /Users/gordonmleigh/Projects/gordonmleigh/mre-swc-node-register-subpath-imports/tsconfig.json: @gordonmleigh/mre-test-package cannot be resolved in file:///Users/gordonmleigh/Projects/gordonmleigh/mre-swc-node-register-subpath-imports/test.js
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

The imported condition is "node"
```
