import Axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllBoards = () => new Promise((resolve, reject) => {
  Axios.get(`${baseUrl}/boards.json`).then((response) => {
    const allBoards = response.data;
    const boards = [];
    if (allBoards) {
      Object.keys(allBoards).forEach((boardIndex) => {
        boards.push(allBoards[boardIndex]);
      });
    }
    resolve(boards);
  }).catch((error) => reject(error));
});

export default { getAllBoards };
