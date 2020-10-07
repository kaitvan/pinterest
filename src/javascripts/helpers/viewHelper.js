import boardsView from '../components/views/boardsView';
import pinsView from '../components/views/pinsView';

const viewHelper = (id, arg) => {
  switch (id) {
    case 'boards':
      return boardsView.boardsView();
    case 'pins':
      return pinsView.pinsView(arg);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', '.board-card', (e) => {
    const boardId = e.currentTarget.id;
    viewHelper('pins', boardId);
  });
};

export default { viewListener };
