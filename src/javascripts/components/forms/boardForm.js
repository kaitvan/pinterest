import boardsData from '../../helpers/data/boardsData';

const makeBoardForm = () => {
  $('#add-board-form').html(`<form class="form">
                              <div class="form-group">
                                <label for="boardNameInput">Board Name</label>
                                <input type="text" class="form-control" id="boardNameInput" placeholder="Choose a name for your board">
                              </div>
                              <div class="form-group">
                                <label for="boardImageUrlInput">Board Cover Image</label>
                                <input type="text" class="form-control" id="boardImageUrlInput" placeholder="Enter an image URL for your cover image">
                              </div>
                              <div id="error-message"></div>
                              <button type="submit" class="btn btn-primary" id="add-board-submit">Submit</button>
                            </form>
  `);
  $('#add-board-submit').on('click', (e) => {
    e.preventDefault();
    const data = {
      name: $('#boardNameInput').val() || false,
      imageUrl: $('#boardImageUrlInput').val() || false,
    };
    if (Object.values(data).includes(false)) {
      $('#error-message').html('<div class="alert alert-danger" role="alert">Please complete all fields</div>');
    } else {
      $('#error-message').html('');
      boardsData.addBoard(data);
    }
  });
};

export default { makeBoardForm };
