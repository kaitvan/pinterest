import pins from '../../helpers/data/pinsData';
import card from '../cards/pins';

const pinsView = (boardId) => {
  pins.getPins(boardId).then((response) => {
    if (response.length) {
      $('#app').html('');
      $('#app').html('<div class="d-flex justify-content-center"><h1>Pins</h1><i class="fa fa-plus mr-4 align-self-center" id="add-pin-btn" aria-hidden="true"></i></div>');
      $('#app').append('<div id="pins" class="d-flex justify-content-center"></div>');
      response.forEach((pin) => {
        $('#pins').append(card.pinMaker(pin));
      });
    } else {
      $('#app').html('');
      $('#app').append("<div class='d-flex justify-content-center'><p>You don't have any pins yet.</p><i class='fa fa-plus mr-4 align-self-center' id='add-pin-btn' aria-hidden='true'></i></div>");
    }
  });
};

export default { pinsView };
