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
  default: () => U5Bproductu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_4c9ca1e2 = require("../../../chunks/index-4c9ca1e2.js");
var import_stores_05d6f02b = require("../../../chunks/stores-05d6f02b.js");
var import_userStore_9ba28c0f = require("../../../chunks/userStore-9ba28c0f.js");
var import_supabaseclient_1f639638 = require("../../../chunks/supabaseclient-1f639638.js");
var import_dateStore_25203e18 = require("../../../chunks/dateStore-25203e18.js");
var import_index_f1067c1f = require("../../../chunks/index-f1067c1f.js");
var import_supabase_js = require("@supabase/supabase-js");
const Editproduct = (0, import_index_4c9ca1e2.c)(($$result, $$props, $$bindings, slots) => {
  let kiloJoules;
  let $$unsubscribe_selectedDate;
  let $user, $$unsubscribe_user;
  let $page, $$unsubscribe_page;
  $$unsubscribe_selectedDate = (0, import_index_4c9ca1e2.a)(import_dateStore_25203e18.s, (value) => value);
  $$unsubscribe_user = (0, import_index_4c9ca1e2.a)(import_userStore_9ba28c0f.u, (value) => $user = value);
  $$unsubscribe_page = (0, import_index_4c9ca1e2.a)(import_stores_05d6f02b.p, (value) => $page = value);
  let { product } = $$props;
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  kiloJoules = Math.round(product.protein * 176 + product.carbohydrates * 172 + product.fat * 400);
  $$unsubscribe_selectedDate();
  $$unsubscribe_user();
  $$unsubscribe_page();
  return `<form class="${"grid auto-rows-max gap-4"}" method="${"post"}" action="${"/products/" + (0, import_index_4c9ca1e2.e)($page.params.product) + "?_method=PATCH&meal=" + (0, import_index_4c9ca1e2.e)($page.url.searchParams.get("meal"))}"><div class="${"grid"}"><label for="${"bar_code"}" class="${"text-sm"}">Bar Code</label>
    <input id="${"bar_code"}" class="${"rounded-md border-2 border-orange-100 p-2 outline-orange-300"}" type="${"number"}" name="${"bar_code"}" disabled${(0, import_index_4c9ca1e2.j)("value", product.bar_code, 0)}></div>
  <div class="${"grid"}"><label for="${"name"}" class="${"text-sm"}">Name</label>
    <input required id="${"name"}" class="${"rounded-md border-2 border-orange-100 p-2 outline-orange-300"}" type="${"text"}" name="${"name"}"${(0, import_index_4c9ca1e2.j)("value", product.name, 0)}></div>

  <div class="${"mt-4"}">Nutrients per 100 gram:</div>

  <div class="${"grid"}"><label for="${"fat"}" class="${"text-sm"}">Fat</label>
    <input${(0, import_index_4c9ca1e2.j)("max", 100 - product.protein - product.carbohydrates, 0)} min="${"0"}" step="${"0.1"}" required id="${"fat"}" class="${"rounded-md border-2 border-orange-100 p-2 outline-orange-300"}" type="${"number"}" name="${"fat"}"${(0, import_index_4c9ca1e2.j)("value", product.fat, 0)}></div>

  <div class="${"grid"}"><label for="${"carbohydrates"}" class="${"text-sm"}">Carbohydrates</label>
    <input${(0, import_index_4c9ca1e2.j)("max", 100 - product.protein - product.fat, 0)} min="${"0"}" step="${"0.1"}" required id="${"carbohydrates"}" class="${"rounded-md border-2 border-orange-100 p-2 outline-orange-300"}" type="${"number"}" name="${"carbohydrates"}"${(0, import_index_4c9ca1e2.j)("value", product.carbohydrates, 0)}></div>
  <div class="${"grid"}"><label for="${"protein"}" class="${"text-sm"}">Protein</label>
    <input${(0, import_index_4c9ca1e2.j)("max", 100 - product.fat - product.carbohydrates, 0)} min="${"0"}" step="${"0.1"}" required id="${"protein"}" class="${"rounded-md border-2 border-orange-100 p-2 outline-orange-300"}" type="${"number"}" name="${"protein"}"${(0, import_index_4c9ca1e2.j)("value", product.protein, 0)}></div>
  <div class="${"grid"}"><label for="${"kilojoules"}" class="${"text-sm"}">Kilojoules</label>
    <input disabled step="${"0.1"}" id="${"kilojoules"}" class="${"rounded-md border-2 border-orange-100 p-2 outline-orange-300"}" type="${"number"}" name="${"kilojoules"}"${(0, import_index_4c9ca1e2.j)("value", kiloJoules, 0)}></div>
  <button class="${"rounded-md border-2 bg-orange-300 p-2"}" type="${"submit"}">Update Product</button></form>

<form method="${"post"}" action="${"/products/" + (0, import_index_4c9ca1e2.e)($page.params.product) + "?_method=DELETE"}" class="${"grid auto-rows-max gap-4"}"><button type="${"submit"}" class="${"rounded-md border-2 bg-red-500 p-2"}">Delete</button></form>

<form class="${"grid auto-rows-max gap-4"}"><div class="${"grid"}"><label for="${"grams"}" class="${"text-sm"}">Grams</label>
    <input step="${"0.1"}" id="${"grams"}" class="${"rounded-md border-2 border-orange-100 p-2 outline-orange-300"}" type="${"number"}" name="${"grams"}"></div>
  <input type="${"hidden"}"${(0, import_index_4c9ca1e2.j)("value", $user == null ? void 0 : $user.id, 0)} name="${"userId"}">
  <button type="${"submit"}" class="${"rounded-md border-2 bg-orange-500 p-2"}">Eat</button></form>`;
});
const U5Bproductu5D = (0, import_index_4c9ca1e2.c)(($$result, $$props, $$bindings, slots) => {
  let { product } = $$props;
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  return `${$$result.head += `${$$result.title = `<title>Edit or eat ${(0, import_index_4c9ca1e2.e)(product.name)}</title>`, ""}`, ""}
${(0, import_index_4c9ca1e2.v)(Editproduct, "Editproduct").$$render($$result, { product }, {}, {})}`;
});
