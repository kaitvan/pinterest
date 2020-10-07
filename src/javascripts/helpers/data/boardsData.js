import axios from 'axios';
import apiKeys from '../apiKeys.json';

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
  axios.get(`${baseUrl}/boards.json?orderBy="boardId"&equalTo=${Number(boardId)}`)
    .then((response) => {
      const board = Object.values(response.data);
      const thisBoard = board[0];
      resolve(thisBoard);
    }).catch((error) => reject(error));
});

const deleteBoard = (boardId) => {
  getSingleBoard(boardId)
    .then((response) => {
      axios.delete(`${baseUrl}/boards/board${response.boardId}.json`);
    });
};

export default { getAllBoards, deleteBoard };
