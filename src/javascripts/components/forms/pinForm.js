import pinsData from '../../helpers/data/pinsData';
import boardsData from '../../helpers/data/boardsData';

const makePinForm = () => {
  $('#add-pin-form').html(`<form class="form">
                              <div class="form-group">
                                <label for="siteUrlInput">Pin Link</label>
                                <input type="text" class="form-control" id="siteUrlInput" placeholder="Enter the link you want to pin here">
                              </div>
                              <div class="form-group">
                                <label for="pinImageUrlInput">Pin Image</label>
                                <input type="text" class="form-control" id="pinImageUrlInput" placeholder="Enter an image URL for your pin">
                              </div>
                              <div class="form-group">
                                <label for="descriptionInput">Description</label>
                                <input type="text" class="form-control" id="descriptionInput" placeholder="Enter a short description of your pin">
                              </div>
                              <div class="form-group">
                                <label for="boardSelection">Board</label>
                                <select class="form-control" id="boardSelection">
                                  <option value="">Select a Board</option>
                                </select>
                              </div>
                              <div id="error-message"></div>
                              <button type="submit" class="btn btn-primary" id="add-pin-submit">Submit</button>
                            </form>
  `);
  boardsData.getAllBoards().then((response) => {
    response.forEach((board) => {
      $('#boardSelection').append(`<option value="${board.boardId}">${board.name}</option>`);
    });
  });
  $('#add-pin-submit').on('click', (e) => {
    e.preventDefault();
    const data = {
      boardId: $('#boardSelection').val() || false,
      url: $('#siteUrlInput').val() || false,
      imageUrl: $('#pinImageUrlInput').val() || false,
      description: $('#descriptionInput').val() || false
    };
    if (Object.values(data).includes(false)) {
      $('#error-message').html('<div class="alert alert-danger" role="alert">Please complete all fields</div>');
    } else {
      $('#error-message').html('');
      pinsData.addPin(data);
    }
  });
};

export default { makePinForm };
