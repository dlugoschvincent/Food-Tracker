var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_4c9ca1e2 = require("../../chunks/index-4c9ca1e2.js");
var import_navigation_92f05dd6 = require("../../chunks/navigation-92f05dd6.js");
const Routes = (0, import_index_4c9ca1e2.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_navigation_92f05dd6.g)(`/${new Date().toISOString().slice(0, 10)}`);
  return `${$$result.head += `${$$result.title = `<title>Food Tracker Homepage</title>`, ""}`, ""}`;
});
