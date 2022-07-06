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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_4c9ca1e2 = require("../../chunks/index-4c9ca1e2.js");
var import_supabaseclient_1f639638 = require("../../chunks/supabaseclient-1f639638.js");
var import_userStore_9ba28c0f = require("../../chunks/userStore-9ba28c0f.js");
var import_supabase_js = require("@supabase/supabase-js");
var import_index_f1067c1f = require("../../chunks/index-f1067c1f.js");
var app = /* @__PURE__ */ (() => ".disable-anchor {\n  --tw-bg-opacity: 1;\n  background-color: rgba(156, 163, 175, var(--tw-bg-opacity));\n  pointer-events: none;\n}")();
var windi = /* @__PURE__ */ (() => `/* windicss layer base */
[type='text'], [type='email'], [type='url'], [type='password'], [type='number'], [type='date'], [type='datetime-local'], [type='month'], [type='search'], [type='tel'], [type='time'], [type='week'], [multiple], textarea, select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
}
[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  border-color: #2563eb;
}
[type='checkbox'], [type='radio'] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
}
[type='checkbox']:focus, [type='radio']:focus {
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  border-color: #6b7280;
}
[type='checkbox']:checked, [type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
[type='checkbox']:checked:hover, [type='checkbox']:checked:focus, [type='radio']:checked:hover, [type='radio']:checked:focus {
  border-color: transparent;
  background-color: currentColor;
}
[type='checkbox']:indeterminate:hover, [type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}
*, ::before, ::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
}
* {
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
}
:root {
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}
:-moz-focusring {
  outline: 1px dotted ButtonText;
}
:-moz-ui-invalid {
  box-shadow: none;
}
::moz-focus-inner {
  border-style: none;
  padding: 0;
}
::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
  height: auto;
}
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}
::-webkit-date-and-time-value {
  min-height: 1.5em;
}
[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[multiple] {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
  print-color-adjust: unset;
}
[type='checkbox'] {
  border-radius: 0px;
}
[type='radio'] {
  border-radius: 100%;
}
[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}
[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}
[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}
[type='file']:focus {
  outline: 1px solid ButtonText;
  outline: 1px auto -webkit-focus-ring-color;
}
abbr[title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}
a {
  color: inherit;
  text-decoration: inherit;
}
body {
  margin: 0;
  font-family: inherit;
  line-height: inherit;
}
button {
  text-transform: none;
  background-color: transparent;
  background-image: none;
}
button, [type='button'], [type='reset'], [type='submit'] {
  -webkit-appearance: button;
}
button, [role="button"] {
  cursor: pointer;
}
canvas, video {
  display: block;
  vertical-align: middle;
}
html {
  -webkit-text-size-adjust: 100%;
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  line-height: 1.5;
}
h2 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}
input, button {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  padding: 0;
  line-height: inherit;
  color: inherit;
}
input::placeholder {
  opacity: 1;
  color: #9ca3af;
}
input::webkit-input-placeholder {
  opacity: 1;
  color: #9ca3af;
}
input::-moz-placeholder {
  opacity: 1;
  color: #9ca3af;
}
input:-ms-input-placeholder {
  opacity: 1;
  color: #9ca3af;
}
input::-ms-input-placeholder {
  opacity: 1;
  color: #9ca3af;
}
input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6b7280;
  opacity: 1;
}
input::-ms-input-placeholder, textarea::-ms-input-placeholder {
  color: #6b7280;
  opacity: 1;
}
input::placeholder, textarea::placeholder {
  color: #6b7280;
  opacity: 1;
}
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
video {
  max-width: 100%;
  height: auto;
}
/* windicss layer components */

/* windicss layer utilities */
.container {
  width: 100%;
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
.bg-orange-300 {
  --tw-bg-opacity: 1;
  background-color: rgba(253, 186, 116, var(--tw-bg-opacity));
}
.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgba(239, 68, 68, var(--tw-bg-opacity));
}
.bg-orange-500 {
  --tw-bg-opacity: 1;
  background-color: rgba(249, 115, 22, var(--tw-bg-opacity));
}
.bg-orange-400 {
  --tw-bg-opacity: 1;
  background-color: rgba(251, 146, 60, var(--tw-bg-opacity));
}
.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgba(220, 38, 38, var(--tw-bg-opacity));
}
.border-orange-100 {
  --tw-border-opacity: 1;
  border-color: rgba(255, 237, 213, var(--tw-border-opacity));
}
.border-orange-200 {
  --tw-border-opacity: 1;
  border-color: rgba(254, 215, 170, var(--tw-border-opacity));
}
.border-transparent {
  border-color: transparent;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-full {
  border-radius: 9999px;
}
.border-2 {
  border-width: 2px;
}
.border-t-2 {
  border-top-width: 2px;
}
.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.grid {
  display: -ms-grid;
  display: grid;
}
.hidden {
  display: none;
}
.place-items-center {
  place-items: center;
}
.place-self-center {
  -ms-grid-row-align: center;
  -ms-grid-column-align: center;
  place-self: center;
}
.items-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.justify-end {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
}
.justify-between {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.justify-self-end {
  -ms-grid-column-align: end;
  justify-self: end;
}
.h-screen {
  height: 100vh;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}
.mt-4 {
  margin-top: 1rem;
}
.max-w-xl {
  max-width: 36rem;
}
.outline-orange-300 {
  --tw-outline-opacity: 1;
  outline-color: rgba(253, 186, 116, var(--tw-outline-opacity));
}
.p-2 {
  padding: 0.5rem;
}
.p-4 {
  padding: 1rem;
}
.text-red-600 {
  --tw-text-opacity: 1;
  color: rgba(220, 38, 38, var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}
.align-middle {
  vertical-align: middle;
}
.w-72 {
  width: 18rem;
}
.gap-4 {
  grid-gap: 1rem;
  gap: 1rem;
}
.gap-8 {
  grid-gap: 2rem;
  gap: 2rem;
}
.grid-flow-col {
  grid-auto-flow: column;
}
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.col-span-2 {
  -ms-grid-column-span: span 2 / span 2;
  grid-column: span 2 / span 2;
}
.col-span-1 {
  -ms-grid-column-span: span 1 / span 1;
  grid-column: span 1 / span 1;
}
.auto-rows-max {
  grid-auto-rows: -webkit-max-content;
  grid-auto-rows: max-content;
}
@media (min-width: 640px) {
  .sm\\:flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }
  .sm\\:hidden {
    display: none;
  }
  .sm\\:max-w-sm {
    max-width: 24rem;
  }
}`)();
const Login = (0, import_index_4c9ca1e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<form class="${"col-span-2 grid gap-4"}"><input required class="${"col-span-2 rounded-md border-2 border-orange-100 p-2 outline-orange-300"}" type="${"email"}" name="${"email"}" placeholder="${"Email"}">
  <input required class="${"col-span-2 rounded-md border-2 border-orange-100 p-2 outline-orange-300"}" type="${"password"}" name="${"password"}" placeholder="${"Password"}">
  <button class="${"col-span-2 rounded-md bg-orange-400 p-2"}" type="${"submit"}">Login</button>
  ${``}</form>`;
});
const User = (0, import_index_4c9ca1e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"grid w-72 grid-cols-2 gap-4 rounded-md border-2 border-orange-200 p-4"}"><button class="${[
    "col-span-1 rounded-md bg-orange-300 p-2",
    ""
  ].join(" ").trim()}">Sign Up</button>
  <button class="${[
    "col-span-1 rounded-md bg-orange-300 p-2",
    "bg-orange-500"
  ].join(" ").trim()}">Login</button>
  ${`${(0, import_index_4c9ca1e2.v)(Login, "Login").$$render($$result, {}, {}, {})}`}</div>`;
});
const Logout = (0, import_index_4c9ca1e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<button class="${"rounded-md bg-red-600 p-2 text-white"}">Logout</button>`;
});
const Navbar = (0, import_index_4c9ca1e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"bg-orange-300"}"><div class="${"container mx-auto grid grid-flow-col items-center justify-between p-4"}"><div class="${"text-xl"}"><a href="${"/" + (0, import_index_4c9ca1e2.e)(new Date().toISOString().slice(0, 10))}">Home</a></div>
    <div class="${"hidden items-center justify-end gap-8 sm:flex"}">${(0, import_index_4c9ca1e2.v)(Logout, "Logout").$$render($$result, {}, {}, {})}</div>
    <div class="${"flex gap-4 sm:hidden"}">${(0, import_index_4c9ca1e2.v)(Logout, "Logout").$$render($$result, {}, {}, {})}</div></div></nav>`;
});
const _layout = (0, import_index_4c9ca1e2.c)(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = (0, import_index_4c9ca1e2.a)(import_userStore_9ba28c0f.u, (value) => $user = value);
  import_supabaseclient_1f639638.s.auth.onAuthStateChange((_) => {
    if (_ === "SIGNED_IN") {
      import_userStore_9ba28c0f.u.set(import_supabaseclient_1f639638.s.auth.user());
    }
    if (_ === "SIGNED_OUT") {
      import_userStore_9ba28c0f.u.set(null);
    }
  });
  $$unsubscribe_user();
  return `${$user ? `${(0, import_index_4c9ca1e2.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}
  <main class="${"container mx-auto p-4"}">${slots.default ? slots.default({}) : ``}</main>` : `<div class="${"grid h-screen place-items-center"}">${(0, import_index_4c9ca1e2.v)(User, "User").$$render($$result, {}, {}, {})}</div>`}`;
});
