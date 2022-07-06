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
  default: () => Scan
});
module.exports = __toCommonJS(stdin_exports);
var import_index_4c9ca1e2 = require("../../chunks/index-4c9ca1e2.js");
var import_navigation_92f05dd6 = require("../../chunks/navigation-92f05dd6.js");
var import_stores_05d6f02b = require("../../chunks/stores-05d6f02b.js");
var import_koder = require("@maslick/koder");
var import_Clock_svelte_svelte_type_style_lang_4c88b239 = require("../../chunks/Clock.svelte_svelte_type_style_lang-4c88b239.js");
const Scanner = (0, import_index_4c9ca1e2.c)(($$result, $$props, $$bindings, slots) => {
  let { scanResult } = $$props;
  const canvas = document.createElement("canvas");
  canvas.getContext("2d");
  let video;
  let stream;
  function closeStream() {
    stream == null ? void 0 : stream.getTracks().forEach((track) => track.stop());
  }
  (0, import_index_4c9ca1e2.o)(() => {
    closeStream();
  });
  if ($$props.scanResult === void 0 && $$bindings.scanResult && scanResult !== void 0)
    $$bindings.scanResult(scanResult);
  return `<div class="${"mx-auto grid sm:max-w-sm"}">${`<div class="${"place-self-center"}">${(0, import_index_4c9ca1e2.v)(import_Clock_svelte_svelte_type_style_lang_4c88b239.C, "Circle").$$render($$result, { color: "#fdba74", size: "60" }, {}, {})}</div>`}
  
  <video class="${"rounded-md"}" playsinline${(0, import_index_4c9ca1e2.j)("this", video, 0)}></video></div>`;
});
function verifyCode(code) {
  return code !== null && (code.length === 13 || code.length === 8) && code.charAt(0) === "4";
}
const Scan = (0, import_index_4c9ca1e2.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_4c9ca1e2.a)(import_stores_05d6f02b.p, (value) => $page = value);
  let scanResult = null;
  async function addProductAndNavigate(code) {
    let res = await fetch("./scan", {
      method: "POST",
      body: JSON.stringify({ barCode: code })
    });
    if (res) {
      (0, import_navigation_92f05dd6.g)(`/products/${code}?meal=${$page.url.searchParams.get("meal")}`);
    }
  }
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if (verifyCode(scanResult)) {
          addProductAndNavigate(scanResult);
        }
      }
    }
    $$rendered = `${$$result.head += `${$$result.title = `<title>Food scanner</title>`, ""}`, ""}
${(0, import_index_4c9ca1e2.v)(Scanner, "Scanner").$$render($$result, { scanResult }, {
      scanResult: ($$value) => {
        scanResult = $$value;
        $$settled = false;
      }
    }, {})}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
