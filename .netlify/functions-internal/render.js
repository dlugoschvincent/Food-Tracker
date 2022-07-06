const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["app_1.png","apple-touch-icon.png","favicon-32x32.png","favicon.png","icon-192x192.png","icon-512x512.png","manifest.json","zbar.wasm","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".wasm":"application/wasm"},
	_: {
		entry: {"file":"start-9adb1234.js","imports":["start-9adb1234.js","chunks/index-9908a5f7.js","chunks/preload-helper-8fa5f165.js","chunks/singletons-d1fb5791.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "chart",
				pattern: /^\/chart\/?$/,
				names: [],
				types: [],
				path: "/chart",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "scan",
				pattern: /^\/scan\/?$/,
				names: [],
				types: [],
				path: "/scan",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/scan.ts.js')),
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "products/[product]",
				pattern: /^\/products\/([^/]+?)\/?$/,
				names: ["product"],
				types: [null],
				path: null,
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/products/_product_.ts.js')),
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "[date=isodate]",
				pattern: /^\/([^/]+?)\/?$/,
				names: ["date"],
				types: ["isodate"],
				path: null,
				shadow: null,
				a: [0,6],
				b: [1]
			}
		],
		matchers: async () => {
			const { match: isodate } = await Promise.resolve().then(() => require('../server/entries/matchers/isodate.js'))
			return { isodate };
		}
	}
});
