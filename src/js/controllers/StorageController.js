import { isWatchingMenu, isWatchingVideo, isConfirmCancelButton, isConfirmApproveButton } from './elementValidator.js';
import { MESSAGE } from '../constants.js';

export default class StorageController {
  constructor({ storageModel, storageView }) {
    this.view = storageView;
    this.model = storageModel;
  }

  init() {
    this.showStorage();
    this.attachEvents();
  }

  attachEvents() {
    this.view.$savedVideosWrapper.addEventListener('click', this.onRequestVideoManagement.bind(this));
    this.view.$watchingMenuButton.addEventListener('click', this.onNavigateWatchingVideos.bind(this));
    this.view.$watchedMenuButton.addEventListener('click', this.onNavigateWatchedVideos.bind(this));
    this.view.$removalConfirm.addEventListener('click', this.onConfirmRemoval.bind(this));
  }

  onRequestVideoManagement({ target }) {
    if (!target.classList.contains('video-manage-btn')) {
      return;
    }

    this.model.targetVideo = target.closest('article');

    if (target.classList.contains('js-check-button')) {
      this.proceedMovingVideo();
      return;
    }

    if (target.classList.contains('js-remove-button')) {
      this.view.renderVisibleRemovalConfirm(MESSAGE.ARE_YOU_SURE_TO_REMOVE_VIDEO);
    }
  }

  proceedMovingVideo() {
    const $video = this.model.targetVideo;
    const isWatching = isWatchingVideo($video);

    try {
      this.model.moveVideo();
      this.view.renderMovedVideo($video, isWatching);

      const message = isWatching ? MESSAGE.VIDEO_IS_MOVED_TO_WATCHED_MENU : MESSAGE.VIDEO_IS_MOVED_TO_WATCHING_MENU;

      this.view.renderNotification(message);
      this.showImageNoVideo();
    } catch (error) {
      this.view.renderNotification(MESSAGE.REQUEST_HAS_FAILED);
    }
  }

  onConfirmRemoval({ target }) {
    if (isConfirmCancelButton(target)) {
      this.view.renderInvisibleRemovalConfirm();
      return;
    }
    if (!isConfirmApproveButton(target)) {
      return;
    }
    this.proceedRemovingVideo();
  }

  proceedRemovingVideo() {
    this.view.renderInvisibleRemovalConfirm();

    const $video = this.model.targetVideo;
    const isWatching = isWatchingVideo($video);

    this.model.removeVideo($video.id, isWatching);
    this.view.removeVideo($video);
    this.view.renderNotification(MESSAGE.VIDEO_IS_REMOVED_SUCCESSFULLY);
    this.showImageNoVideo();
  }

  onNavigateWatchingVideos() {
    this.showWatchingVideos();
  }

  onNavigateWatchedVideos() {
    this.showWatchedVideos();
  }

  showStorage() {
    this.view.renderVideosToPrepare(this.model.videos);

    if (isWatchingMenu(this.view.$savedVideosWrapper)) {
      this.showWatchingVideos();
      return;
    }
    this.showWatchedVideos();
  }

  showWatchingVideos() {
    this.view.renderOnlyWatchingVideos();
    this.showImageNoWatchingVideoSaved();
  }

  showWatchedVideos() {
    this.view.renderOnlyWatchedVideos();
    this.showImageNoWatchedVideoSaved();
  }

  showImageNoVideo() {
    isWatchingMenu(this.view.$savedVideosWrapper)
      ? this.showImageNoWatchingVideoSaved()
      : this.showImageNoWatchedVideoSaved();
  }

  showImageNoWatchingVideoSaved() {
    if (this.model.hasNoWatchingVideoSaved()) {
      this.view.renderImageNoWatchingVideo();
    }
  }

  showImageNoWatchedVideoSaved() {
    if (this.model.hasNoWatchedVideoSaved()) {
      this.model.hasNoWatchingVideoSaved()
        ? this.view.renderImageNoWatchingVideo()
        : this.view.renderImageNoWatchedVideo();
    }
  }
}
