import { arch } from "@gordonmleigh/mre-test-package";
import assert from "node:assert";

assert.strictEqual(arch, process.arch);
console.log(`Everything worked!`);
