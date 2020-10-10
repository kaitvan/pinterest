import pinForm from '../forms/pinForm';

const addPinView = () => {
  $('#app').html('<div class="d-flex justify-content-center"><h1>Add a Pin</h1>');
  $('#app').append('<div id="add-pin-form" class="d-flex justify-content-center"></div>');
  pinForm.makePinForm();
};

export default { addPinView };
