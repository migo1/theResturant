"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkresturant"] = self["webpackChunkresturant"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  text-decoration: none;\n  font-family: \"Lato\", sans-serif;\n}\n\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  overflow-x: hidden;\n}\n\nsection {\n  display: none;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 2.5rem;\n  background-color: #f5f5f5;\n}\n\n.top-logo {\n  border-radius: 50%;\n  width: 100px;\n  height: 60px;\n}\n\n.navigation {\n  display: flex;\n  justify-content: space-around;\n  list-style: none;\n  gap: 7rem;\n}\n\n.nav-item {\n  font-family: \"Lato\", sans-serif;\n}\n\n.nav-item a {\n  font-size: 1.8rem;\n  font-weight: bold;\n  text-decoration: none;\n  color: #d49a13;\n}\n\n.nav-item a:hover {\n  color: darkblue;\n  text-shadow: 1px 1px 4px black;\n}\n\n.menu {\n  padding: 2%;\n  padding-right: 2%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-content: space-around;\n}\n\n.comment-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  overflow-y: auto;\n  padding: 1%;\n  border: none;\n  border-radius: 1%;\n}\n\n.comment-modal::backdrop {\n  backdrop-filter: blur(2px);\n  background-color: rgb(181 181 181 / 50%);\n}\n\n.dialog-image {\n  height: 400px;\n  width: 500px;\n  border-radius: 2%;\n  object-fit: cover;\n  margin-bottom: 2%;\n}\n\n.comment-modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1%;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 3%;\n}\n\n.close-modal {\n  border: none;\n  font-size: 25px;\n  background-color: #fff;\n  cursor: pointer;\n}\n\n.comment-modal-body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 3%;\n}\n\n.comment-modal-user {\n  display: flex;\n  align-items: center;\n}\n\n.content-area {\n  border: none;\n  padding: 3%;\n  margin-bottom: 3%;\n  font-size: 20px;\n  background-color: #d49a13;\n  color: #fff;\n}\n\n.comment-modal-content {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 3%;\n}\n\n.comment-date {\n  font-style: italic;\n}\n\n.user-comment-container {\n  display: flex;\n  margin-bottom: 2%;\n}\n\n.comment-modal-name {\n  font-size: 18px;\n  font-weight: 600;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.comment-modal-comment {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.comment-modal-form {\n  display: flex;\n  flex-direction: column;\n  width: 92%;\n  margin: auto;\n}\n\n.username {\n  padding: 1%;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin-bottom: 2%;\n  outline: none;\n}\n\n.user-comment {\n  padding: 1%;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin-bottom: 2%;\n  outline: none;\n}\n\n.submit-comment {\n  padding: 1%;\n  border: none;\n  background-color: #3498db;\n  color: #fff;\n  font-weight: 600;\n  border-radius: 5px;\n  cursor: pointer;\n  width: 50%;\n  margin: auto;\n}\n\n.footer {\n  background-color: #f5f5f5;\n  padding: 10px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n  z-index: 5;\n  height: 50px;\n  margin-top: auto;\n}\n\n.footer-logo {\n  height: 80px;\n}\n\n.preloader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n\n.preloader-text {\n  color: #fff;\n  font-size: 24px;\n}\n\n.menu-card {\n  padding: 1%;\n  padding-top: 3%;\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  align-items: center;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n  transition: box-shadow 0.3s ease;\n  border-radius: 3%;\n  margin-bottom: 3%;\n  height: 380px;\n  border: none;\n}\n\n.menu-card:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n\n.menu-card img {\n  width: 250px;\n  object-fit: cover;\n  border-radius: 50%;\n  transition: transform 0.3s ease;\n  margin-bottom: 8%;\n}\n\n.menu-card:hover img {\n  transform: scale(1.1);\n}\n\n.meal-name {\n  margin-top: 3%;\n  margin-bottom: 5%;\n  border-bottom: gray 2px solid;\n  font-size: 20px;\n}\n\n.menu-card-content {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-around;\n}\n\n.count {\n  padding-left: 5px;\n  font-size: 20px;\n}\n\n.comment {\n  border: none;\n  padding: 2%;\n  background-color: #3498db;\n  color: #f8f2f2;\n  font-weight: 600;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.heart {\n  cursor: pointer;\n}\n\n.heart i {\n  color: #ccc;\n  transition: color 0.3s;\n  font-size: 25px;\n}\n\n.heart.clicked i {\n  color: #d49a13;\n  animation: pulse 0.5s;\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(1.5);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\nspan.comment-count {\n  margin-left: 10px;\n  color: black;\n  padding: 2px;\n  background-color: white;\n  border-radius: 50%;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://resturant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://resturant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://resturant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://resturant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://resturant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://resturant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://resturant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://resturant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://resturant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://resturant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/navigation.js */ \"./src/modules/navigation.js\");\n/* harmony import */ var _assets_Restaurant_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/Restaurant-logo.png */ \"./src/assets/Restaurant-logo.png\");\n/* harmony import */ var _modules_setupAppId_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/setupAppId.js */ \"./src/modules/setupAppId.js\");\n/* harmony import */ var _modules_fetchMenuData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/fetchMenuData.js */ \"./src/modules/fetchMenuData.js\");\n/* harmony import */ var _modules_menuItems_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/menuItems.js */ \"./src/modules/menuItems.js\");\n/* harmony import */ var _modules_mealsCounter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/mealsCounter.js */ \"./src/modules/mealsCounter.js\");\n/* harmony import */ var _modules_totalMeals_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/totalMeals.js */ \"./src/modules/totalMeals.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_setupAppId_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_navigation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst myIMage = new Image();\nmyIMage.src = _assets_Restaurant_logo_png__WEBPACK_IMPORTED_MODULE_2__;\nmyIMage.alt = \"logo\";\nmyIMage.classList.add(\"top-logo\");\nconst imageContainer = document.querySelector(\".nav-logo\");\nimageContainer.appendChild(myIMage);\n\nconst footerImage = new Image();\nfooterImage.src = _assets_Restaurant_logo_png__WEBPACK_IMPORTED_MODULE_2__;\nfooterImage.alt = \"logo\";\nfooterImage.classList.add(\"footer-logo\");\nconst footerImageContainer = document.querySelector(\".footer-img\");\nfooterImageContainer.appendChild(footerImage);\n\ndocument.addEventListener(\"DOMContentLoaded\", async () => {\n  try {\n    const preloader = document.querySelector(\".preloader\");\n    preloader.style.display = \"flex\";\n    const data = await (0,_modules_fetchMenuData_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    preloader.style.display = \"none\";\n    data.meals.forEach((meal) => {\n      (0,_modules_menuItems_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(meal);\n    });\n  } catch (error) {\n    const preloader = document.querySelector(\".preloader\");\n    preloader.style.display = \"none\";\n  }\n});\n\nconst mealsCounterElement = document.querySelector(\".meals-counter\");\n\nconst displayCounter = async () => {\n  const counter = await (0,_modules_mealsCounter_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  (0,_modules_totalMeals_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(mealsCounterElement, counter);\n};\n\ndisplayCounter();\n\n\n//# sourceURL=webpack://resturant/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countComments = async (itemId) => {\n  try {\n    const appId = localStorage.getItem(\"app_id\");\n    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${itemId}`;\n    const response = await fetch(url);\n    if (!response.ok) {\n      throw new Error(\"Failed to fetch comments\");\n    }\n    const comments = await response.json();\n    if (!comments || comments.length === 0) {\n      return 0;\n    }\n    return comments.length;\n  } catch (error) {\n    console.error(\"Error counting comments:\", error);\n    return 0;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);\n\n//# sourceURL=webpack://resturant/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/fetchComments.js":
/*!**************************************!*\
  !*** ./src/modules/fetchComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchComments = async (itemId) => {\n  try {\n    if (typeof itemId === \"undefined\") {\n      return [];\n    }\n    const appId = localStorage.getItem(\"app_id\");\n    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${itemId}`;\n    const response = await fetch(url);\n    if (response.status === 500) {\n      return []; // Return an empty array if status code is 500\n    }\n    if (!response.ok) {\n      throw new Error(\"Failed to fetch item comments\");\n    }\n    const comments = await response.json();\n    return comments;\n  } catch (error) {\n    console.error(\"Error fetching item comments:\", error);\n    throw error;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchComments);\n\n//# sourceURL=webpack://resturant/./src/modules/fetchComments.js?");

/***/ }),

/***/ "./src/modules/fetchMenuData.js":
/*!**************************************!*\
  !*** ./src/modules/fetchMenuData.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchMenuData = async () => {\n  try {\n    const response = await fetch(\"https://www.themealdb.com/api/json/v1/1/search.php?f=f\");\n\n    if (!response.ok) {\n      throw new Error(\"Failed to fetch data\");\n    }\n\n    const data = await response.json();\n\n    return data;\n  } catch (error) {\n    // eslint-disable-next-line no-console\n    console.error(\"Error:\", error);\n    throw error;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchMenuData);\n\n\n//# sourceURL=webpack://resturant/./src/modules/fetchMenuData.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function getLikes(itemId) {\n  try {\n    const appId = localStorage.getItem(\"app_id\");\n    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;\n    const response = await fetch(url);\n    const data = await response.json();\n    const item = data.find((item) => item.item_id === itemId);\n    return item ? item.likes : 0;\n  } catch (error) {\n    console.error(\"Error fetching data:\", error);\n    return 0;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n\n//# sourceURL=webpack://resturant/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/mealsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/mealsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mealsCounter = async () => {\n  try {\n    const response = await fetch(\"https://www.themealdb.com/api/json/v1/1/search.php?f=f\");\n    if (!response.ok) {\n      throw new Error(\"Failed to fetch comments\");\n    }\n\n    const data = await response.json();\n    return data.meals;\n  } catch (error) {\n    console.error(\"Error counting comments:\", error);\n    return 0;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealsCounter);\n\n\n//# sourceURL=webpack://resturant/./src/modules/mealsCounter.js?");

/***/ }),

/***/ "./src/modules/menuItems.js":
/*!**********************************!*\
  !*** ./src/modules/menuItems.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showComment.js */ \"./src/modules/showComment.js\");\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postLikes.js */ \"./src/modules/postLikes.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n/* harmony import */ var _totalComments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./totalComments.js */ \"./src/modules/totalComments.js\");\n\n\n\n\n\n\nconst menuItem = (data) => {\n  const menuSection = document.getElementById(\"menu\");\n  const menuCardContainer = document.createElement(\"div\");\n  menuCardContainer.classList.add(\"menu-card\");\n\n  const menuCardImage = document.createElement(\"div\");\n  menuCardImage.classList.add(\"menu-card-image\");\n\n  const image = document.createElement(\"img\");\n  image.src = data.strMealThumb;\n  image.alt = data.idMeal;\n\n  menuCardImage.appendChild(image);\n\n  const mealName = document.createElement(\"h3\");\n  mealName.classList.add(\"meal-name\");\n  mealName.textContent = data.strMeal;\n\n  const menuCardContent = document.createElement(\"div\");\n  menuCardContent.classList.add(\"menu-card-content\");\n\n  const heartSpan = document.createElement(\"span\");\n  heartSpan.classList.add(\"heart\");\n  const countSpan = document.createElement(\"span\");\n  heartSpan.addEventListener(\"click\", () => {\n    heartSpan.classList.toggle(\"clicked\");\n    setTimeout(() => {\n      heartSpan.classList.remove(\"clicked\");\n    }, 500);\n    (0,_postLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data.idMeal, countSpan);\n  });\n  const heartIcon = document.createElement(\"i\");\n  heartIcon.classList.add(\"fa-solid\", \"fa-heart\");\n  countSpan.classList.add(\"count\");\n\n  (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.idMeal).then((likes) => {\n    countSpan.textContent = likes;\n  });\n\n  heartSpan.appendChild(heartIcon);\n  heartSpan.appendChild(countSpan);\n\n  const commentButton = document.createElement(\"button\");\n  commentButton.classList.add(\"comment\");\n  commentButton.textContent = \"Comment\";\n  const commentCount = document.createElement(\"span\");\n  commentCount.classList.add(\"comment-count\");\n  const updateCommentCount = async () => {\n    const count = await (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data.idMeal);\n    (0,_totalComments_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(commentCount, count);\n  };\n  commentButton.addEventListener(\"click\", (0,_showComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data, menuSection, commentButton, commentCount));\n\n  commentButton.appendChild(commentCount);\n  menuCardContent.appendChild(heartSpan);\n  menuCardContent.appendChild(commentButton);\n\n  menuCardContainer.appendChild(menuCardImage);\n  menuCardContainer.appendChild(mealName);\n  menuCardContainer.appendChild(menuCardContent);\n\n  menuSection.appendChild(menuCardContainer);\n  updateCommentCount();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuItem);\n\n\n//# sourceURL=webpack://resturant/./src/modules/menuItems.js?");

/***/ }),

/***/ "./src/modules/navigation.js":
/*!***********************************!*\
  !*** ./src/modules/navigation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst navigation = () => {\n  const navigationLinks = document.querySelectorAll(\".navigation a\");\n\n  navigationLinks.forEach((link) => {\n    link.addEventListener(\"click\", (event) => {\n      event.preventDefault();\n\n      const targetSectionId = link.getAttribute(\"href\").substring(1);\n\n      const sections = document.querySelectorAll(\"section\");\n      sections.forEach((section) => {\n        section.style.display = \"none\";\n      });\n\n      const selectedSection = document.getElementById(targetSectionId);\n      selectedSection.style.display = \"flex\";\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigation);\n\n\n//# sourceURL=webpack://resturant/./src/modules/navigation.js?");

/***/ }),

/***/ "./src/modules/postLikes.js":
/*!**********************************!*\
  !*** ./src/modules/postLikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/getLikes.js\");\n\n\nconst postLikes = (idMeal, countSpan) => {\n  const appId = localStorage.getItem(\"app_id\");\n  const endpoint = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;\n\n  const data = {\n    item_id: idMeal,\n  };\n\n  fetch(endpoint, {\n    method: \"POST\",\n    body: JSON.stringify(data),\n    headers: {\n      \"Content-Type\": \"application/json\",\n    },\n  })\n    .then((response) => {\n      if (!response.ok) {\n        throw new Error(\"Failed to perform POST request\");\n      }\n      return (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(idMeal);\n    })\n    .then((likes) => {\n      countSpan.textContent = likes;\n    })\n    .catch((error) => {\n      console.error(\"Error:\", error.message);\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);\n\n\n//# sourceURL=webpack://resturant/./src/modules/postLikes.js?");

/***/ }),

/***/ "./src/modules/setupAppId.js":
/*!***********************************!*\
  !*** ./src/modules/setupAppId.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setupAppId = () => {\n  let appId = localStorage.getItem(\"app_id\");\n  if (!appId) {\n    appId = \"sLEAEJ02bZKmKMNcbWN3\";\n  }\n\n  localStorage.setItem(\"app_id\", appId);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupAppId);\n\n\n//# sourceURL=webpack://resturant/./src/modules/setupAppId.js?");

/***/ }),

/***/ "./src/modules/showComment.js":
/*!************************************!*\
  !*** ./src/modules/showComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchComments.js */ \"./src/modules/fetchComments.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\n\n\nconst showCommentModal = (data, menuSection, commentButton, commentCount) => {\n  const dialog = document.createElement(\"dialog\");\n  dialog.classList.add(\"comment-modal\");\n  const header = document.createElement(\"div\");\n  header.classList.add(\"comment-modal-header\");\n  const heading = document.createElement(\"h3\");\n  heading.textContent = data.strMeal;\n  const closeButton = document.createElement(\"button\");\n  closeButton.classList.add(\"close-modal\");\n  const closeIcon = document.createElement(\"i\");\n  closeIcon.classList.add(\"fa-solid\", \"fa-times\");\n  closeButton.appendChild(closeIcon);\n  header.appendChild(heading);\n  header.appendChild(closeButton);\n  const body = document.createElement(\"div\");\n  body.classList.add(\"comment-modal-body\");\n  const content = document.createElement(\"div\");\n  content.classList.add(\"comment-modal-body-content\");\n  const imageContainer = document.createElement(\"div\");\n  imageContainer.classList.add(\"comment-modal-body-content-image\");\n  const image = document.createElement(\"img\");\n  image.classList.add(\"dialog-image\");\n  image.src = data.strMealThumb;\n  image.alt = data.idMeal;\n  imageContainer.appendChild(image);\n  content.appendChild(imageContainer);\n  const area = document.createElement(\"button\");\n  area.classList.add(\"content-area\");\n  area.textContent = `area: ${data.strArea}`;\n  content.appendChild(area);\n  const textContainer = document.createElement(\"div\");\n  textContainer.classList.add(\"comment-modal-content\");\n\n  const populateComments = async () => {\n    const comments = await (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.idMeal);\n    textContainer.innerHTML = \"\";\n    comments.forEach((com) => {\n      const userCommentContainer = document.createElement(\"div\");\n      userCommentContainer.classList.add(\"user-comment-container\");\n      const date = document.createElement(\"p\");\n      date.classList.add(\"comment-date\");\n      date.textContent = `${com.creation_date} - `;\n      const nameParagraph = document.createElement(\"p\");\n      nameParagraph.classList.add(\"comment-modal-name\");\n      nameParagraph.textContent = `${com.username} : `;\n      const commentParagraph = document.createElement(\"p\");\n      commentParagraph.classList.add(\"comment-modal-comment\");\n      commentParagraph.textContent = com.comment;\n      userCommentContainer.append(date, nameParagraph, commentParagraph);\n      textContainer.appendChild(userCommentContainer);\n    });\n  };\n\n  content.appendChild(textContainer);\n  body.appendChild(content);\n  const footer = document.createElement(\"div\");\n  footer.classList.add(\"comment-modal-footer\");\n  const form = document.createElement(\"form\");\n  form.action = \"\";\n  form.classList.add(\"comment-modal-form\");\n  const nameInput = document.createElement(\"input\");\n  nameInput.type = \"text\";\n  nameInput.placeholder = \"Username\";\n  nameInput.name = \"username\";\n  nameInput.id = \"username\";\n  nameInput.classList.add(\"username\");\n  nameInput.required = true;\n  const commentTextarea = document.createElement(\"textarea\");\n  commentTextarea.name = \"comment\";\n  commentTextarea.id = \"user-comment\";\n  commentTextarea.cols = \"30\";\n  commentTextarea.rows = \"3\";\n  commentTextarea.placeholder = \"Comment\";\n  commentTextarea.classList.add(\"user-comment\");\n  commentTextarea.required = true;\n  const submitButton = document.createElement(\"button\");\n  submitButton.textContent = \"Submit\";\n  submitButton.classList.add(\"submit-comment\");\n  form.appendChild(nameInput);\n  form.appendChild(commentTextarea);\n  form.appendChild(submitButton);\n  footer.appendChild(form);\n  dialog.appendChild(header);\n  dialog.appendChild(body);\n  dialog.appendChild(footer);\n  menuSection.appendChild(dialog);\n\n  const submitComment = dialog.querySelector(\".comment-modal-form\");\n  submitComment.addEventListener(\"submit\", async (event) => {\n    event.preventDefault();\n    const commentData = {\n      item_id: data.idMeal,\n      username: event.target.username.value,\n      comment: event.target.comment.value,\n    };\n    try {\n      const appId = localStorage.getItem(\"app_id\");\n      const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;\n      const response = await fetch(url, {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify(commentData),\n      });\n      if (!response.ok) {\n        throw new Error(\"Failed to submit comment\");\n      }\n      form.reset();\n      const updatedComments = await (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.idMeal);\n      populateComments(updatedComments);\n      const count = await (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.idMeal);\n      commentCount.textContent = count;\n    } catch (error) {\n      console.error(\"Error submitting comment:\", error);\n    }\n  });\n  commentButton.addEventListener(\"click\", () => {\n    dialog.showModal();\n    (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.idMeal)\n      .then((comments) => {\n        console.log(\"loaded comments:\", comments);\n        populateComments(comments);\n      })\n      .catch((error) => {\n        console.error(\"Error fetching comments:\", error);\n      });\n  });\n  closeButton.addEventListener(\"click\", () => {\n    dialog.close();\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCommentModal);\n\n\n//# sourceURL=webpack://resturant/./src/modules/showComment.js?");

/***/ }),

/***/ "./src/modules/totalComments.js":
/*!**************************************!*\
  !*** ./src/modules/totalComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst totalComments = (element, data) => {\n  element.textContent = data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (totalComments);\n\n//# sourceURL=webpack://resturant/./src/modules/totalComments.js?");

/***/ }),

/***/ "./src/modules/totalMeals.js":
/*!***********************************!*\
  !*** ./src/modules/totalMeals.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst totalMeals = (mealsCounterElement, data) => {\n  mealsCounterElement.textContent = data.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (totalMeals);\n\n\n//# sourceURL=webpack://resturant/./src/modules/totalMeals.js?");

/***/ }),

/***/ "./src/assets/Restaurant-logo.png":
/*!****************************************!*\
  !*** ./src/assets/Restaurant-logo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7e51a68623a639ffbbf6.png\";\n\n//# sourceURL=webpack://resturant/./src/assets/Restaurant-logo.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);