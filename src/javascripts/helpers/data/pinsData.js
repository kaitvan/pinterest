import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo=${Number(boardId)}`).then((response) => {
    const allPins = response.data;
    const pins = [];
    if (allPins) {
      Object.keys(allPins).forEach((pinId) => {
        pins.push(allPins[pinId]);
      });
    }
    resolve(pins);
  }).catch((error) => reject(error));
});

const getSinglePin = (pinId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="pinId"&equalTo=${Number(pinId)}`)
    .then((response) => {
      const pin = Object.values(response.data);
      const thisPin = pin[0];
      resolve(thisPin);
    }).catch((error) => reject(error));
});

const deletePin = (pinId) => {
  getSinglePin(pinId)
    .then((response) => {
      axios.delete(`${baseUrl}/pins/pin${response.pinId}.json`);
    });
};

export default { getPins, deletePin };
