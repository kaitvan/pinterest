import boardsView from '../components/views/boardsView';

const viewHelper = (view) => {
  switch (view) {
    case 'boards':
      return boardsView.boardsView();
    default:
      return console.warn('nothing clicked');
  }
};

export default { viewHelper };
