import pins from '../../helpers/data/pinsData';
import card from '../cards/pins';

const pinsView = (boardId) => {
  pins.getPins(boardId).then((response) => {
    if (response.length) {
      $('#app').html('');
      $('#app').html('<h1>Pins</h1><div id="pins" class="d-flex justify-content-center"></div>');
      response.forEach((pin) => {
        $('#pins').append(card.pinMaker(pin));
      });
    } else {
      $('#app').html('');
      $('#app').append("<p>You don't have any pins yet.</p>");
    }
  });
};

export default { pinsView };
