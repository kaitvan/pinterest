import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`).then((response) => {
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
  axios.get(`${baseUrl}/pins.json?orderBy="pinId"&equalTo="${pinId}"`)
    .then((response) => {
      const pin = Object.values(response.data);
      const thisPin = pin[0];
      resolve(thisPin);
    }).catch((error) => reject(error));
});

const deletePin = (pinId) => {
  getSinglePin(pinId)
    .then((response) => {
      axios.delete(`${baseUrl}/pins/${response.pinId}.json`);
    });
};

const addPin = (data) => axios.post(`${baseUrl}/pins.json`, data)
  .then((response) => {
    const update = { pinId: response.data.name };
    axios.patch(`${baseUrl}/pins/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

export default { getPins, deletePin, addPin };
