import { p as decodeKey } from './chunks/astro/server_BYmE0RZ7.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DmZ2Vkh6.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/","cacheDir":"file:///Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/node_modules/.astro/","outDir":"file:///Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/dist/","srcDir":"file:///Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/src/","publicDir":"file:///Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/public/","buildClientDir":"file:///Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/dist/client/","buildServerDir":"file:///Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.16.1_@types+node@24.10.1_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30._8984f450df547908b3c9add41a407419/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.Uei93AS4.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.16.1_@types+node@24.10.1_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30._8984f450df547908b3c9add41a407419/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_sq0LVDBP.mjs","/Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/node_modules/.pnpm/astro@5.16.1_@types+node@24.10.1_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30._8984f450df547908b3c9add41a407419/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_szgfRu83.mjs","/Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BHULAeOy.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/calumbradley/Developer/calumbradley.dev/calumbradley.dev/src/components/Header.astro?astro&type=script&index=0&lang.ts","const o=document.querySelector(\"#menu-button\"),i=document.querySelector(\"#main-menu\"),s=document.querySelectorAll(\"#main-menu > ul > li > a\"),r=()=>{i?.classList.toggle(\"hidden\");const e=i?.classList.contains(\"hidden\");o?.setAttribute(\"aria-expanded\",`${!e}`)};o?.addEventListener(\"click\",r);s.forEach(e=>{e?.addEventListener(\"click\",r)});const n=new IntersectionObserver(e=>{e.forEach(c=>{c.isIntersecting&&s.forEach(t=>{t.getAttribute(\"href\")===`#${c.target.id}`?t.classList.add(\"text-white\",\"md:after:opacity-100\"):t.classList.remove(\"text-white\",\"md:after:opacity-100\")})})},{threshold:.5});document.querySelectorAll(\"section\").forEach(e=>{n.observe(e)});document.onvisibilitychange=()=>{document.visibilityState===\"hidden\"?n.disconnect():document.querySelectorAll(\"section\").forEach(e=>{n.observe(e)})};"]],"assets":["/_astro/be-vietnam-pro-vietnamese-400-normal.CRcqvyg1.woff2","/_astro/gabarito-latin-ext-wght-normal.C-_vgDbo.woff2","/_astro/be-vietnam-pro-latin-ext-400-normal.CiZNW1ec.woff2","/_astro/be-vietnam-pro-latin-400-normal.PpnXBOrz.woff2","/_astro/gabarito-latin-wght-normal.ZpvQqcqY.woff2","/_astro/be-vietnam-pro-vietnamese-400-normal.BuGn0gnm.woff","/_astro/be-vietnam-pro-latin-ext-400-normal.DYBYyMQr.woff","/_astro/be-vietnam-pro-latin-400-normal.bXgqVju9.woff","/_astro/index.Uei93AS4.css","/calum-big.png","/calum-small.png","/check.svg","/external.svg","/favicon.svg","/menu.svg","/og-calum.svg","/raja.png"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"tAp9NqpoEWQMiqcjoDQIzIYQiLsAo7Ptl2Ash/iAFXw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
