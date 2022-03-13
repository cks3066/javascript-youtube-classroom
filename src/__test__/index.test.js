/* eslint-disable no-undef */
import YoutubeMachine from '../js/domain/YoutubeMachine.js';
import { fetchData } from '../fetchData';

describe('유튜브 검색 단위 테스트', () => {
  test('입력된 검색어가 없거나, 공백으로 입력된 경우 검색이 안되게한다.', () => {
    const trimedInput = '    '.trim();
    const youtubeMachine = new YoutubeMachine();
    expect(() => (youtubeMachine.searchTarget = trimedInput)).toThrow(Error);
  });

  test('API 테스트', () => {
    const trimedInput = '우테코'.trim();
    const youtubeMachine = new YoutubeMachine();
    youtubeMachine.searchTarget = trimedInput;
    const response = youtubeMachine.callSearchAPI();
    youtubeMachine.updateData(response);
    userInterface.renderSearchResult(response);
  });
});
