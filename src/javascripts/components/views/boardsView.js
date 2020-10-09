import boardData from '../../helpers/data/boardsData';
import boards from '../cards/boards';

const boardsView = () => {
  $('#app').html('<div><h1 class="d-inline-flex">Boards</h1><i class="fa fa-plus d-inline-flex justify-content-end align-self-center mr-4" aria-hidden="true"></i></div><div id="boards" class="d-flex justify-content-center"></div>');
  boardData.getAllBoards()
    .then((response) => {
      if (response.length) {
        response.forEach((board) => {
          $('#boards').append(boards.boardMaker(board));
        });
      } else {
        $('#boards').append("<p>You don't have any boards yet.</p>");
      }
    });
};

export default { boardsView };
