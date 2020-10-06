import boardData from '../../helpers/data/boardsData';
import boards from '../cards/boards';

const boardsView = () => {
  $('#app').html('<h1>Boards</h1><div id="boards" class="d-flex justify-content-center"></div>');
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
