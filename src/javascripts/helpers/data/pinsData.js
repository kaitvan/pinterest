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

export default { getPins };
