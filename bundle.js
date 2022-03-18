/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _views_mainPage_mainPageUI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/mainPage/mainPageUI.js */ "./src/js/views/mainPage/mainPageUI.js");
/* harmony import */ var _localStorage_videoStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage/videoStorage.js */ "./src/js/localStorage/videoStorage.js");
/* harmony import */ var _views_mainPage_mainPageEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/mainPage/mainPageEvents.js */ "./src/js/views/mainPage/mainPageEvents.js");
/* harmony import */ var _views_modal_modalEvents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/modal/modalEvents.js */ "./src/js/views/modal/modalEvents.js");
/* harmony import */ var _views_searchSuggestion_searchSuggestionEvents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/searchSuggestion/searchSuggestionEvents.js */ "./src/js/views/searchSuggestion/searchSuggestionEvents.js");





function App() {
  window.addEventListener('DOMContentLoaded', function () {
    (0,_views_mainPage_mainPageEvents_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_views_modal_modalEvents_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_views_searchSuggestion_searchSuggestionEvents_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  });
  var savedVideos = _localStorage_videoStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSavedVideos();
  _views_mainPage_mainPageUI_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderSavedVideoItems(savedVideos);
}

/***/ }),

/***/ "./src/js/constants/conditions.js":
/*!****************************************!*\
  !*** ./src/js/constants/conditions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAX_SAVED_VIDEOS_NUMBER": () => (/* binding */ MAX_SAVED_VIDEOS_NUMBER)
/* harmony export */ });
var MAX_SAVED_VIDEOS_NUMBER = 100;

/***/ }),

/***/ "./src/js/constants/error.js":
/*!***********************************!*\
  !*** ./src/js/constants/error.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERROR": () => (/* binding */ ERROR)
/* harmony export */ });
var ERROR = {
  MESSAGE: {
    EMPTY_INPUT: '빈값을 입력할 수 없습니다. 다시 입력해 주세요.',
    ALREADY_SAVED_VIDEOS: '이미 저장된 동영상입니다.',
    OVER_MAX_SAVED_VIDEOS_NUMBER: '저장할 수 있는 동영상의 개수가 초과되었습니다.',
    API_DISABLE: '오늘의 검색API 할당량이 소진되었습니다.'
  },
  CODE: {
    API_DISABLE: 403
  }
};

/***/ }),

/***/ "./src/js/handlers/modalHandle.js":
/*!****************************************!*\
  !*** ./src/js/handlers/modalHandle.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleModalClose": () => (/* binding */ handleModalClose)
/* harmony export */ });
/* harmony import */ var _utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/querySelector.js */ "./src/js/utils/querySelector.js");
/* harmony import */ var _views_mainPage_mainPageUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/mainPage/mainPageUI.js */ "./src/js/views/mainPage/mainPageUI.js");
/* harmony import */ var _localStorage_videoStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localStorage/videoStorage.js */ "./src/js/localStorage/videoStorage.js");



var handleModalClose = function handleModalClose() {
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.modal-container').classList.toggle('hide');
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('#app').classList.toggle('wrapper'); // 모달 초기화

  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').replaceChildren();
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('#search-input-keyword').value = '';
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.no-result').hidden = true;
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.suggestion').hidden = true;
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video-list').replaceChildren();
  var savedVideos = _localStorage_videoStorage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getSavedVideos();
  _views_mainPage_mainPageUI_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderSavedVideoItems(savedVideos);
};

/***/ }),

/***/ "./src/js/handlers/saveVideoHandle.js":
/*!********************************************!*\
  !*** ./src/js/handlers/saveVideoHandle.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleSaveButtonClick": () => (/* binding */ handleSaveButtonClick)
/* harmony export */ });
/* harmony import */ var _localStorage_videoStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localStorage/videoStorage.js */ "./src/js/localStorage/videoStorage.js");
/* harmony import */ var _validates_validate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validates/validate.js */ "./src/js/validates/validate.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var getVideoObjectFromElement = function getVideoObjectFromElement(element) {
  return {
    id: element.dataset.videoId,
    imgSrc: element.children[0].currentSrc,
    title: element.children[1].textContent,
    channelTitle: element.children[2].textContent,
    publishedDate: element.children[3].textContent,
    watched: false
  };
};

var handleSaveButtonClick = function handleSaveButtonClick(e) {
  if (!e.target.classList.contains('video-item__save-button')) {
    return;
  }

  try {
    var saveTargetVideo = getVideoObjectFromElement(e.target.parentElement);
    var savedVideos = _localStorage_videoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].getSavedVideos(); // 저장된 비디오가 없는 경우, 바로 저장

    if (!savedVideos) {
      _localStorage_videoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].setSavedVideos([saveTargetVideo]);
      return;
    } // 저장된 비디오가 있는 경우, 뒤에 추가


    (0,_validates_validate_js__WEBPACK_IMPORTED_MODULE_1__.validateAbleToSaveVideo)(savedVideos, saveTargetVideo);
    _localStorage_videoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].setSavedVideos([].concat(_toConsumableArray(savedVideos), [saveTargetVideo]));
  } catch (error) {
    alert(error.message);
  } finally {
    var saveVideoButton = e.target.closest('button');
    saveVideoButton.disabled = true;
  }
};

/***/ }),

/***/ "./src/js/handlers/savedVideoButtonHandle.js":
/*!***************************************************!*\
  !*** ./src/js/handlers/savedVideoButtonHandle.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleDeleteButtonClick": () => (/* binding */ handleDeleteButtonClick),
/* harmony export */   "handleWatchedButtonClick": () => (/* binding */ handleWatchedButtonClick)
/* harmony export */ });
/* harmony import */ var _utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/querySelector.js */ "./src/js/utils/querySelector.js");
/* harmony import */ var _localStorage_videoStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../localStorage/videoStorage.js */ "./src/js/localStorage/videoStorage.js");
/* harmony import */ var _views_mainPage_mainPageUI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/mainPage/mainPageUI.js */ "./src/js/views/mainPage/mainPageUI.js");



var handleWatchedButtonClick = function handleWatchedButtonClick(e) {
  var targetVideo = e.target.parentElement.parentElement;
  var savedVideos = _localStorage_videoStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSavedVideos();
  var newSavedVideos = savedVideos.map(function (savedVideo) {
    if (savedVideo.id === targetVideo.dataset.videoId) {
      savedVideo.watched = true;
      return savedVideo;
    }

    return savedVideo;
  });
  _localStorage_videoStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"].setSavedVideos(newSavedVideos);
  targetVideo.remove();
};
var handleDeleteButtonClick = function handleDeleteButtonClick(e) {
  var targetVideo = e.target.parentElement.parentElement;
  var savedVideos = _localStorage_videoStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSavedVideos();
  var newSavedVideos = savedVideos.filter(function (savedVideo) {
    return savedVideo.id !== targetVideo.dataset.videoId;
  }); // 삭제 후 더이상 비디오가 없는 경우

  if (newSavedVideos.length === 0) {
    _localStorage_videoStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"].removeSavedVideo();
    (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video').hidden = true;
    _views_mainPage_mainPageUI_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderNothingSavedImage();
    return;
  }

  _localStorage_videoStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"].setSavedVideos(newSavedVideos);
  targetVideo.remove();
};

/***/ }),

/***/ "./src/js/handlers/searchHandle.js":
/*!*****************************************!*\
  !*** ./src/js/handlers/searchHandle.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleScrollSearch": () => (/* binding */ handleScrollSearch),
/* harmony export */   "handleSearch": () => (/* binding */ handleSearch)
/* harmony export */ });
/* harmony import */ var _utils_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/scroll.js */ "./src/js/utils/scroll.js");
/* harmony import */ var _utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/querySelector.js */ "./src/js/utils/querySelector.js");
/* harmony import */ var _service_YoutubeSearchAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/YoutubeSearchAPI.js */ "./src/js/service/YoutubeSearchAPI.js");
/* harmony import */ var _views_modal_modalUI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/modal/modalUI.js */ "./src/js/views/modal/modalUI.js");
/* harmony import */ var _validates_validate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validates/validate.js */ "./src/js/validates/validate.js");





var youtubeSearchAPI = new _service_YoutubeSearchAPI_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
var handleSearch = function handleSearch() {
  try {
    youtubeSearchAPI.resetSearchResults();
    _views_modal_modalUI_js__WEBPACK_IMPORTED_MODULE_3__["default"].resetVideoList();
    (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.suggestion').hidden = true;
    var searchKeyword = (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('#search-input-keyword').value.trim();
    (0,_validates_validate_js__WEBPACK_IMPORTED_MODULE_4__.validateInput)(searchKeyword);
    _views_modal_modalUI_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderSkeletonUI();
    var response = youtubeSearchAPI.callSearchAPI(searchKeyword);
    youtubeSearchAPI.updateSearchResults(response);
    _views_modal_modalUI_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderSearchResult(response);
  } catch (error) {
    alert(error.message);
  }
};
var handleScrollSearch = function handleScrollSearch(e) {
  try {
    if ((0,_utils_scroll_js__WEBPACK_IMPORTED_MODULE_0__.isEndOfScroll)(e.target)) {
      _views_modal_modalUI_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderSkeletonUI();
      var searchKeyword = (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('#search-input-keyword').value.trim();
      var response = youtubeSearchAPI.callSearchAPI(searchKeyword);
      youtubeSearchAPI.updateSearchResults(response);
      _views_modal_modalUI_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderAdditionalSearchResult(response);
    }
  } catch (error) {
    alert(error.message);
  }
};

/***/ }),

/***/ "./src/js/handlers/searchSuggestionHandle.js":
/*!***************************************************!*\
  !*** ./src/js/handlers/searchSuggestionHandle.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleClickSuggestion": () => (/* binding */ handleClickSuggestion),
/* harmony export */   "handleKeyupSuggestion": () => (/* binding */ handleKeyupSuggestion)
/* harmony export */ });
/* harmony import */ var _utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/querySelector.js */ "./src/js/utils/querySelector.js");
/* harmony import */ var _service_GoogleSuggestAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/GoogleSuggestAPI.js */ "./src/js/service/GoogleSuggestAPI.js");
/* harmony import */ var _views_searchSuggestion_searchSuggestionUI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/searchSuggestion/searchSuggestionUI.js */ "./src/js/views/searchSuggestion/searchSuggestionUI.js");



var googleSuggestAPI = new _service_GoogleSuggestAPI_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

var handleSuggestion = function handleSuggestion(targetKeyword) {
  if (targetKeyword.length == 0) {
    return;
  }

  var response = googleSuggestAPI.callSuggestAPI(targetKeyword);
  response.then(function (data) {
    var isValidData = data[1].length !== 0;
    var isEmptySuggestionList = (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('#suggestion-list').children.length === 0;

    if (isValidData && isEmptySuggestionList) {
      var suggestions = data[1];
      _views_searchSuggestion_searchSuggestionUI_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderSuggestionList(suggestions);
    }
  });
};

var handleKeyupSuggestion = function handleKeyupSuggestion(e) {
  var targetKeyword = e.target.value;
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.suggestion').hidden = true;
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('#suggestion-list').replaceChildren();

  if (e.key === 'Enter') {
    return;
  }

  handleSuggestion(targetKeyword);
};
var handleClickSuggestion = function handleClickSuggestion(e) {
  var targetKeyword = e.target.value;
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.suggestion').hidden = true;
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('#suggestion-list').replaceChildren();
  handleSuggestion(targetKeyword);
};

/***/ }),

/***/ "./src/js/handlers/showSavedVideosHandle.js":
/*!**************************************************!*\
  !*** ./src/js/handlers/showSavedVideosHandle.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleGonnaWatchToggleClick": () => (/* binding */ handleGonnaWatchToggleClick),
/* harmony export */   "handleWatchedToggleClick": () => (/* binding */ handleWatchedToggleClick)
/* harmony export */ });
/* harmony import */ var _utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/querySelector.js */ "./src/js/utils/querySelector.js");
/* harmony import */ var _views_mainPage_mainPageUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/mainPage/mainPageUI.js */ "./src/js/views/mainPage/mainPageUI.js");
/* harmony import */ var _localStorage_videoStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localStorage/videoStorage.js */ "./src/js/localStorage/videoStorage.js");



var handleGonnaWatchToggleClick = function handleGonnaWatchToggleClick() {
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('#gonna-watch-button').classList.add('checked');
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('#watched-button').classList.remove('checked');
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video-list').classList.remove('watched-list');
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video-list').replaceChildren();
  var savedVideos = _localStorage_videoStorage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getSavedVideos();
  _views_mainPage_mainPageUI_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderSavedVideoItems(savedVideos);
};
var handleWatchedToggleClick = function handleWatchedToggleClick() {
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('#watched-button').classList.add('checked');
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('#gonna-watch-button').classList.remove('checked');
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video-list').classList.add('watched-list');
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video-list').replaceChildren();
  var savedVideos = _localStorage_videoStorage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getSavedVideos();
  _views_mainPage_mainPageUI_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderSavedVideoItems(savedVideos);
};

/***/ }),

/***/ "./src/js/localStorage/videoStorage.js":
/*!*********************************************!*\
  !*** ./src/js/localStorage/videoStorage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var LOCAL_STORAGE_KEY__SAVED_VIDEO = 'saved-videos';
var videoStorage = {
  setSavedVideos: function setSavedVideos(video) {
    localStorage.setItem(LOCAL_STORAGE_KEY__SAVED_VIDEO, JSON.stringify(video));
  },
  getSavedVideos: function getSavedVideos() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY__SAVED_VIDEO));
  },
  removeSavedVideo: function removeSavedVideo() {
    localStorage.removeItem(LOCAL_STORAGE_KEY__SAVED_VIDEO);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (videoStorage);

/***/ }),

/***/ "./src/js/service/GoogleSuggestAPI.js":
/*!********************************************!*\
  !*** ./src/js/service/GoogleSuggestAPI.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoogleSuggestAPI)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var GoogleSuggestAPI = /*#__PURE__*/function () {
  function GoogleSuggestAPI() {
    _classCallCheck(this, GoogleSuggestAPI);
  }

  _createClass(GoogleSuggestAPI, [{
    key: "convertToCorsUrl",
    value: function convertToCorsUrl(url) {
      var protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';
      return protocol + '//cors-anywhere.herokuapp.com/' + url;
    }
  }, {
    key: "callSuggestAPI",
    value: function callSuggestAPI(targetKeyword) {
      var URL = this.convertToCorsUrl("https://suggestqueries.google.com/complete/search?output=firefox&q=".concat(targetKeyword));
      return fetch(URL).then(function (response) {
        return response.json();
      });
    }
  }]);

  return GoogleSuggestAPI;
}();



/***/ }),

/***/ "./src/js/service/YoutubeSearchAPI.js":
/*!********************************************!*\
  !*** ./src/js/service/YoutubeSearchAPI.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YoutubeSearchAPI)
/* harmony export */ });
/* harmony import */ var _constants_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error */ "./src/js/constants/error.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _searchResults = /*#__PURE__*/new WeakMap();

var YoutubeSearchAPI = /*#__PURE__*/function () {
  function YoutubeSearchAPI() {
    _classCallCheck(this, YoutubeSearchAPI);

    _classPrivateFieldInitSpec(this, _searchResults, {
      writable: true,
      value: {}
    });
  }

  _createClass(YoutubeSearchAPI, [{
    key: "searchResults",
    get: function get() {
      return _classPrivateFieldGet(this, _searchResults);
    },
    set: function set(searchResults) {
      _classPrivateFieldSet(this, _searchResults, searchResults);
    }
  }, {
    key: "resetSearchResults",
    value: function resetSearchResults() {
      _classPrivateFieldSet(this, _searchResults, {});
    }
  }, {
    key: "updateSearchResults",
    value: function updateSearchResults(response) {
      var _this = this;

      response.then(function (searchResults) {
        _this.searchResults = searchResults;
      });
    }
  }, {
    key: "getURL",
    value: function getURL(searchKeyword, nextPageToken) {
      var url = new URL('youtube/v3/search', 'https://onstar.netlify.app');
      var parameter = new URLSearchParams({
        part: 'snippet',
        maxResults: 10,
        q: searchKeyword,
        pageToken: nextPageToken || '',
        type: 'video'
      });
      url.search = parameter.toString();
      return url.href;
    }
  }, {
    key: "callSearchAPI",
    value: function callSearchAPI(searchKeyword) {
      var URL = _classPrivateFieldGet(this, _searchResults) ? this.getURL(searchKeyword, _classPrivateFieldGet(this, _searchResults).nextPageToken) : this.getURL(searchKeyword);
      return fetch(URL).then(function (response) {
        if (response.ok) {
          return response.json();
        }

        if (response.status === _constants_error__WEBPACK_IMPORTED_MODULE_0__.ERROR.CODE.API_DISABLE) {
          throw new Error(_constants_error__WEBPACK_IMPORTED_MODULE_0__.ERROR.MESSAGE.API_DISABLE);
        }
      });
    }
  }]);

  return YoutubeSearchAPI;
}();



/***/ }),

/***/ "./src/js/utils/debounce.js":
/*!**********************************!*\
  !*** ./src/js/utils/debounce.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SUGGESTION_DEBOUNCE_DELAY": () => (/* binding */ SUGGESTION_DEBOUNCE_DELAY),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SUGGESTION_DEBOUNCE_DELAY = 150;

var debounce = function debounce(callBack, delay) {
  var timeout;
  return function () {
    var _arguments = arguments,
        _this = this;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      callBack.apply(_this, _arguments);
    }, delay);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);

/***/ }),

/***/ "./src/js/utils/formatDate.js":
/*!************************************!*\
  !*** ./src/js/utils/formatDate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDate": () => (/* binding */ formatDate)
/* harmony export */ });
var formatDate = function formatDate(date) {
  var newDate = new Date(date);
  return newDate.getFullYear() + '년 ' + (newDate.getMonth() + 1) + '월 ' + newDate.getDate() + '일 ';
};

/***/ }),

/***/ "./src/js/utils/querySelector.js":
/*!***************************************!*\
  !*** ./src/js/utils/querySelector.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$$": () => (/* binding */ $$)
/* harmony export */ });
var $ = function $(selector) {
  return document.querySelector(selector);
};
var $$ = function $$(selector) {
  return document.querySelectorAll(selector);
};

/***/ }),

/***/ "./src/js/utils/scroll.js":
/*!********************************!*\
  !*** ./src/js/utils/scroll.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isEndOfScroll": () => (/* binding */ isEndOfScroll)
/* harmony export */ });
var SCROLL_OFFSET = 50;
var isEndOfScroll = function isEndOfScroll(element) {
  return element.scrollTop + element.clientHeight >= element.scrollHeight - SCROLL_OFFSET;
};

/***/ }),

/***/ "./src/js/utils/throttle.js":
/*!**********************************!*\
  !*** ./src/js/utils/throttle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SCROLL_THROTTLE_DELAY": () => (/* binding */ SCROLL_THROTTLE_DELAY),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SCROLL_THROTTLE_DELAY = 500;

var throttle = function throttle(callBack, delay) {
  var timer;
  return function () {
    var _arguments = arguments,
        _this = this;

    if (!timer) {
      timer = setTimeout(function () {
        timer = null;
        callBack.apply(_this, _arguments);
      }, delay);
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (throttle);

/***/ }),

/***/ "./src/js/validates/validate.js":
/*!**************************************!*\
  !*** ./src/js/validates/validate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateAbleToSaveVideo": () => (/* binding */ validateAbleToSaveVideo),
/* harmony export */   "validateInput": () => (/* binding */ validateInput)
/* harmony export */ });
/* harmony import */ var _constants_error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error.js */ "./src/js/constants/error.js");
/* harmony import */ var _constants_conditions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/conditions.js */ "./src/js/constants/conditions.js");


var validateInput = function validateInput(input) {
  if (!input) {
    throw new Error(_constants_error_js__WEBPACK_IMPORTED_MODULE_0__.ERROR.MESSAGE.EMPTY_INPUT);
  }
};
var validateAbleToSaveVideo = function validateAbleToSaveVideo(savedVideos, saveTargetVideo) {
  if (savedVideos.length > _constants_conditions_js__WEBPACK_IMPORTED_MODULE_1__.MAX_SAVED_VIDEOS_NUMBER) {
    throw new Error(_constants_error_js__WEBPACK_IMPORTED_MODULE_0__.ERROR.MESSAGE.OVER_MAX_SAVED_VIDEOS_NUMBER);
  }

  if (savedVideos.some(function (savedVideo) {
    return savedVideo.id === saveTargetVideo.id;
  })) {
    throw new Error(_constants_error_js__WEBPACK_IMPORTED_MODULE_0__.ERROR.MESSAGE.ALREADY_SAVED_VIDEOS);
  }
};

/***/ }),

/***/ "./src/js/views/mainPage/mainPageEvents.js":
/*!*************************************************!*\
  !*** ./src/js/views/mainPage/mainPageEvents.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/querySelector.js */ "./src/js/utils/querySelector.js");
/* harmony import */ var _handlers_showSavedVideosHandle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../handlers/showSavedVideosHandle.js */ "./src/js/handlers/showSavedVideosHandle.js");
/* harmony import */ var _handlers_savedVideoButtonHandle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../handlers/savedVideoButtonHandle.js */ "./src/js/handlers/savedVideoButtonHandle.js");




var bindMainPageEvents = function bindMainPageEvents() {
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('#gonna-watch-button').addEventListener('click', _handlers_showSavedVideosHandle_js__WEBPACK_IMPORTED_MODULE_1__.handleGonnaWatchToggleClick);
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('#watched-button').addEventListener('click', _handlers_showSavedVideosHandle_js__WEBPACK_IMPORTED_MODULE_1__.handleWatchedToggleClick);
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video-list').addEventListener('click', function (e) {
    var isWatchedButtonClick = e.target.classList.contains('video-item__watched-button');
    var isDeleteButtonClick = e.target.classList.contains('video-item__delete-button');

    if (isWatchedButtonClick) {
      (0,_handlers_savedVideoButtonHandle_js__WEBPACK_IMPORTED_MODULE_2__.handleWatchedButtonClick)(e);
    }

    if (isDeleteButtonClick) {
      (0,_handlers_savedVideoButtonHandle_js__WEBPACK_IMPORTED_MODULE_2__.handleDeleteButtonClick)(e);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bindMainPageEvents);

/***/ }),

/***/ "./src/js/views/mainPage/mainPageUI.js":
/*!*********************************************!*\
  !*** ./src/js/views/mainPage/mainPageUI.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./src/js/views/mainPage/template.js");
/* harmony import */ var _utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/querySelector.js */ "./src/js/utils/querySelector.js");


var mainPageUI = {
  renderSavedVideoItems: function renderSavedVideoItems(savedVideos) {
    if (!savedVideos) {
      mainPageUI.renderNothingSavedImage();
      return;
    }

    (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.nothing-saved-image-container').replaceChildren();
    (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.saved-video').hidden = false;
    var isWatchedVideoList = (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.saved-video-list').classList.contains('watched-list');

    if (isWatchedVideoList) {
      mainPageUI.renderWatchedVideos(savedVideos);
      return;
    }

    mainPageUI.renderSavedVideos(savedVideos);
  },
  renderWatchedVideos: function renderWatchedVideos(savedVideos) {
    savedVideos.forEach(function (savedVideo) {
      if (savedVideo.watched) {
        (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.saved-video-list').insertAdjacentHTML('beforeEnd', _template_js__WEBPACK_IMPORTED_MODULE_0__["default"].watchedVideoItem(savedVideo));
      }
    });
  },
  renderSavedVideos: function renderSavedVideos(savedVideos) {
    savedVideos.forEach(function (savedVideo) {
      if (!savedVideo.watched) {
        (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.saved-video-list').insertAdjacentHTML('beforeEnd', _template_js__WEBPACK_IMPORTED_MODULE_0__["default"].savedVideoItem(savedVideo));
      }
    });
  },
  renderNothingSavedImage: function renderNothingSavedImage() {
    (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.saved-video').hidden = true;

    if ((0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.nothing-saved-image-container').childElementCount === 0) {
      (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.nothing-saved-image-container').insertAdjacentHTML('beforeEnd', _template_js__WEBPACK_IMPORTED_MODULE_0__["default"].notingSavedImage);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainPageUI);

/***/ }),

/***/ "./src/js/views/mainPage/template.js":
/*!*******************************************!*\
  !*** ./src/js/views/mainPage/template.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var template = {
  savedVideoItem: function savedVideoItem(item) {
    return "\n      <li class=\"video-item\" data-video-id='".concat(item.id, "'>\n        <iframe\n         width=\"100%\"\n         height=\"118\"\n         src=\"https://www.youtube.com/embed/").concat(item.id, "\"\n         frameborder=\"0\"\n         allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n         allowfullscreen\n        ></iframe> \n        <h4 class=\"video-item__title\">").concat(item.title, "</h4>\n        <p class=\"video-item__channel-name\">").concat(item.channelTitle, "</p>\n        <p class=\"video-item__published-date\">").concat(item.publishedDate, "</p>\n        <div class=\"video-item-buttons\">\n          <button class=\"video-item__watched-button button\">\u2705</button>\n          <button class=\"video-item__delete-button button\">\uD83D\uDDD1\uFE0F</button>\n        </div>\n      </li>");
  },
  watchedVideoItem: function watchedVideoItem(item) {
    return "\n      <li class=\"video-item\" data-video-id='".concat(item.id, "'>\n        <iframe\n          width=\"100%\"\n          height=\"118\"\n          src=\"https://www.youtube.com/embed/").concat(item.id, "\"\n          frameborder=\"0\"\n          allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n          allowfullscreen\n        ></iframe> \n        <h4 class=\"video-item__title\">").concat(item.title, "</h4>\n        <p class=\"video-item__channel-name\">").concat(item.channelTitle, "</p>\n        <p class=\"video-item__published-date\">").concat(item.publishedDate, "</p>\n        <div class=\"video-item-buttons\">\n          <button class=\"video-item__delete-button button\">\uD83D\uDDD1\uFE0F</button>\n        </div>\n      </li>");
  },
  notingSavedImage: "        \n  <img\n    src=\"./assets/nothing_saved.png\"\n    alt=\"nothing saved image\"\n    class=\"nothing-saved__image\"\n  />"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (template);

/***/ }),

/***/ "./src/js/views/modal/modalEvents.js":
/*!*******************************************!*\
  !*** ./src/js/views/modal/modalEvents.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/querySelector.js */ "./src/js/utils/querySelector.js");
/* harmony import */ var _utils_throttle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/throttle.js */ "./src/js/utils/throttle.js");
/* harmony import */ var _handlers_searchHandle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../handlers/searchHandle.js */ "./src/js/handlers/searchHandle.js");
/* harmony import */ var _handlers_saveVideoHandle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../handlers/saveVideoHandle.js */ "./src/js/handlers/saveVideoHandle.js");
/* harmony import */ var _handlers_modalHandle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../handlers/modalHandle.js */ "./src/js/handlers/modalHandle.js");






var bindModalEvents = function bindModalEvents() {
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.search-input').addEventListener('submit', function (e) {
    e.preventDefault();
    (0,_handlers_searchHandle_js__WEBPACK_IMPORTED_MODULE_2__.handleSearch)();
  });
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').addEventListener('scroll', (0,_utils_throttle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_handlers_searchHandle_js__WEBPACK_IMPORTED_MODULE_2__.handleScrollSearch, _utils_throttle_js__WEBPACK_IMPORTED_MODULE_1__.SCROLL_THROTTLE_DELAY));
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').addEventListener('click', _handlers_saveVideoHandle_js__WEBPACK_IMPORTED_MODULE_3__.handleSaveButtonClick);
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('#search-modal-button').addEventListener('click', function () {
    (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.modal-container').classList.toggle('hide');
    (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('#app').classList.toggle('wrapper');
  });
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.dimmer').addEventListener('click', _handlers_modalHandle_js__WEBPACK_IMPORTED_MODULE_4__.handleModalClose);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bindModalEvents);

/***/ }),

/***/ "./src/js/views/modal/modalUI.js":
/*!***************************************!*\
  !*** ./src/js/views/modal/modalUI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ "./src/js/views/modal/template.js");
/* harmony import */ var _utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/querySelector.js */ "./src/js/utils/querySelector.js");
/* harmony import */ var _localStorage_videoStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../localStorage/videoStorage.js */ "./src/js/localStorage/videoStorage.js");



var modalUI = {
  resetVideoList: function resetVideoList() {
    (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.video-list').replaceChildren();
  },
  renderSkeletonUI: function renderSkeletonUI() {
    (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.search-result').classList.remove('search-result--no-result');
    (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.no-result').hidden = true;
    (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.video-list').classList.remove('hide');
    (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.video-list').insertAdjacentHTML('beforeEnd', _template_js__WEBPACK_IMPORTED_MODULE_0__["default"].skeletonUI.repeat(10));
  },
  removeSkeletonUI: function removeSkeletonUI() {
    (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$$)('.skeleton').forEach(function (element) {
      return element.remove();
    });
  },
  removeSavedVideoButton: function removeSavedVideoButton() {
    var savedVideos = _localStorage_videoStorage_js__WEBPACK_IMPORTED_MODULE_2__["default"].getSavedVideos();

    if (savedVideos) {
      savedVideos.forEach(function (video) {
        var isSavedVideo = (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.video-list').lastElementChild.dataset.videoId === video.id;

        if (isSavedVideo) {
          (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.video-list').lastElementChild.lastElementChild.disabled = true;
        }
      });
    }
  },
  renderVideoItems: function renderVideoItems(_ref) {
    var _this = this;

    var items = _ref.items;
    this.removeSkeletonUI();
    items.forEach(function (item) {
      (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.video-list').insertAdjacentHTML('beforeEnd', _template_js__WEBPACK_IMPORTED_MODULE_0__["default"].videoItem(item));

      _this.removeSavedVideoButton();
    });
  },
  renderNoResult: function renderNoResult() {
    this.removeSkeletonUI();
    (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.search-result').classList.add('search-result--no-result');
    (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.video-list').classList.add('hide');
    (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.no-result').hidden = false;

    if ((0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.no-result').childElementCount === 0) {
      (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.no-result').insertAdjacentHTML('beforeEnd', _template_js__WEBPACK_IMPORTED_MODULE_0__["default"].nothingFoundImage);
    }
  },
  renderSearchResult: function renderSearchResult(response) {
    var _this2 = this;

    response.then(function (searchResults) {
      if (searchResults.items.length === 0) {
        _this2.renderNoResult();

        return;
      }

      _this2.renderVideoItems(searchResults);
    })["catch"](function (error) {
      return alert(error.message);
    });
  },
  renderAdditionalSearchResult: function renderAdditionalSearchResult(response) {
    var _this3 = this;

    response.then(function (searchResults) {
      _this3.renderVideoItems(searchResults);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalUI);

/***/ }),

/***/ "./src/js/views/modal/template.js":
/*!****************************************!*\
  !*** ./src/js/views/modal/template.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_formatDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/formatDate */ "./src/js/utils/formatDate.js");

var template = {
  skeletonUI: "\n  <li class=\"skeleton\">\n    <div class=\"image\"></div>\n    <p class=\"line\"></p>\n    <p class=\"line\"></p>\n  </li>",
  videoItem: function videoItem(item) {
    return "\n      <li class=\"video-item\" data-video-id='".concat(item.id.videoId, "'>\n        <img\n          src='").concat(item.snippet.thumbnails.high.url, "'\n          alt=\"video-item-thumbnail\"\n          class=\"video-item__thumbnail\"\n        />\n        <h4 class=\"video-item__title\">").concat(item.snippet.title, "</h4>\n        <p class=\"video-item__channel-name\">").concat(item.snippet.channelTitle, "</p>\n        <p class=\"video-item__published-date\">").concat((0,_utils_formatDate__WEBPACK_IMPORTED_MODULE_0__.formatDate)(item.snippet.publishTime), "</p>\n        <button class=\"video-item__save-button button\">\u2B07 \uC800\uC7A5</button>\n      </li>");
  },
  nothingFoundImage: "\n  <img src=\"./assets/not_found.png\" alt=\"no result image\" class=\"no-result__image\" />\n  <p class=\"no-result__description\">\n    \uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4<br />\n    \uB2E4\uB978 \uD0A4\uC6CC\uB4DC\uB85C \uAC80\uC0C9\uD574\uBCF4\uC138\uC694\n  </p>"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (template);

/***/ }),

/***/ "./src/js/views/searchSuggestion/searchSuggestionEvents.js":
/*!*****************************************************************!*\
  !*** ./src/js/views/searchSuggestion/searchSuggestionEvents.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/debounce.js */ "./src/js/utils/debounce.js");
/* harmony import */ var _utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/querySelector.js */ "./src/js/utils/querySelector.js");
/* harmony import */ var _handlers_searchSuggestionHandle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../handlers/searchSuggestionHandle.js */ "./src/js/handlers/searchSuggestionHandle.js");




var bindSearchSuggestionEvents = function bindSearchSuggestionEvents() {
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('#search-input-keyword').addEventListener('keyup', (0,_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_handlers_searchSuggestionHandle_js__WEBPACK_IMPORTED_MODULE_2__.handleKeyupSuggestion, _utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__.SUGGESTION_DEBOUNCE_DELAY));
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('#search-input-keyword').addEventListener('click', (0,_utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_handlers_searchSuggestionHandle_js__WEBPACK_IMPORTED_MODULE_2__.handleClickSuggestion, _utils_debounce_js__WEBPACK_IMPORTED_MODULE_0__.SUGGESTION_DEBOUNCE_DELAY));
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('#suggestion-list').addEventListener('click', function (e) {
    if (e.target.localName === 'li') {
      (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('#search-input-keyword').value = e.target.textContent;
      (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.suggestion').hidden = true;
    }
  });
  (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('#search-input-keyword').addEventListener('focusout', function (e) {
    setTimeout(function () {
      (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_1__.$)('.suggestion').hidden = true;
    }, 150);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bindSearchSuggestionEvents);

/***/ }),

/***/ "./src/js/views/searchSuggestion/searchSuggestionUI.js":
/*!*************************************************************!*\
  !*** ./src/js/views/searchSuggestion/searchSuggestionUI.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/querySelector.js */ "./src/js/utils/querySelector.js");

var searchSuggestionUI = {
  renderSuggestionList: function renderSuggestionList(suggestions) {
    suggestions.forEach(function (suggestion) {
      (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('#suggestion-list').insertAdjacentHTML('beforeend', "<li>".concat(suggestion, "</li>"));
    });

    if ((0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').children.length === 0) {
      (0,_utils_querySelector_js__WEBPACK_IMPORTED_MODULE_0__.$)('.suggestion').hidden = false;
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchSuggestionUI);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media (min-width: 1280px) {\n  .saved-video-list {\n    width: 1020px;\n  }\n}\n\n@media (min-width: 960px) and (max-width: 1280px) {\n  .saved-video-list {\n    width: 765px;\n  }\n}\n\n@media (min-width: 600px) and (max-width: 960px) {\n  .saved-video-list {\n    width: 510px;\n  }\n}\n\n@media (max-width: 600px) {\n  .saved-video-list {\n    width: 255px;\n  }\n}\n\n@media (max-width: 300px) {\n  body {\n    display: none;\n  }\n}\n\nbody {\n  padding: 64px 0;\n  font-size: 16px;\n}\n\n#app {\n  max-width: 1020px;\n  width: 80vw;\n  margin: 0 auto;\n}\n\n.classroom-container__title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 64px;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n}\n\n.button {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 1.25px;\n}\n\n.gonna-watch {\n  border-radius: 4px 0 0 4px;\n}\n\n.watched-button {\n  border-radius: 0 4px 4px 0;\n  margin-left: -5px;\n}\n\n.select__button {\n  width: 120px;\n  background: rgba(0, 188, 212, 0.12);\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  height: 36px;\n  background: #f5f5f5;\n  cursor: pointer;\n  margin-bottom: 39px;\n}\n\n.nav__button {\n  width: 80px;\n  height: 36px;\n  background: #f5f5f5;\n}\n\n.nav__button:hover {\n  background: #ebebeb;\n}\n\n.saved-video-list {\n  /* width: 1040px; */\n  height: 493px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n}\n\n.video-item-buttons {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.video-item__watched-button {\n  width: 36px;\n  height: 36px;\n  padding: 6px 2px;\n  margin: 4px;\n}\n\n.video-item__watched-button:hover {\n  background: #ebebeb;\n}\n\n.video-item__watched-button:active {\n  background-color: rgba(0, 188, 212, 0.12);\n}\n\n.video-item__delete-button {\n  width: 36px;\n  height: 36px;\n  padding: 6px 2px;\n  margin: 4px;\n}\n\n.video-item__delete-button:hover {\n  background: #ebebeb;\n}\n\n.video-item__delete-button:active {\n  background-color: rgba(0, 188, 212, 0.12);\n}\n\n.nothing-saved-image-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.nothing-saved-image-container .nothing-saved__image {\n  width: 80%;\n  height: 40%;\n  margin-bottom: 32px;\n}\n\n.checked {\n  background-color: rgba(0, 188, 212, 0.12);\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,mCAAmC;EACnC,qCAAqC;EACrC,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB","sourcesContent":["@media (min-width: 1280px) {\n  .saved-video-list {\n    width: 1020px;\n  }\n}\n\n@media (min-width: 960px) and (max-width: 1280px) {\n  .saved-video-list {\n    width: 765px;\n  }\n}\n\n@media (min-width: 600px) and (max-width: 960px) {\n  .saved-video-list {\n    width: 510px;\n  }\n}\n\n@media (max-width: 600px) {\n  .saved-video-list {\n    width: 255px;\n  }\n}\n\n@media (max-width: 300px) {\n  body {\n    display: none;\n  }\n}\n\nbody {\n  padding: 64px 0;\n  font-size: 16px;\n}\n\n#app {\n  max-width: 1020px;\n  width: 80vw;\n  margin: 0 auto;\n}\n\n.classroom-container__title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 64px;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n}\n\n.button {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 1.25px;\n}\n\n.gonna-watch {\n  border-radius: 4px 0 0 4px;\n}\n\n.watched-button {\n  border-radius: 0 4px 4px 0;\n  margin-left: -5px;\n}\n\n.select__button {\n  width: 120px;\n  background: rgba(0, 188, 212, 0.12);\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  height: 36px;\n  background: #f5f5f5;\n  cursor: pointer;\n  margin-bottom: 39px;\n}\n\n.nav__button {\n  width: 80px;\n  height: 36px;\n  background: #f5f5f5;\n}\n\n.nav__button:hover {\n  background: #ebebeb;\n}\n\n.saved-video-list {\n  /* width: 1040px; */\n  height: 493px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n}\n\n.video-item-buttons {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.video-item__watched-button {\n  width: 36px;\n  height: 36px;\n  padding: 6px 2px;\n  margin: 4px;\n}\n\n.video-item__watched-button:hover {\n  background: #ebebeb;\n}\n\n.video-item__watched-button:active {\n  background-color: rgba(0, 188, 212, 0.12);\n}\n\n.video-item__delete-button {\n  width: 36px;\n  height: 36px;\n  padding: 6px 2px;\n  margin: 4px;\n}\n\n.video-item__delete-button:hover {\n  background: #ebebeb;\n}\n\n.video-item__delete-button:active {\n  background-color: rgba(0, 188, 212, 0.12);\n}\n\n.nothing-saved-image-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.nothing-saved-image-container .nothing-saved__image {\n  width: 80%;\n  height: 40%;\n  margin-bottom: 32px;\n}\n\n.checked {\n  background-color: rgba(0, 188, 212, 0.12);\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./skeleton.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_suggestion_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./suggestion.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/suggestion.css");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_suggestion_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAKA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;EACZ,mCAAmC;AACrC;;AAEA;;;;EAIE,aAAa;AACf","sourcesContent":["@import './app.css';\n@import './modal.css';\n@import './skeleton.css';\n@import './suggestion.css';\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media (min-width: 1280px) {\n  .search-result {\n    width: 1030px;\n  }\n  .search-input {\n    display: flex;\n  }\n}\n\n@media (min-width: 960px) and (max-width: 1280px) {\n  .search-result {\n    width: 770px;\n  }\n  .search-input {\n    display: flex;\n  }\n}\n\n@media (min-width: 640px) and (max-width: 960px) {\n  .search-result {\n    width: 510px;\n  }\n  .search-input {\n    display: flex;\n  }\n}\n\n@media (max-width: 640px) {\n  .search-result {\n    width: 260px;\n  }\n  .search-input {\n    display: none;\n  }\n}\n\n.modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.modal-container.hide {\n  display: none;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n  position: relative;\n  max-width: 1100px;\n  width: 84vw;\n  height: 727px;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 50px 30px 32px 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.search-input {\n  position: relative;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.search-input__keyword {\n  width: 400px;\n  height: 36px;\n  margin-right: 20px;\n  padding: 4px 8px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: #8b8b8b;\n  font-size: 16px;\n}\n\n.search-input__search-button {\n  width: 72px;\n  height: 36px;\n  background: #00bcd4;\n  color: #ffffff;\n}\n\n.search-result.search-result--no-result {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.video-list::-webkit-scrollbar {\n  width: 5px;\n  border-radius: 5px;\n}\n\n.video-list::-webkit-scrollbar-track {\n  background-color: #00bbd413;\n}\n\n.video-list::-webkit-scrollbar-thumb {\n  box-shadow: inset 0 0 4px #00bbd478;\n}\n\n.no-result__image {\n  width: 190px;\n  height: 140px;\n  margin-bottom: 32px;\n}\n\n.no-result__description {\n  font-size: 16px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.video-list {\n  height: 493px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n  overflow-y: scroll;\n}\n\n.video-item {\n  position: relative;\n  width: 236px;\n  height: 255px;\n}\n\n.video-list.hide {\n  display: none;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 4px 0;\n}\n\n.video-item__channel-name {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 80px;\n  height: 36px;\n  background: #f9f9f9;\n  margin-top: 4px;\n}\n\n.video-item__save-button:enabled:hover {\n  background: #efefef;\n}\n\n.video-item__save-button:disabled {\n  cursor: default;\n}\n\n.wrapper {\n  overflow: hidden;\n}\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,aAAa;EACf;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,MAAM;EACN,OAAO;AACT;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,qCAAqC;EACrC,kBAAkB;EAClB,4BAA4B;EAC5B,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["@media (min-width: 1280px) {\n  .search-result {\n    width: 1030px;\n  }\n  .search-input {\n    display: flex;\n  }\n}\n\n@media (min-width: 960px) and (max-width: 1280px) {\n  .search-result {\n    width: 770px;\n  }\n  .search-input {\n    display: flex;\n  }\n}\n\n@media (min-width: 640px) and (max-width: 960px) {\n  .search-result {\n    width: 510px;\n  }\n  .search-input {\n    display: flex;\n  }\n}\n\n@media (max-width: 640px) {\n  .search-result {\n    width: 260px;\n  }\n  .search-input {\n    display: none;\n  }\n}\n\n.modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.modal-container.hide {\n  display: none;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n  position: relative;\n  max-width: 1100px;\n  width: 84vw;\n  height: 727px;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 50px 30px 32px 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.search-input {\n  position: relative;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.search-input__keyword {\n  width: 400px;\n  height: 36px;\n  margin-right: 20px;\n  padding: 4px 8px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: #8b8b8b;\n  font-size: 16px;\n}\n\n.search-input__search-button {\n  width: 72px;\n  height: 36px;\n  background: #00bcd4;\n  color: #ffffff;\n}\n\n.search-result.search-result--no-result {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.video-list::-webkit-scrollbar {\n  width: 5px;\n  border-radius: 5px;\n}\n\n.video-list::-webkit-scrollbar-track {\n  background-color: #00bbd413;\n}\n\n.video-list::-webkit-scrollbar-thumb {\n  box-shadow: inset 0 0 4px #00bbd478;\n}\n\n.no-result__image {\n  width: 190px;\n  height: 140px;\n  margin-bottom: 32px;\n}\n\n.no-result__description {\n  font-size: 16px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.video-list {\n  height: 493px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n  overflow-y: scroll;\n}\n\n.video-item {\n  position: relative;\n  width: 236px;\n  height: 255px;\n}\n\n.video-list.hide {\n  display: none;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 4px 0;\n}\n\n.video-item__channel-name {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 80px;\n  height: 36px;\n  background: #f9f9f9;\n  margin-top: 4px;\n}\n\n.video-item__save-button:enabled:hover {\n  background: #efefef;\n}\n\n.video-item__save-button:disabled {\n  cursor: default;\n}\n\n.wrapper {\n  overflow: hidden;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/skeleton.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".skeleton {\n  width: 236px;\n}\n\n.skeleton .image,\n.skeleton .line {\n  background-image: linear-gradient(90deg, #e0e0e0 0px, #ededed 30px, #e0e0e0 60px);\n  animation: refresh 2s infinite ease-out;\n}\n\n.skeleton .image {\n  height: 150px;\n  margin-bottom: 16px;\n}\n\n.skeleton .line {\n  height: 16px;\n}\n\n.skeleton .line:first-child {\n  width: 50%;\n}\n\n.skeleton .line:last-child {\n  width: 80%;\n  margin-top: 16px;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/skeleton.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;;EAEE,iFAAiF;EACjF,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE;IACE,iCAAiC;EACnC;EACA;;IAEE,0BAA0B;EAC5B;AACF","sourcesContent":[".skeleton {\n  width: 236px;\n}\n\n.skeleton .image,\n.skeleton .line {\n  background-image: linear-gradient(90deg, #e0e0e0 0px, #ededed 30px, #e0e0e0 60px);\n  animation: refresh 2s infinite ease-out;\n}\n\n.skeleton .image {\n  height: 150px;\n  margin-bottom: 16px;\n}\n\n.skeleton .line {\n  height: 16px;\n}\n\n.skeleton .line:first-child {\n  width: 50%;\n}\n\n.skeleton .line:last-child {\n  width: 80%;\n  margin-top: 16px;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/suggestion.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/suggestion.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".suggestion {\n  position: absolute;\n  top: 37px;\n  left: 0px;\n  width: 400px;\n  background-color: white;\n  z-index: 1;\n  border: 1px solid black;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n#suggestion-list > li {\n  margin: 5px;\n  cursor: pointer;\n}\n\n#suggestion-list > li:hover {\n  background-color: rgba(128, 128, 128, 0.1);\n}\n", "",{"version":3,"sources":["webpack://./src/css/suggestion.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,UAAU;EACV,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,0CAA0C;AAC5C","sourcesContent":[".suggestion {\n  position: absolute;\n  top: 37px;\n  left: 0px;\n  width: 400px;\n  background-color: white;\n  z-index: 1;\n  border: 1px solid black;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n#suggestion-list > li {\n  margin: 5px;\n  cursor: pointer;\n}\n\n#suggestion-list > li:hover {\n  background-color: rgba(128, 128, 128, 0.1);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/favicon.png":
/*!***************************************!*\
  !*** ./src/assets/images/favicon.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAE/SURBVDiNxZC9S8NQFMXPvWmTtClRR0FKRRDUSUShFKEFB3V2cHRwUYSOLn6BOCgugsWp/4IOKTi0m5sODk7ipIgUKSmKtIl9fXFzKHnVguAZ77m/cy4X+G8RAJ62E7sjlpHOJwcfCk/Via4AEZsgqybEzcWru07pPvusMJ5aHY2bkV6a7+pNefz84vCkHZ/tFQaAMTvGw6aRY4PJ6jQ9KbHZBMpeWxnABGjEBoeZb6KNqaVl9G/tY09L4NFvqYO6nZmdX8CBc4lKdhHnInw1dMoAmKlb9rdCnzcQjSCXyaBSclA+PcFKw0VSj/4+QAQBjvIbmKM2dkwNUMAAEPGk/Ogcmsw4jAGApgRlALQC6fPte/PqvuEJ5aZCri/kkKkXCQDP2IntVMzI6Ez6TyARsQGyqp+t61KtvtZr8d/rC3z8V77XO51zAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/assets/images/not_found.png":
/*!*****************************************!*\
  !*** ./src/assets/images/not_found.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/not_found.png");

/***/ }),

/***/ "./src/assets/images/nothing_saved.png":
/*!*********************************************!*\
  !*** ./src/assets/images/nothing_saved.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/nothing_saved.png");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _assets_images_not_found_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/not_found.png */ "./src/assets/images/not_found.png");
/* harmony import */ var _assets_images_nothing_saved_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/nothing_saved.png */ "./src/assets/images/nothing_saved.png");
/* harmony import */ var _assets_images_favicon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/favicon.png */ "./src/assets/images/favicon.png");
/* harmony import */ var _js_App_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/App.js */ "./src/js/App.js");





(0,_js_App_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map