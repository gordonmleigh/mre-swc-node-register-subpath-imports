import { SubpathCondition } from "@gordonmleigh/mre-test-package";
import assert from "node:assert";

console.log(`The imported condition is "${SubpathCondition}"`);
assert.strictEqual(SubpathCondition, "node");
