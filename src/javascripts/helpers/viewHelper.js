import addBoardView from '../components/views/addBoardView';
import addPinView from '../components/views/addPinView';
import boardsView from '../components/views/boardsView';
import pinsView from '../components/views/pinsView';
import updatePinView from '../components/views/updatePinView';

const viewHelper = (id, arg) => {
  switch (id) {
    case 'boards':
      return boardsView.boardsView();
    case 'pins':
      return pinsView.pinsView(arg);
    case 'add-board':
      return addBoardView.addBoardView();
    case 'add-pin':
      return addPinView.addPinView();
    case 'update-pin':
      return updatePinView.updatePinView(arg);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', '.card.board', (e) => {
    const boardId = e.currentTarget.id;
    viewHelper('pins', boardId);
  });
  $('body').on('click', '#logo-btn', () => {
    viewHelper('boards');
  });
  $('body').on('click', '#add-board-btn', () => {
    viewHelper('add-board');
  });
  $('body').on('click', '#add-board-submit', () => {
    setTimeout(() => {
      viewHelper('boards');
    }, 1000);
  });
  $('body').on('click', '#add-pin-btn', () => {
    viewHelper('add-pin');
  });
  $('body').on('click', '#add-pin-submit', () => {
    const boardId = $('#boardSelection').val();
    setTimeout(() => {
      viewHelper('pins', boardId);
    }, 1000);
  });
  $('body').on('click', '.edit-btn', (e) => {
    const pinId = e.currentTarget.id;
    viewHelper('update-pin', pinId);
  });
  $('body').on('click', '#update-pin-submit', () => {
    const boardId = $('#boardSelection').val();
    setTimeout(() => {
      viewHelper('pins', boardId);
    }, 1000);
  });
};

export default { viewListener };
