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
  del: () => del,
  get: () => get,
  patch: () => patch
});
module.exports = __toCommonJS(stdin_exports);
var import_supabaseclient_1f639638 = require("../../../chunks/supabaseclient-1f639638.js");
var import_supabase_js = require("@supabase/supabase-js");
const get = async ({ params }) => {
  const { data: product, status } = await import_supabaseclient_1f639638.s.from("Food").select("*").eq("bar_code", parseInt(params.product));
  if (product === null || product[0] === void 0) {
    return { status: 404 };
  }
  return {
    status,
    body: {
      product: product.pop()
    }
  };
};
const patch = async ({ request, params }) => {
  const formData = await request.formData();
  await import_supabaseclient_1f639638.s.from("Food").update({
    name: formData.get("name"),
    fat: formData.get("fat"),
    protein: formData.get("protein"),
    carbohydrates: formData.get("carbohydrates")
  }).eq("bar_code", params.product);
  return {
    status: 200
  };
};
const del = async ({ params }) => {
  await import_supabaseclient_1f639638.s.from("Food").delete().eq("bar_code", params.product);
  return {
    status: 200
  };
};
