import pinsData from '../../helpers/data/pinsData';
import form from '../forms/updatePinForm';

const updatePinView = (pinId) => {
  $('#app').html('<div id="update-pin-form"></div>');
  pinsData.getSinglePin(pinId).then((response) => {
    form.updatePinForm(response);
  });
};

export default { updatePinView };
