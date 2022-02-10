var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// services/node-lambda/hello.ts
var hello_exports = {};
__export(hello_exports, {
  handler: () => handler
});
var import_aws_sdk = require("aws-sdk");
async function handler(event, context) {
  console.log("Got and event:");
  console.log(event);
  const s3client = new import_aws_sdk.S3();
  const listBuckets = await s3client.listBuckets().promise();
  return {
    statusCode: 200,
    body: `Here are the buckets ${JSON.stringify(listBuckets)}`
  };
}
module.exports = __toCommonJS(hello_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
