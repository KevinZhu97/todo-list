/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    margin: 0;\\n}\\n\\n.header {\\n    background-color: gray;\\n    display: flex;\\n    justify-content: flex-start;\\n    align-items: center;\\n    background-color: #68A7AD;\\n    color: #F1EEE9;\\n}\\n\\n.header h1 {\\n    font-size: 2.5rem;\\n}\\n\\n.header img {\\n    height: 6rem;\\n    width: 6rem;\\n}\\n\\n.content {\\n    display: flex;\\n}\\n\\n.nav {\\n    background-color: lightgray;\\n    min-width: 200px;\\n    width: 20%;\\n    height: 82vh;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.inbox {\\n    margin-top: 1rem;\\n}\\n\\nbutton {\\n    display: flex;\\n    align-items: center;\\n    padding: 0;\\n    width: 85%;\\n    border-radius: 5px;\\n    background: none;\\n    border: none;\\n    font-size: 1rem;\\n}\\n\\nbutton:hover {\\n    background-color: darkgray;\\n}\\n\\n.nav img {\\n    height: 1rem;\\n    width: 1rem;\\n    margin: 1rem;\\n}\\n\\n.nav h1 {\\n    width: 85%;\\n}\\n\\n.to-do-preview {\\n    background-color: white;\\n}\\n\\n.preview-content {\\n    padding: 0 1rem;\\n    margin: 0;\\n}\\n\\n.add-project {\\n    padding: 1rem;\\n}\\n\\n.footer {\\n    background-color: rgba(25,25,25,0.5);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100%;\\n    text-align: center;\\n    font-weight: bold;\\n    font-family: Arial, Helvetica, sans-serif;\\n    color: white;\\n    background-color: #68A7AD;\\n}\\n\\n.footer img {\\n    width: 1.2rem;\\n    height: 1.2rem;\\n    padding-left: 0.2rem;\\n    transition: transform .5s ease-in-out;\\n    filter: brightness(0) invert(1);\\n}\\n\\n.footer img:hover {\\n    transform: rotate(360deg);\\n}\\n\\n.project-tab {\\n    width: 85%;\\n}\\n\\n.add-project.popup {\\n    display: none;\\n}\\n\\n.add-input-container {\\n    display: none\\n}\\n\\n.add-input-container.active {\\n    display: block;\\n}\\n\\n.add-project-popup-input {\\n    width: 88%;\\n    padding: 10px;\\n    border-radius: 5px;\\n    border: 1px solid gray;\\n    \\n}\\n\\n.project-popup-buttons {\\n    display: flex;\\n    justify-content: space-between;\\n    gap: 20px;\\n    margin: 10px 0;\\n}\\n\\n.project-popup-buttons button {\\n    justify-content: center;\\n    padding: 1rem;\\n    border: 1px solid lightgray;\\n}\\n\\n.add-button {\\n    background-color: #B4FF9F;\\n}\\n\\n.cancel-button {\\n    background-color: #FFA1A1;\\n}\\n\\n.added-project-button {\\n    padding: 2px;\\n}\\n\\n.button-project {\\n    padding: 6px;\\n    display: flex;\\n    align-items: center;\\n    border-radius: 5px;\\n}\\n\\n.button-project:hover {\\n    background-color: darkgray;\\n}\\n\\n.button-project img {\\n    margin: 0 8px;\\n}\\n\\n.preview-content {\\n    margin: 1rem 1rem;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.inbox-add-task-button {\\n    padding: 6px;\\n    display: flex;\\n    align-items: center;\\n    border-radius: 5px;\\n    width: 100px;\\n    padding-left: 0;\\n    margin-left: 1rem;\\n}\\n\\n.inbox-add-task-button.hideme {\\n    display: none;\\n\\n}\\n\\n.task-popup-buttons {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.add-cancel-task-button-container {\\n    display: flex;\\n    gap: 2rem;\\n}\\n\\n.add-cancel-task-button-container button {\\n    text-align: center;\\n    align-items: center;\\n    justify-content: center;\\n    padding: 10px;\\n    border: 1px solid lightgray\\n}\\n\\n.to-do-preview {\\n    width: 80vw;\\n}\\n\\n.task-list {\\n    margin: 1rem;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.inbox-content {\\n    font-size: 2rem;\\n    font-weight: bolder;\\n    margin-bottom: 1rem;\\n}\\n\\n.task-input {\\n    border-radius: 5px;\\n    padding: 10px;\\n    border: 1px solid #aaa;\\n    margin-bottom: 10px;\\n}\\n\\n.single-task-container {\\n    padding: 10px;\\n}\\n\\n.single-task-container:hover {\\n    background-color: lightgray;\\n    border-radius: 5px;\\n}\\n\\n.project-content {\\n    font-size: 2rem;\\n    font-weight: bolder;\\n    margin-bottom: 1rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/add-project.js":
/*!****************************!*\
  !*** ./src/add-project.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectPopup\": () => (/* binding */ addProjectPopup),\n/* harmony export */   \"cancelAddInputPopup\": () => (/* binding */ cancelAddInputPopup)\n/* harmony export */ });\nconst addProjectButton = document.querySelector('.add-project')\nconst addInputContainer = document.querySelector('.add-input-container')\nconst cancelAddInputButton = document.querySelector('.cancel-button')\n\nfunction addProjectPopup() {\n    addProjectButton.classList.add('popup')\n    addInputContainer.classList.add('active')\n    const input = document.getElementById('project-input')\n    input.value = \"\";\n    input.focus();\n}\n\nfunction cancelAddInputPopup() {\n    addProjectButton.classList.remove('popup')\n    addInputContainer.classList.remove('active')\n    input.value = '';\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/add-project.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _add_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-project.js */ \"./src/add-project.js\");\n/* harmony import */ var _save_inputs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save-inputs.js */ \"./src/save-inputs.js\");\n/* harmony import */ var _preview_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview.js */ \"./src/preview.js\");\n\n\n\n\n\n//when clicking add project, should get a pop up\nconst addProjectButton = document.querySelector('.add-project')\nconst cancelAddInputButton = document.querySelector('.cancel-button')\nconst addInputButton = document.querySelector('.add-button')\nconst inboxButton = document.querySelector('.inbox')\nconst previewPage = document.querySelector('.preview-content')\n\ncancelAddInputButton.addEventListener('click', () => {\n    ;(0,_add_project_js__WEBPACK_IMPORTED_MODULE_1__.cancelAddInputPopup)();\n});\n\naddProjectButton.addEventListener('click', () => {\n    (0,_add_project_js__WEBPACK_IMPORTED_MODULE_1__.addProjectPopup)();\n});\n\naddInputButton.addEventListener('click', () => {\n    (0,_save_inputs_js__WEBPACK_IMPORTED_MODULE_2__.addProjectInput)(); \n})\n\ninboxButton.addEventListener('click', () => {\n    previewPage.innerHTML = '';\n    (0,_preview_js__WEBPACK_IMPORTED_MODULE_3__.createInboxPreview)();\n})\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/preview.js":
/*!************************!*\
  !*** ./src/preview.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAddCancelButtons\": () => (/* binding */ createAddCancelButtons),\n/* harmony export */   \"createInboxPreview\": () => (/* binding */ createInboxPreview)\n/* harmony export */ });\n\nvar toDoList = []\nconst previewPage = document.querySelector('.preview-content')\nconst mainPreviewPage = document.querySelector('.to-do-preview')\n\nfunction createInboxPreview() {\n    const inboxContainer = document.createElement('p')\n    inboxContainer.classList.add('inbox-content')\n    inboxContainer.innerText = \"Inbox\"\n    const addTaskButton = document.createElement('button')\n    addTaskButton.classList.add('inbox-add-task-button')\n    addTaskButton.innerText = '➕ Add Task'\n    addTaskButton.addEventListener('click', () => {\n        createAddCancelButtons()\n        addTaskButton.classList.add('hideme')\n    })\n\n    previewPage.appendChild(inboxContainer)\n    previewPage.appendChild(addTaskButton)\n    createInboxTask()\n}\n\nfunction createAddCancelButtons() {\n    const taskPopupButtons = document.createElement('div')\n    taskPopupButtons.classList.add('task-popup-buttons')\n\n    const taskInput = document.createElement('input')\n    taskInput.classList.add('task-input')\n\n    const addCancelTaskContainer = document.createElement('div')\n    addCancelTaskContainer.classList.add('add-cancel-task-button-container')\n    const addTaskToListButton = document.createElement('button')\n    addTaskToListButton.classList.add('add-button')\n    addTaskToListButton.innerText = \"Add\"\n    addTaskToListButton.addEventListener('click', () => {\n        if (taskInput.value != '') {\n            //how to make this more universal instead of just inbox to do list\n            toDoList.push(taskInput.value)\n            const addTaskButton2 = document.querySelector('.inbox-add-task-button')\n            addTaskButton2.classList.remove('hideme')\n            taskInput.value = '';\n            taskPopupButtons.remove();\n            createInboxTask()\n        } else {\n            alert('Do not leave empty')\n        };\n    })\n    const cancelTaskToListButton = document.createElement('button')\n    cancelTaskToListButton.classList.add('cancel-button')\n    cancelTaskToListButton.innerText = \"Cancel\"\n    cancelTaskToListButton.addEventListener('click', () => {\n        const addTaskButton2 = document.querySelector('.inbox-add-task-button')\n        addTaskButton2.classList.remove('hideme')\n        taskPopupButtons.remove();\n    })\n\n    previewPage.appendChild(taskPopupButtons)\n    addCancelTaskContainer.appendChild(addTaskToListButton)\n    addCancelTaskContainer.appendChild(cancelTaskToListButton)\n    taskPopupButtons.appendChild(taskInput)\n    taskPopupButtons.appendChild(addCancelTaskContainer)\n}\n\nfunction createInboxTask() {\n    const taskList = document.querySelector('.task-list')\n    taskList.innerHTML = '';\n    toDoList.forEach(element => {\n        const singleTaskContainer = document.createElement('div')\n        singleTaskContainer.classList.add('single-task-container')\n        const taskCheckbox = document.createElement('input')\n        taskCheckbox.type = 'checkbox'\n        const taskCheckboxLabel = document.createElement('label')\n        taskCheckboxLabel.innerText = element;\n        taskCheckboxLabel.setAttribute('for', 'checkbox')\n        taskCheckbox.setAttribute('id', 'checkbox')\n        taskList.appendChild(singleTaskContainer)\n        singleTaskContainer.appendChild(taskCheckbox)\n        singleTaskContainer.appendChild(taskCheckboxLabel)\n        taskCheckbox.addEventListener('change', () => {\n            if (taskCheckbox.checked) {\n                singleTaskContainer.remove();\n                console.log(toDoList)\n                for (var i = 0; i < toDoList.length; i++) {\n                    if (element == toDoList[i]) {\n                        toDoList.splice(i, 1)\n                    }\n                }\n            }\n        })\n    })\n}\n\n\n//# sourceURL=webpack://todo-list/./src/preview.js?");

/***/ }),

/***/ "./src/save-inputs.js":
/*!****************************!*\
  !*** ./src/save-inputs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectInput\": () => (/* binding */ addProjectInput)\n/* harmony export */ });\n\n\nconst addProjectButton = document.querySelector('.add-project')\nconst addInputContainer = document.querySelector('.add-input-container')\nconst addedProjectTab = document.querySelector('.added-projects')\nconst previewPage = document.querySelector('.preview-content')\nconst taskList = document.querySelector('.task-list')\n\n\nvar projectInputs = []\n\nfunction addProjectInput() {\n    addProjectButton.classList.remove('popup')\n    addInputContainer.classList.remove('active')\n    const input = document.getElementById('project-input')\n    projectInputs.push(input.value)\n    createFunctionList();\n    console.log(projectInputs)\n};\n\nfunction createFunctionList() {\n    addedProjectTab.innerHTML = '';\n    projectInputs.forEach(element => {\n        var projectArray = [];\n        //create an array for each item in an array\n        //create an object with a constructor that stores an array\n        const checklistImage = document.createElement('img')\n        checklistImage.src = 'checklist-svgrepo-com.svg'\n        const newProjectContainer = document.createElement('div')\n        newProjectContainer.classList.add('button-project')\n        const newProject = document.createElement('button')\n        newProject.classList.add('added-project-button')\n        newProject.innerText = element\n        addedProjectTab.appendChild(newProjectContainer)\n        newProjectContainer.appendChild(checklistImage)\n        newProjectContainer.appendChild(newProject)\n        newProject.addEventListener('click', () => {\n            createProjectOnPreview(element, projectArray)\n        })\n    })\n}\n\n\nfunction createProjectOnPreview(projectName, testing123) {\n    previewPage.innerHTML = '';\n    taskList.innerHTML = '';    \n    const projectContainer = document.createElement('p')\n    projectContainer.classList.add('project-content')\n    projectContainer.innerText = projectName\n    const addTaskButton = document.createElement('button')\n    addTaskButton.classList.add('inbox-add-task-button')\n    addTaskButton.innerText = '➕ Add Task'\n    addTaskButton.addEventListener('click', () => {\n        createAddCancelButtonsProjectSide(testing123)\n        addTaskButton.classList.add('hideme')\n        })\n    \n\n    previewPage.appendChild(projectContainer)\n    previewPage.appendChild(addTaskButton)\n    createProjectTask(testing123)\n}\n\n// Modify the existing function to create individual to do tasks for each projects instead of the one from inbox\nfunction createAddCancelButtonsProjectSide(IndividualProjectTask2) {\n    const taskPopupButtons = document.createElement('div')\n    taskPopupButtons.classList.add('task-popup-buttons')\n\n    const taskInput = document.createElement('input')\n    taskInput.classList.add('task-input')\n\n    const addCancelTaskContainer = document.createElement('div')\n    addCancelTaskContainer.classList.add('add-cancel-task-button-container')\n    const addTaskToListButton = document.createElement('button')\n    addTaskToListButton.classList.add('add-button')\n    addTaskToListButton.innerText = \"Add\"\n    addTaskToListButton.addEventListener('click', () => {\n        if (taskInput.value != '') {\n            //how to make this more universal instead of just inbox to do list\n            IndividualProjectTask2.push(taskInput.value)\n            const addTaskButton2 = document.querySelector('.inbox-add-task-button')\n            addTaskButton2.classList.remove('hideme')\n            taskInput.value = '';\n            taskPopupButtons.remove();\n            createProjectTask(IndividualProjectTask2)\n        } else {\n            alert('Do not leave empty')\n        };\n    })\n    const cancelTaskToListButton = document.createElement('button')\n    cancelTaskToListButton.classList.add('cancel-button')\n    cancelTaskToListButton.innerText = \"Cancel\"\n    cancelTaskToListButton.addEventListener('click', () => {\n        const addTaskButton2 = document.querySelector('.inbox-add-task-button')\n        addTaskButton2.classList.remove('hideme')\n        taskPopupButtons.remove();\n    })\n\n    previewPage.appendChild(taskPopupButtons)\n    addCancelTaskContainer.appendChild(addTaskToListButton)\n    addCancelTaskContainer.appendChild(cancelTaskToListButton)\n    taskPopupButtons.appendChild(taskInput)\n    taskPopupButtons.appendChild(addCancelTaskContainer)\n}\n\nfunction createProjectTask(testing44) {\n    const taskList = document.querySelector('.task-list')\n    taskList.innerHTML = '';\n    testing44.forEach(element => {\n        const singleTaskContainer = document.createElement('div')\n        singleTaskContainer.classList.add('single-task-container')\n        const taskCheckbox = document.createElement('input')\n        taskCheckbox.type = 'checkbox'\n        const taskCheckboxLabel = document.createElement('label')\n        taskCheckboxLabel.innerText = element;\n        taskCheckboxLabel.setAttribute('for', 'checkbox')\n        taskCheckbox.setAttribute('id', 'checkbox')\n        taskList.appendChild(singleTaskContainer)\n        singleTaskContainer.appendChild(taskCheckbox)\n        singleTaskContainer.appendChild(taskCheckboxLabel)\n        taskCheckbox.addEventListener('change', () => {\n            if (taskCheckbox.checked) {\n                singleTaskContainer.remove();\n                console.log(toDoList)\n                for (var i = 0; i < toDoList.length; i++) {\n                    if (element == toDoList[i]) {\n                        testing44.splice(i, 1)\n                    }\n                }\n            }\n        })\n    })\n}\n\n\n//# sourceURL=webpack://todo-list/./src/save-inputs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;