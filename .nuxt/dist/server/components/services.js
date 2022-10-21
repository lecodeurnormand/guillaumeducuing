exports.ids = [6];
exports.modules = {

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("3e4c8f46", content, true, context)
};

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzkyLjggMS4yYy0xNy00LjktMzQuNyA1LTM5LjYgMjJsLTEyOCA0NDhjLTQuOSAxNyA1IDM0LjcgMjIgMzkuNnMzNC43LTUgMzkuNi0yMmwxMjgtNDQ4YzQuOS0xNy01LTM0LjctMjItMzkuNnptODAuNiAxMjAuMWMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNMNTYyLjcgMjU2bC04OS40IDg5LjRjLTEyLjUgMTIuNS0xMi41IDMyLjggMCA0NS4zczMyLjggMTIuNSA0NS4zIDBsMTEyLTExMmMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM2wtMTEyLTExMmMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDB6bS0zMDYuNyAwYy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMGwtMTEyIDExMmMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNsMTEyIDExMmMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMHMxMi41LTMyLjggMC00NS4zTDc3LjMgMjU2bDg5LjQtODkuNGMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM3oiLz48L3N2Zz4="

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNy44IDIwNy43Yy0xMy4xLTE3LjgtOS4zLTQyLjggOC41LTU1LjlMMTQyLjkgNTguNUMxNjYuMiA0MS4zIDE5NC41IDMyIDIyMy41IDMySDM4NCA1NDRjMTcuNyAwIDMyIDE0LjMgMzIgMzJ2NjRjMCAxNy43LTE0LjMgMzItMzIgMzJINTA3LjJsLTQ0LjkgMzZjLTIyLjcgMTguMi01MC45IDI4LTgwIDI4SDMwNCAyODggMjI0Yy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMyaDY0IDE2YzguOCAwIDE2LTcuMiAxNi0xNnMtNy4yLTE2LTE2LTE2SDE4My40TDYzLjcgMjE2LjJjLTE3LjggMTMuMS00Mi44IDkuMy01NS45LTguNXpNMzgyLjQgMTYwbDAgMCAuOSAwYy0uMyAwLS42IDAtLjkgMHpNNTY4LjIgMzA0LjNjMTMuMSAxNy44IDkuMyA0Mi44LTguNSA1NS45TDQzMy4xIDQ1My41Yy0yMy40IDE3LjItNTEuNiAyNi41LTgwLjcgMjYuNUgxOTIgMzJjLTE3LjcgMC0zMi0xNC4zLTMyLTMyVjM4NGMwLTE3LjcgMTQuMy0zMiAzMi0zMkg2OC44bDQ0LjktMzZjMjIuNy0xOC4yIDUwLjktMjggODAtMjhIMjcyaDE2IDY0YzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMySDI4OCAyNzJjLTguOCAwLTE2IDcuMi0xNiAxNnM3LjIgMTYgMTYgMTZIMzkyLjZsMTE5LjctODguMmMxNy44LTEzLjEgNDIuOC05LjMgNTUuOSA4LjV6TTE5My42IDM1MmwwIDAtLjkgMGMuMyAwIC42IDAgLjkgMHoiLz48L3N2Zz4="

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/maintenance.c942a99.svg";

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_251d3147_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_251d3147_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_251d3147_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_251d3147_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_251d3147_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".section-services .containerservice{display:flex;flex-direction:column;max-width:100%;padding-right:50px;padding-left:50px;flex-wrap:wrap;justify-content:flex-start;margin:4em auto auto}.section-services .container-serv{display:flex;justify-content:flex-start;align-items:stretch}.section-services .container-serv .cadreservice{position:relative;min-width:20em;height:15em;margin:1em;border:1px solid #fff;box-shadow:0 0 15px 0 rgba(89,89,89,.75);color:#00dc81;transition:.3s ease-in}.section-services .container-serv .cadreservice:hover{background-color:#fff;color:#00dc81;box-shadow:0 0 20px 0 hsla(0,0%,100%,.75)}.section-services .container-serv .cadreservice.cs1{animation:move 3s ease infinite alternate-reverse}.section-services .container-serv .cadreservice.cs2{animation:move 3.5s ease infinite alternate-reverse}.section-services .container-serv .cadreservice.cs3{animation:move 3.9s ease infinite alternate-reverse}@keyframes move{0%{transform:translate(-20px) rotate(-1.5deg)}to{transform:translate(-20px) rotate(3deg)}}.section-services .container-serv .cadreservice p{text-align:center;margin:150px auto auto;font-size:1.3em}.section-services .container-serv .cadreservice img{position:relative;display:block;width:40px;top:50%;transform:translateY(-50%);margin:auto;color:#032d3d;z-index:1}.section-services .container-serv .cadreservice .pulsar{position:absolute;display:block;margin:auto;left:25%;right:25%;height:5rem;width:5rem;top:25%;bottom:25%;background-color:#fff;opacity:.5s;border-radius:50% 50%;transform:scale(1);animation:pulse 3s infinite}@keyframes pulse{0%{transform:scale(.95);box-shadow:0 0 0 0 hsla(0,0%,100%,.75)}70%{transform:scale(1);box-shadow:0 0 0 10px hsla(0,0%,100%,0)}to{transform:scale(.95)}}.section-services .container-serv .container-text h3{color:#00dc81}@media screen and (max-width:80em){.containerservice{margin:inherit;padding:inherit}.container-serv{max-width:100%;flex-wrap:wrap;justify-content:center;margin:auto;padding:auto}.container-serv .container-text{display:flex;flex-direction:column;margin:auto;text-align:center;padding:inherit;justify-content:center;align-self:center}.section-services .container-serv .cadreservice{margin:50px auto}.container-text p{text-align:justify;margin:auto}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Services.vue?vue&type=template&id=251d3147&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "section-services"
  }, [_vm._ssrNode("<div id=\"services\"></div> <h2><span class=\"button-heading\">Services</span></h2> <div class=\"containerservice\"><div class=\"container-serv\"><div class=\"cadreservice cs1\"><img" + _vm._ssrAttr("src", __webpack_require__(51)) + " alt><div class=\"pulsar\"></div><p>Developpement web</p></div> <div class=\"container-text\"><h3>Code code code</h3> <p>Votre site sera livré avec la possibilité de modifier le contenu par vous-même. Je travaille essentiellement avec Nuxtjs et Prismic.</p></div></div> <div class=\"container-serv\"><div class=\"cadreservice cs2\"><img" + _vm._ssrAttr("src", __webpack_require__(52)) + " alt><div class=\"pulsar\"></div><p>Accompagnement</p></div> <div class=\"container-text\"><h3>Not alone</h3> <p>Pendant toute la mission, je vous tiendrais informé de l'avancée du projet. Nous échangerons afin d'affiner au maximum vos besoins. Lorsque le site sera prêt, je vous formerai à l'utilisation très simple du CMS.</p></div></div> <div class=\"container-serv\"><div class=\"cadreservice cs3\"><img" + _vm._ssrAttr("src", __webpack_require__(53)) + " alt><div class=\"pulsar\"></div><p>Maintenance</p></div> <div class=\"container-text\"><h3>I'll be there for you</h3> <p>Si vous le souhaitez, je peux gérer entièrement le site de sa conception à son hébergement,sa maintenance et son optimsation SEO.</p></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Services.vue?vue&type=template&id=251d3147&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Services.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4e75c551"
  
)

/* harmony default export */ var Services = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=services.js.map