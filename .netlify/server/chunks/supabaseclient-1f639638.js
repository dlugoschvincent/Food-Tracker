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
  s: () => supabase
});
module.exports = __toCommonJS(stdin_exports);
var import_supabase_js = require("@supabase/supabase-js");
const supabaseUrl = "https://bdfuxqqzjbhtavckyave.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkZnV4cXF6amJodGF2Y2t5YXZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTUwNjg2MjYsImV4cCI6MTk3MDY0NDYyNn0.3qyLXGVLvFoeK7AwLg30ZCQHm7tJQskXV8aZi3VnEho";
const supabase = (0, import_supabase_js.createClient)(supabaseUrl, supabaseAnonKey);
