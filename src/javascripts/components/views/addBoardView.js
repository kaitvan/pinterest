import boardForm from '../forms/boardForm';

const addBoardView = () => {
  $('#app').html('<div class="d-flex justify-content-center"><h1>Add a Board</h1>');
  $('#app').append('<div id="add-board-form" class="d-flex justify-content-center"></div>');
  boardForm.makeBoardForm();
};

export default { addBoardView };
