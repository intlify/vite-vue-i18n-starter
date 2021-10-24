import { d as defineComponent, r as ref, u as useI18n, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as createTextVNode, F as Fragment, o as openBlock, e as resolveComponent, w as withDirectives, v as vModelSelect, f as createVNode, p as pushScopeId, g as popScopeId, h as createI18n, i as createApp } from "./vendor.110c07f8.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
function block0(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "hello": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Hello Vue I18n 9 \u{1F30F}!"]);
        },
        "count": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["count is: ", _interpolate(_named("count"))]);
        },
        "docs": {
          "vue-i18n": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Vue I18n v9 Documentation"]);
          },
          "vite-plugin": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Vite Plugin Vue I18n Documentation"]);
          }
        },
        "recommended": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recommended setup"]);
        }
      },
      "ja": {
        "hello": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u3053\u3093\u306B\u3061\u306F Vue I18n 9 \u{1F30F}\uFF01"]);
        },
        "count": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["\u30AB\u30A6\u30F3\u30C8\u306F", _interpolate(_named("count")), "\u3067\u3059"]);
        },
        "docs": {
          "vue-i18n": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Vue I18n v9 \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"]);
          },
          "vite-plugin": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Vite \u30D7\u30E9\u30B0\u30A4\u30F3 Vue I18n \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"]);
          }
        },
        "recommended": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u63A8\u5968\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7"]);
        }
      }
    }
  });
}
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$1 = defineComponent({
  name: "HelloI18n",
  setup() {
    const count = ref(0);
    const { t } = useI18n({
      inheritLocale: true
    });
    return { count, t };
  }
});
const _hoisted_1$1 = {
  href: "https://vue-i18n.intlify.dev/",
  target: "_blank"
};
const _hoisted_2$1 = /* @__PURE__ */ createTextVNode(" | ");
const _hoisted_3$1 = {
  href: "https://github.com/intlify/vite-plugin-vue-i18n#globe_with_meridians-intlifyvite-plugin-vue-i18n",
  target: "_blank"
};
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("a", {
  href: "https://github.com/lokalise/i18n-ally/",
  target: "_blank"
}, "i18n ally (Visutal Studio Code extension)", -1);
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" + ");
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("a", {
  href: "https://eslint-plugin-vue-i18n.intlify.dev/",
  target: "_blank"
}, "eslint-plugin-vue-i18n", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("h1", null, toDisplayString(_ctx.t("hello")), 1),
    createBaseVNode("button", {
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.count++)
    }, toDisplayString(_ctx.t("count", { count: _ctx.count })), 1),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_1$1, toDisplayString(_ctx.t("docs.vue-i18n")), 1),
      _hoisted_2$1,
      createBaseVNode("a", _hoisted_3$1, toDisplayString(_ctx.t("docs.vite-plugin")), 1)
    ]),
    createBaseVNode("p", null, [
      createTextVNode(toDisplayString(_ctx.t("recommended")) + ": ", 1),
      _hoisted_4$1,
      _hoisted_5,
      _hoisted_6
    ])
  ], 64);
}
if (typeof block0 === "function")
  block0(_sfc_main$1);
var HelloI18n = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var _imports_0 = "/assets/logo.366ae38d.png";
var App_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "App",
  components: {
    HelloI18n
  },
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-226a80c4"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  alt: "Vue I18n logo",
  src: _imports_0
}, null, -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "en" }, "en", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "ja" }, "ja", -1));
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HelloI18n = resolveComponent("HelloI18n");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("form", null, [
      createBaseVNode("label", null, toDisplayString(_ctx.t("language")), 1),
      withDirectives(createBaseVNode("select", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.locale = $event)
      }, _hoisted_4, 512), [
        [vModelSelect, _ctx.locale]
      ])
    ]),
    createVNode(_component_HelloI18n)
  ], 64);
}
var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-226a80c4"]]);
var index = "";
var messages = {
  "en": {
    "language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Languages"]);
    }
  },
  "ja": {
    "language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8A00\u8A9E"]);
    }
  }
};
const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages
});
createApp(App).use(i18n).mount("#app");
