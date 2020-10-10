import boardData from '../../helpers/data/boardsData';
import boards from '../cards/boards';

const boardsView = () => {
  $('#app').html('<div class="d-flex justify-content-center"><h1>Boards</h1><i class="fa fa-plus mr-4 align-self-center" id="add-board-btn" aria-hidden="true"></i></div>');
  $('#app').append('<div id="boards" class="d-flex justify-content-center"></div>');
  boardData.getAllBoards()
    .then((response) => {
      if (response.length) {
        response.forEach((board) => {
          $('#boards').append(boards.boardMaker(board));
        });
      } else {
        $('#app').html('');
        const domstring = `<div class="d-flex justify-content-center align-items-center">
                            <p>You don't have any boards yet.</p>
                            <i class="fa fa-plus mr-4 align-self-center" id="add-board-btn" aria-hidden="true"></i>
                          </div>`;
        $('#app').append(domstring);
      }
    });
};

export default { boardsView };
