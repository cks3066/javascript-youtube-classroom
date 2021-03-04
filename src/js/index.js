import API_KEY from './apiKey.js';
import YOUTUBE_SEARCH_API from './library/constants/api.js';
import dom from './library/DOMelements.js';
import createVideoListTemplate from './library/templates/videoList.js';
import createVideoSkeletonTemplate from './library/templates/videoSkeleton.js';
import state from './library/state.js';
import createNotFoundTemplate from './library/templates/notFound.js';

dom.$searchButton.addEventListener('click', () =>
  dom.$searchModal.classList.add('open')
);

dom.$modalCloseButton.addEventListener('click', () =>
  dom.$searchModal.classList.remove('open')
);

function fetchSearchResult(keyword, nextPageToken = '') {
  return fetch(
    `${YOUTUBE_SEARCH_API}&key=${API_KEY}&pageToken=${nextPageToken}&q=${keyword}`
  )
    .then(data => data.json())
    .catch(e => console.error(e));
}

dom.$videoSearchForm.addEventListener('submit', async e => {
  e.preventDefault();

  const keyword = e.target.elements['video-search-input'].value;
  state.setKeyword(keyword);
  dom.$videoSearchResult.innerHTML = createVideoSkeletonTemplate();
  const { nextPageToken, items: resultItems } = await fetchSearchResult(
    keyword
  );

  state.setNextPageToken(nextPageToken);
  dom.$videoSearchResult.innerHTML = resultItems.length
    ? createVideoListTemplate(resultItems)
    : createNotFoundTemplate();
});

function createVideoInfo({
  videoId,
  title,
  channelId,
  channelTitle,
  publishTime,
}) {
  return {
    id: { videoId },
    snippet: { title, channelId, channelTitle, publishTime },
    isWatched: false,
  };
}

dom.$videoSearchResult.addEventListener('click', e => {
  if (!e.target.classList.contains('js-save-button')) return;

  const $video = e.target.closest('.js-video');
  const videoInfo = createVideoInfo($video.dataset);

  state.addVideoInfo(videoInfo);
  dom.$videoList.innerHTML = createVideoListTemplate([...state.videoInfos]);

  e.target.hidden = true;
});

window.onload = (function () {
  const options = {
    root: dom.$searchModal,
    rootMargin: '0px',
    threshold: 0.85,
  };

  const observer = new IntersectionObserver(async () => {
    const { nextPageToken, items: searchResult } = await fetchSearchResult(
      state.keyword,
      state.nextPageToken
    );

    state.setNextPageToken(nextPageToken);
    dom.$videoSearchResult.innerHTML += createVideoListTemplate(searchResult);
  }, options);

  observer.observe(dom.$endPoint);
})();
