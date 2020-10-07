const boardMaker = (boardObject) => {
  const domString = `<div class="board-card m-3" id="${boardObject.boardId}" style="width: 18rem;">
                        <img class="card-img-top" src="${boardObject.imageUrl}" alt=${boardObject.name}">
                      <div class="card-body">
                        <h5 class="card-title">${boardObject.name}</h5>
                      </div>
                    </div>`;
  return domString;
};

export default { boardMaker };
