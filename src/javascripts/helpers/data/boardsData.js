import axios from 'axios';
import apiKeys from '../apiKeys.json';
import pinsData from './pinsData';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`).then((response) => {
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

const getSingleBoard = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((response) => {
      const board = Object.values(response.data);
      const thisBoard = board[0];
      resolve(thisBoard);
    }).catch((error) => reject(error));
});

const deleteBoard = (boardId) => {
  pinsData.getPins(boardId)
    .then((response) => {
      response.forEach((pin) => {
        pinsData.deletePin(pin.pinId);
      });
    })
    .then(() => {
      getSingleBoard(boardId)
        .then((response) => {
          axios.delete(`${baseUrl}/boards/${response.boardId}.json`);
        });
    });
};

const addBoard = (data) => axios.post(`${baseUrl}/boards.json`, data)
  .then((response) => {
    const update = { boardId: response.data.name };
    axios.patch(`${baseUrl}/boards/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

export default { getAllBoards, deleteBoard, addBoard };
