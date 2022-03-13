import { $, isEndOfScroll, throttle } from './util/general.js';
import YoutubeMachine from './domain/YoutubeMachine.js';
import userInterface from './UI/userInterface.js';
import '../css/index.css';
import '../assets/images/not_found.png';
import storage from './storage/storage.js';
import { THROTTLE_DELAY } from './constants/constants.js';

export default function App() {
  const youtubeMachine = new YoutubeMachine();

  // 핸들러
  const handleSearch = () => {
    try {
      youtubeMachine.resetData();
      userInterface.resetVideoList();
      const searchInput = $('#search-input-keyword').value.trim();
      youtubeMachine.searchTarget = searchInput;
      setTimeout(() => {
        userInterface.renderSkeletonUI();
      }, 50);

      const response = youtubeMachine.callSearchAPI();
      youtubeMachine.updateData(response);
      userInterface.renderSearchResult(response);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleScroll = e => {
    if (isEndOfScroll(e.target)) {
      userInterface.renderSkeletonUI();
      const response = youtubeMachine.callSearchAPI();
      youtubeMachine.updateData(response);
      userInterface.renderNextSearchResult(response);
    }
  };

  const handleSaveButtonClick = e => {
    if (!e.target.classList.contains('video-item__save-button')) {
      return;
    }
    e.target.closest('button').hidden = true;
    const { videoId } = e.target.parentElement.dataset;
    storage.saveVideo(videoId);
  };

  // 이벤트 등록
  $('#search-modal-button').addEventListener('click', () => {
    $('.modal-container').classList.toggle('hide');
  });

  $('.video-list').addEventListener('scroll', throttle(handleScroll, THROTTLE_DELAY));

  $('.video-list').addEventListener('click', handleSaveButtonClick);

  $('.search-input').addEventListener('submit', e => {
    e.preventDefault();
    console.dir(e.target.children[1].value);
    handleSearch();
  });

  const debounce = (fn, delay) => {
    let timeout;
    return function () {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        fn.apply(this, arguments);
      }, delay);
    };
  };

  $('#search-input-keyword').addEventListener(
    'keyup',
    debounce(e => {
      $('#suggestion-list').replaceChildren();
      $('.suggestion').hidden = true;
      console.log(e.target.value.length);
      if (e.target.value.length == 0) {
        $('.suggestion').hidden = true;
        return;
      }
      fetch(
        convertToCorsUrl(
          `https://suggestqueries.google.com/complete/search?output=toolbar&q=${e.target.value}`,
        ),
      )
        .then(res => res.text())
        .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
        .then(data => {
          const jsonData = xmlToJson.parse(data);
          console.log(jsonData.toplevel);
          console.log(jsonData.toplevel.CompleteSuggestion);
          if (jsonData.toplevel && jsonData.toplevel.CompleteSuggestion) {
            xmlToJson
              .parse(data)
              .toplevel.CompleteSuggestion.slice(0, 5)
              .forEach(({ suggestion }) => {
                $('#suggestion-list').insertAdjacentHTML(
                  'beforeend',
                  `<li>${suggestion.data}</li>`,
                );
              });
            $('.suggestion').hidden = false;
          }
        });
    }, 200),
  );

  $('#suggestion-list').addEventListener('click', e => {
    e.preventDefault();
    if (e.target.localName === 'li') {
      $('#search-input-keyword').value = e.target.textContent;
      $('.suggestion').hidden = true;
    }
  });

  $('#search-input-keyword').addEventListener('focusout', e => {
    setTimeout(() => {
      $('.suggestion').hidden = true;
    }, 200);
  });

  $('#search-input-keyword').addEventListener('focusin', e => {
    $('#suggestion-list').replaceChildren();
    $('.suggestion').hidden = true;
    console.log(e.target.value.length);
    if (e.target.value.length == 0) {
      $('.suggestion').hidden = true;
      return;
    }
    fetch(
      convertToCorsUrl(
        `https://suggestqueries.google.com/complete/search?output=toolbar&q=${e.target.value}`,
      ),
    )
      .then(res => res.text())
      .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
      .then(data => {
        const jsonData = xmlToJson.parse(data);
        console.log(jsonData.toplevel);
        console.log(jsonData.toplevel.CompleteSuggestion);
        if (jsonData.toplevel && jsonData.toplevel.CompleteSuggestion) {
          xmlToJson
            .parse(data)
            .toplevel.CompleteSuggestion.slice(0, 5)
            .forEach(({ suggestion }) => {
              $('#suggestion-list').insertAdjacentHTML('beforeend', `<li>${suggestion.data}</li>`);
            });
          $('.suggestion').hidden = false;
        }
      });
  });
}

App();

function convertToCorsUrl(url) {
  //Cors-Anywhere형식의 url생성
  var protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';
  return protocol + '//cors-anywhere.herokuapp.com/' + url;
}
