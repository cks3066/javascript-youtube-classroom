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
/* harmony import */ var _util_general_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/general.js */ "./src/js/util/general.js");
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/constants.js */ "./src/js/constants/constants.js");
/* harmony import */ var _eventHandlers_searchEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventHandlers/searchEvents.js */ "./src/js/eventHandlers/searchEvents.js");
/* harmony import */ var _ui_userInterface_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/userInterface.js */ "./src/js/ui/userInterface.js");
/* harmony import */ var _storage_storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage/storage.js */ "./src/js/storage/storage.js");





function App() {
  var savedVideos = _storage_storage_js__WEBPACK_IMPORTED_MODULE_4__["default"].getSavedVideos();

  if (savedVideos) {
    _ui_userInterface_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderSavedVideoItems();
  } else {
    _ui_userInterface_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderNothingSavedImage();
  } // 이벤트 등록


  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('#search-modal-button').addEventListener('click', function () {
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.modal-container').classList.toggle('hide');
  });
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('#search-button').addEventListener('click', _eventHandlers_searchEvents_js__WEBPACK_IMPORTED_MODULE_2__.handleSearch);
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('#search-input-keyword').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') (0,_eventHandlers_searchEvents_js__WEBPACK_IMPORTED_MODULE_2__.handleSearch)();
  });
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').addEventListener('scroll', (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.throttle)(_eventHandlers_searchEvents_js__WEBPACK_IMPORTED_MODULE_2__.handleScroll, _constants_constants_js__WEBPACK_IMPORTED_MODULE_1__.THROTTLE_DELAY));
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').addEventListener('click', _eventHandlers_searchEvents_js__WEBPACK_IMPORTED_MODULE_2__.handleSaveButtonClick);
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.dimmer').addEventListener('click', function () {
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.modal-container').classList.toggle('hide');
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').replaceChildren();
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('#search-input-keyword').value = '';
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video').hidden = false;
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video-list').replaceChildren();
    _ui_userInterface_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderSavedVideoItems();
  });
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('#going-watch-button').addEventListener('click', function () {
    if (!(0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video-list').classList.contains('watched')) {
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('#going-watch-button').classList.add('checked');
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('#watched-button').classList.remove('checked');
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video-list').classList.add('watched');
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video-list').replaceChildren();
      _ui_userInterface_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderSavedVideoItems();
    }
  });
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('#watched-button').addEventListener('click', function () {
    if ((0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video-list').classList.contains('watched')) {
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('#watched-button').classList.add('checked');
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('#going-watch-button').classList.remove('checked');
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video-list').classList.remove('watched');
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video-list').replaceChildren();
      _ui_userInterface_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderSavedVideoItems();
    }
  });
  (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video-list').addEventListener('click', function (e) {
    if (e.target.classList.contains('video-item__watched-button')) {
      var videoItem = e.target.parentElement.parentElement;
      videoItem.remove();

      var _savedVideos = _storage_storage_js__WEBPACK_IMPORTED_MODULE_4__["default"].getSavedVideos();

      var newSavedVideos = _savedVideos.map(function (savedVideo) {
        if (savedVideo.id === videoItem.dataset.videoId) {
          savedVideo.watched = true;
          return savedVideo;
        }

        return savedVideo;
      });

      _storage_storage_js__WEBPACK_IMPORTED_MODULE_4__["default"].setSavedVideos(newSavedVideos);
    }

    if (e.target.classList.contains('video-item__delete-button')) {
      var _videoItem = e.target.parentElement.parentElement;

      _videoItem.remove();

      var _savedVideos2 = _storage_storage_js__WEBPACK_IMPORTED_MODULE_4__["default"].getSavedVideos();

      var _newSavedVideos = _savedVideos2.filter(function (savedVideo) {
        return savedVideo.id !== _videoItem.dataset.videoId;
      });

      console.log(_newSavedVideos.length);

      if (_newSavedVideos.length === 0) {
        _storage_storage_js__WEBPACK_IMPORTED_MODULE_4__["default"].removeSavedVideo();
        (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video').hidden = true;
        _ui_userInterface_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderNothingSavedImage();
        return;
      }

      _storage_storage_js__WEBPACK_IMPORTED_MODULE_4__["default"].setSavedVideos(_newSavedVideos);
    }
  });
}

/***/ }),

/***/ "./src/js/constants/constants.js":
/*!***************************************!*\
  !*** ./src/js/constants/constants.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERROR": () => (/* binding */ ERROR),
/* harmony export */   "MAX_SAVED_VIDEOS_NUMBER": () => (/* binding */ MAX_SAVED_VIDEOS_NUMBER),
/* harmony export */   "SCROLL_OFFSET": () => (/* binding */ SCROLL_OFFSET),
/* harmony export */   "THROTTLE_DELAY": () => (/* binding */ THROTTLE_DELAY)
/* harmony export */ });
var ERROR = {
  MESSAGE: {
    EMPTY_INPUT: '빈값을 입력할 수 없습니다. 다시 입력해 주세요.',
    ALREADY_SAVED_VIDEOS: '이미 저장된 동영상입니다.',
    OVER_MAX_SAVED_VIDEOS_NUMBER: '저장할 수 있는 동영상의 개수가 초과되었습니다.'
  }
};
var MAX_SAVED_VIDEOS_NUMBER = 100;
var THROTTLE_DELAY = 500;
var SCROLL_OFFSET = 50;

/***/ }),

/***/ "./src/js/domain/YoutubeSearch.js":
/*!****************************************!*\
  !*** ./src/js/domain/YoutubeSearch.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YoutubeSearch)
/* harmony export */ });
/* harmony import */ var _util_general_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/general.js */ "./src/js/util/general.js");
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

var _searchTarget = /*#__PURE__*/new WeakMap();

var YoutubeSearch = /*#__PURE__*/function () {
  function YoutubeSearch() {
    _classCallCheck(this, YoutubeSearch);

    _classPrivateFieldInitSpec(this, _searchResults, {
      writable: true,
      value: {}
    });

    _classPrivateFieldInitSpec(this, _searchTarget, {
      writable: true,
      value: ''
    });
  }

  _createClass(YoutubeSearch, [{
    key: "searchTarget",
    get: function get() {
      return _classPrivateFieldGet(this, _searchTarget);
    },
    set: function set(searchInput) {
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.validateInput)(searchInput);

      _classPrivateFieldSet(this, _searchTarget, searchInput);
    }
  }, {
    key: "searchResults",
    get: function get() {
      return _classPrivateFieldGet(this, _searchResults);
    },
    set: function set(searchResults) {
      _classPrivateFieldSet(this, _searchResults, searchResults);
    }
  }, {
    key: "getURL",
    value: function getURL(nextPageToken) {
      var url = new URL('dummy/youtube/v3/search', 'https://onstar.netlify.app');
      var parameter = new URLSearchParams({
        part: 'snippet',
        maxResults: 10,
        q: _classPrivateFieldGet(this, _searchTarget),
        pageToken: nextPageToken || '',
        type: 'video'
      });
      url.search = parameter.toString();
      return url.href;
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
    key: "callSearchAPI",
    value: function callSearchAPI() {
      var URL = _classPrivateFieldGet(this, _searchResults) ? this.getURL(_classPrivateFieldGet(this, _searchResults).nextPageToken) : this.getURL();
      return fetch(URL).then(function (response) {
        return response.json();
      });
    }
  }, {
    key: "resetSearchResults",
    value: function resetSearchResults() {
      _classPrivateFieldSet(this, _searchResults, {});
    }
  }]);

  return YoutubeSearch;
}();



/***/ }),

/***/ "./src/js/eventHandlers/searchEvents.js":
/*!**********************************************!*\
  !*** ./src/js/eventHandlers/searchEvents.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleSaveButtonClick": () => (/* binding */ handleSaveButtonClick),
/* harmony export */   "handleScroll": () => (/* binding */ handleScroll),
/* harmony export */   "handleSearch": () => (/* binding */ handleSearch)
/* harmony export */ });
/* harmony import */ var _util_general_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/general.js */ "./src/js/util/general.js");
/* harmony import */ var _domain_YoutubeSearch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/YoutubeSearch.js */ "./src/js/domain/YoutubeSearch.js");
/* harmony import */ var _ui_userInterface_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/userInterface.js */ "./src/js/ui/userInterface.js");
/* harmony import */ var _storage_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/storage.js */ "./src/js/storage/storage.js");




var youtubeSearch = new _domain_YoutubeSearch_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
var handleSearch = function handleSearch() {
  try {
    youtubeSearch.resetSearchResults();
    _ui_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].resetVideoList();
    var searchInput = (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('#search-input-keyword').value.trim();
    youtubeSearch.searchTarget = searchInput;
    _ui_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderSkeletonUI();
    var response = youtubeSearch.callSearchAPI();
    youtubeSearch.updateSearchResults(response);
    _ui_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderSearchResult(response);
  } catch (error) {
    alert(error.message);
  }
};
var handleScroll = function handleScroll(e) {
  if ((0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.isEndOfScroll)(e.target)) {
    _ui_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderSkeletonUI();
    var response = youtubeSearch.callSearchAPI();
    youtubeSearch.updateSearchResults(response);
    _ui_userInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderNextSearchResult(response);
  }
};
var handleSaveButtonClick = function handleSaveButtonClick(e) {
  if (!e.target.classList.contains('video-item__save-button')) {
    return;
  }

  try {
    var saveTargetVideo = {
      id: e.target.parentElement.dataset.videoId,
      imgSrc: e.target.parentElement.children[0].currentSrc,
      title: e.target.parentElement.children[1].textContent,
      channelTitle: e.target.parentElement.children[2].textContent,
      publishedDate: e.target.parentElement.children[3].textContent,
      watched: false
    };
    _storage_storage_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateSavedVideos(saveTargetVideo);
    e.target.closest('button').hidden = true;
  } catch (error) {
    alert(error.message);
  }
};

/***/ }),

/***/ "./src/js/storage/storage.js":
/*!***********************************!*\
  !*** ./src/js/storage/storage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var storage = {
  setSavedVideos: function setSavedVideos(video) {
    localStorage.setItem('saved-videos', JSON.stringify(video));
  },
  getSavedVideos: function getSavedVideos() {
    return JSON.parse(localStorage.getItem('saved-videos'));
  },
  removeSavedVideo: function removeSavedVideo() {
    localStorage.removeItem('saved-videos');
  },
  updateSavedVideos: function updateSavedVideos(saveTargetVideo) {
    var savedVideos = this.getSavedVideos();

    if (!savedVideos) {
      this.setSavedVideos([saveTargetVideo]);
      return;
    }

    if (savedVideos.length > _constants_constants__WEBPACK_IMPORTED_MODULE_0__.MAX_SAVED_VIDEOS_NUMBER) {
      throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR.MESSAGE.OVER_MAX_SAVED_VIDEOS_NUMBER);
    }

    if (savedVideos.some(function (savedVideo) {
      return savedVideo.id === saveTargetVideo.id;
    })) {
      throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR.MESSAGE.ALREADY_SAVED_VIDEOS);
    }

    this.setSavedVideos([].concat(_toConsumableArray(savedVideos), [saveTargetVideo]));
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);

/***/ }),

/***/ "./src/js/ui/userInterface.js":
/*!************************************!*\
  !*** ./src/js/ui/userInterface.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_general_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/general.js */ "./src/js/util/general.js");
/* harmony import */ var _storage_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/storage.js */ "./src/js/storage/storage.js");


var template = {
  skeletonUI: "<li class=\"skeleton\">\n  <div class=\"image\"></div>\n  <p class=\"line\"></p>\n  <p class=\"line\"></p>\n</li>",
  videoItem: function videoItem(item) {
    return "\n      <li class=\"video-item\" data-video-id='".concat(item.id.videoId, "'>\n        <img\n          src='").concat(item.snippet.thumbnails.high.url, "'\n          alt=\"video-item-thumbnail\"\n          class=\"video-item__thumbnail\"\n        />\n        <h4 class=\"video-item__title\">").concat(item.snippet.title, "</h4>\n        <p class=\"video-item__channel-name\">").concat(item.snippet.channelTitle, "</p>\n        <p class=\"video-item__published-date\">").concat(item.snippet.publishTime, "</p>\n        <button class=\"video-item__save-button button\">\u2B07 \uC800\uC7A5</button>\n      </li>\n  ");
  },
  savedVideoItem: function savedVideoItem(item) {
    return "\n      <li class=\"video-item\" data-video-id='".concat(item.id, "'>\n        <img\n          src='").concat(item.imgSrc, "'\n          alt=\"video-item-thumbnail\"\n          class=\"video-item__thumbnail\"\n        />\n        <h4 class=\"video-item__title\">").concat(item.title, "</h4>\n        <p class=\"video-item__channel-name\">").concat(item.channelTitle, "</p>\n        <p class=\"video-item__published-date\">").concat(item.publishedDate, "</p>\n        <div class=\"video-item-buttons\">\n          <button class=\"video-item__watched-button button\">\u2705</button>\n          <button class=\"video-item__delete-button button\">\uD83D\uDDD1\uFE0F</button>\n        </div>\n      </li>\n  ");
  },
  watchedVideoItem: function watchedVideoItem(item) {
    return "\n      <li class=\"video-item\" data-video-id='".concat(item.id, "'>\n        <img\n          src='").concat(item.imgSrc, "'\n          alt=\"video-item-thumbnail\"\n          class=\"video-item__thumbnail\"\n        />\n        <h4 class=\"video-item__title\">").concat(item.title, "</h4>\n        <p class=\"video-item__channel-name\">").concat(item.channelTitle, "</p>\n        <p class=\"video-item__published-date\">").concat(item.publishedDate, "</p>\n        <div class=\"video-item-buttons\">\n          <button class=\"video-item__delete-button button\">\uD83D\uDDD1\uFE0F</button>\n        </div>\n      </li>\n  ");
  },
  notingSavedImage: "        \n  <img\n  src=\"./assets/nothing_saved.png\"\n  alt=\"nothing saved image\"\n  class=\"nothing-saved__image\"/>\n  "
};
var userInterface = {
  resetVideoList: function resetVideoList() {
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').replaceChildren();
  },
  renderSkeletonUI: function renderSkeletonUI() {
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.search-result').classList.remove('search-result--no-result');
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.no-result').hidden = true;
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').classList.remove('hide');
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').insertAdjacentHTML('beforeEnd', template.skeletonUI.repeat(10));
  },
  removeSkeletonUI: function removeSkeletonUI() {
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$$)('.skeleton').forEach(function (element) {
      return element.remove();
    });
  },
  removeSavedVideoButton: function removeSavedVideoButton() {
    var savedVideos = _storage_storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSavedVideos();

    if (savedVideos) {
      savedVideos.forEach(function (video) {
        if ((0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').lastElementChild.dataset.videoId === video.id) {
          (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').lastElementChild.lastElementChild.hidden = true;
        }
      });
    }
  },
  renderVideoItems: function renderVideoItems(_ref) {
    var _this = this;

    var items = _ref.items;
    this.removeSkeletonUI();
    items.forEach(function (item) {
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').insertAdjacentHTML('beforeEnd', template.videoItem(item));

      _this.removeSavedVideoButton();
    });
  },
  renderNoResult: function renderNoResult() {
    this.removeSkeletonUI();
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.search-result').classList.add('search-result--no-result');
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.no-result').hidden = false;
    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.video-list').classList.add('hide');
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
  renderNextSearchResult: function renderNextSearchResult(response) {
    var _this3 = this;

    response.then(function (searchResults) {
      _this3.renderVideoItems(searchResults);
    });
  },
  renderSavedVideoItems: function renderSavedVideoItems() {
    var savedVideos = _storage_storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSavedVideos();

    if (!savedVideos) {
      this.renderNothingSavedImage();
      return;
    }

    (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.nothing-saved').replaceChildren();

    if ((0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video-list').classList.contains('watched')) {
      savedVideos.forEach(function (savedVideo) {
        if (!savedVideo.watched) {
          (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video-list').insertAdjacentHTML('beforeEnd', template.savedVideoItem(savedVideo));
        }
      });
      return;
    }

    savedVideos.forEach(function (savedVideo) {
      if (savedVideo.watched) {
        (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.saved-video-list').insertAdjacentHTML('beforeEnd', template.watchedVideoItem(savedVideo));
      }
    });
  },
  renderNothingSavedImage: function renderNothingSavedImage() {
    if ((0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.nothing-saved').childElementCount === 0) {
      (0,_util_general_js__WEBPACK_IMPORTED_MODULE_0__.$)('.nothing-saved').insertAdjacentHTML('beforeEnd', template.notingSavedImage);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userInterface);

/***/ }),

/***/ "./src/js/util/general.js":
/*!********************************!*\
  !*** ./src/js/util/general.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "$$": () => (/* binding */ $$),
/* harmony export */   "isEndOfScroll": () => (/* binding */ isEndOfScroll),
/* harmony export */   "throttle": () => (/* binding */ throttle),
/* harmony export */   "validateInput": () => (/* binding */ validateInput)
/* harmony export */ });
/* harmony import */ var _constants_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants.js */ "./src/js/constants/constants.js");

var $ = function $(selector) {
  return document.querySelector(selector);
};
var $$ = function $$(selector) {
  return document.querySelectorAll(selector);
};
var isEndOfScroll = function isEndOfScroll(element) {
  return element.scrollTop + element.clientHeight >= element.scrollHeight - _constants_constants_js__WEBPACK_IMPORTED_MODULE_0__.SCROLL_OFFSET;
};
var validateInput = function validateInput(input) {
  if (!input) {
    throw new Error(_constants_constants_js__WEBPACK_IMPORTED_MODULE_0__.ERROR.MESSAGE.EMPTY_INPUT);
  }
};
function throttle(callBack, delay) {
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
}

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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  padding: 64px 0;\n  font-size: 16px;\n}\n\n#app {\n  max-width: 1020px;\n  margin: 0 auto;\n}\n\n.classroom-container__title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 64px;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n}\n\n.button {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 1.25px;\n}\n\n.going-watch {\n  border-radius: 4px 0 0 4px;\n}\n\n.watched {\n  border-radius: 0 4px 4px 0;\n  margin-left: -5px;\n}\n\n.select__button {\n  width: 120px;\n  background: rgba(0, 188, 212, 0.12);\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  height: 36px;\n  background: #f5f5f5;\n  cursor: pointer;\n  margin-bottom: 39px;\n}\n\n.nav__button {\n  width: 80px;\n  height: 36px;\n  background: #f5f5f5;\n}\n\n.nav__button:hover {\n  background: #ebebeb;\n}\n\n.saved-video-list {\n  width: 1040px;\n  height: 493px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n  overflow-y: scroll;\n}\n\n.video-item-buttons {\n  display: flex;\n  justify-content: flex-end;\n}\n.video-item__watched-button {\n  width: 36px;\n  height: 36px;\n  padding: 6px 2px;\n  margin: 4px;\n}\n\n.video-item__delete-button {\n  width: 36px;\n  height: 36px;\n  padding: 6px 2px;\n  margin: 4px;\n}\n\n.nothing-saved {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.nothing-saved .nothing-saved__image {\n  width: 720px;\n  height: 480px;\n  margin-bottom: 32px;\n}\n\n.checked {\n  background-color: rgba(0, 188, 212, 0.12);\n}\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,mCAAmC;EACnC,qCAAqC;EACrC,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;AAC3C","sourcesContent":["body {\n  padding: 64px 0;\n  font-size: 16px;\n}\n\n#app {\n  max-width: 1020px;\n  margin: 0 auto;\n}\n\n.classroom-container__title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  margin-bottom: 64px;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n}\n\n.button {\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 1.25px;\n}\n\n.going-watch {\n  border-radius: 4px 0 0 4px;\n}\n\n.watched {\n  border-radius: 0 4px 4px 0;\n  margin-left: -5px;\n}\n\n.select__button {\n  width: 120px;\n  background: rgba(0, 188, 212, 0.12);\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  height: 36px;\n  background: #f5f5f5;\n  cursor: pointer;\n  margin-bottom: 39px;\n}\n\n.nav__button {\n  width: 80px;\n  height: 36px;\n  background: #f5f5f5;\n}\n\n.nav__button:hover {\n  background: #ebebeb;\n}\n\n.saved-video-list {\n  width: 1040px;\n  height: 493px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n  overflow-y: scroll;\n}\n\n.video-item-buttons {\n  display: flex;\n  justify-content: flex-end;\n}\n.video-item__watched-button {\n  width: 36px;\n  height: 36px;\n  padding: 6px 2px;\n  margin: 4px;\n}\n\n.video-item__delete-button {\n  width: 36px;\n  height: 36px;\n  padding: 6px 2px;\n  margin: 4px;\n}\n\n.nothing-saved {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.nothing-saved .nothing-saved__image {\n  width: 720px;\n  height: 480px;\n  margin-bottom: 32px;\n}\n\n.checked {\n  background-color: rgba(0, 188, 212, 0.12);\n}\n"],"sourceRoot":""}]);
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
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAIA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;EACZ,mCAAmC;AACrC;;AAEA;;;;EAIE,aAAa;AACf","sourcesContent":["@import './app.css';\n@import './modal.css';\n@import './skeleton.css';\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.modal-container.hide {\n  display: none;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n  position: relative;\n  width: 1080px;\n  height: 727px;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 50px 30px 32px 30px;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.search-input {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.search-input__keyword {\n  width: 400px;\n  height: 36px;\n  margin-right: 20px;\n  padding: 4px 8px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: #8b8b8b;\n  font-size: 16px;\n}\n\n.search-input__search-button {\n  width: 72px;\n  height: 36px;\n  background: #00bcd4;\n  color: #ffffff;\n}\n\n.search-result.search-result--no-result {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.no-result__image {\n  width: 190px;\n  height: 140px;\n  margin-bottom: 32px;\n}\n\n.no-result__description {\n  font-size: 16px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.video-list {\n  width: 1040px;\n  height: 493px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n  overflow-y: scroll;\n}\n\n.video-item {\n  position: relative;\n  width: 240px;\n  height: 255px;\n}\n\n.video-list.hide {\n  display: none;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 4px 0;\n}\n\n.video-item__channel-name {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 80px;\n  height: 36px;\n  background: #f9f9f9;\n  margin-top: 4px;\n}\n\n.video-item__save-button:hover {\n  background: #efefef;\n}\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;AACT;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,qCAAqC;EACrC,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":[".modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.modal-container.hide {\n  display: none;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n  position: relative;\n  width: 1080px;\n  height: 727px;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 50px 30px 32px 30px;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.search-input {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.search-input__keyword {\n  width: 400px;\n  height: 36px;\n  margin-right: 20px;\n  padding: 4px 8px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: #8b8b8b;\n  font-size: 16px;\n}\n\n.search-input__search-button {\n  width: 72px;\n  height: 36px;\n  background: #00bcd4;\n  color: #ffffff;\n}\n\n.search-result.search-result--no-result {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.no-result__image {\n  width: 190px;\n  height: 140px;\n  margin-bottom: 32px;\n}\n\n.no-result__description {\n  font-size: 16px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.video-list {\n  width: 1040px;\n  height: 493px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n  overflow-y: scroll;\n}\n\n.video-item {\n  position: relative;\n  width: 240px;\n  height: 255px;\n}\n\n.video-list.hide {\n  display: none;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 4px 0;\n}\n\n.video-item__channel-name {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 80px;\n  height: 36px;\n  background: #f9f9f9;\n  margin-top: 4px;\n}\n\n.video-item__save-button:hover {\n  background: #efefef;\n}\n"],"sourceRoot":""}]);
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
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _assets_images_not_found_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/not_found.png */ "./src/assets/images/not_found.png");
/* harmony import */ var _assets_images_nothing_saved_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/nothing_saved.png */ "./src/assets/images/nothing_saved.png");
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.js */ "./src/js/App.js");




(0,_App_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map