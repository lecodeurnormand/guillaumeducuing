exports.ids = [2];
exports.modules = {

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("5ae43ee2", content, true, context)
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Form.vue?vue&type=template&id=4f8f0a10&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "section-form"
  }, [_vm._ssrNode("<h2><span class=\"button-heading\">Contact</span></h2> <div class=\"formulaire\"><form action=\"https://formspree.io/f/xpznjnyd\" method=\"POST\"><div class=\"name\"><label for=\"name\"></label> <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"NOM\" autocomplete=\"off\" required=\"required\"></div> <div class=\"mail\"><label for=\"email\"></label> <input type=\"email\" id=\"mail\" name=\"email\" placeholder=\"E-MAIL\" autocomplete=\"off\" required=\"required\"></div> <div id=\"liencontact\"></div> <div class=\"phone\"><label for=\"phone\"></label> <input type=\"phone\" id=\"phone\" name=\"telephone\" placeholder=\"TELEPHONE\" autocomplete=\"off\" required=\"required\"></div> <div class=\"msg\"><label for=\"msg\"></label> <textarea id=\"msg\" name=\"message\" placeholder=\"VOTRE MESSAGE\" autocomplete=\"off\" required=\"required\"></textarea></div> <div class=\"button\"><button type=\"submit\" name=\"submit\">Envoyer</button></div></form></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Form.vue?vue&type=template&id=4f8f0a10&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Form.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
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
  "7a95f792"
  
)

/* harmony default export */ var Form = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Form: __webpack_require__(32).default})


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_4f8f0a10_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_4f8f0a10_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_4f8f0a10_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_4f8f0a10_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_4f8f0a10_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".formulaire{display:flex}#imagecontact{margin-top:3em;width:100%;margin-bottom:2em}.barreformcontact{background-color:#fff;width:26.4em;height:2px;margin-left:50px;margin-top:-20px}form{padding-top:60px;color:#00dc81;text-transform:uppercase;letter-spacing:3px;margin:auto;width:80%}input::-moz-placeholder{color:#00dc81;opacity:.5}input::placeholder{color:#00dc81;opacity:.5}input:focus::-moz-placeholder{transform:translateX(-100%);-moz-transition:all 2.6s ease;transition:all 2.6s ease}input:focus::placeholder{transform:translateX(-100%);transition:all 2.6s ease}input{color:#fff}#mail,#name,#phone{background:transparent;letter-spacing:3px;margin-bottom:20px;width:12em;height:2.5em;border:none;border-bottom:1px solid #fff;font-family:\"Montserrat\",Arial,sans-serif;outline:none}#mail{width:300px}textarea#msg{border:.1px solid #fff}textarea::-moz-placeholder{color:#00dc81;opacity:.5}textarea::placeholder{color:#00dc81;opacity:.5}#msg{font-family:\"Montserrat\",Arial,sans-serif;outline:none;background:transparent;color:#fff;border:0;width:100%;height:20em;padding:20px;resize:none}.mail,.name{display:inline-flex}.msg{display:block;width:100%;margin:auto}.formulaire button{margin-top:20px;padding:8px;width:8em;height:2.5em;font-family:\"Montserrat\",Arial,sans-serif;background-color:transparent;color:#fff;text-transform:uppercase;letter-spacing:3px;transition-property:background-color}.formulaire button,button:hover{border:1px solid #00dc81;transition-duration:.6s}button:hover{cursor:pointer;background-color:#00dc81;color:#000;transition-property:all}.button{display:flex;justify-content:flex-end}@media screen and (max-width:80em){.formulaire{bottom:0;right:0;width:100%;height:100%;background-color:transparent}form{font-family:\"Montserrat\",Arial,sans-serif;color:#fff;text-transform:uppercase;margin:auto;width:80vw}#mail,#msg,#name,#phone,form{display:block;letter-spacing:3px}#mail,#msg,#name,#phone{margin:auto auto 1.2em;width:60%;height:2.5em;border:0;padding-left:20px}.mail,.name{display:flex;text-align:center}#msg{display:block;border:0;height:20em;resize:none;width:85%}.msg,button{display:block;margin:auto}button{right:25%;left:25%}button:hover{cursor:pointer;border:1px solid #fff;color:#fff;background-color:wheat;transition-property:background-color;transition-duration:.6s}input,textarea{font-size:15px}input:focus::-moz-placeholder{transform:translateX(-100%);-moz-transition:all 2.6s ease;transition:all 2.6s ease}input:focus::placeholder{transform:translateX(-100%);transition:all 2.6s ease}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=form.js.map