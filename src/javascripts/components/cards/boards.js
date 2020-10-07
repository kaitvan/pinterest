import boardsData from '../../helpers/data/boardsData';

const boardMaker = (boardObject) => {
  const domString = `<div class="card board m-3" id="${boardObject.boardId}" style="width: 18rem;">
                        <img class="card-img-top" src="${boardObject.imageUrl}" alt=${boardObject.name}">
                      <div class="card-body">
                        <h5 class="card-title">${boardObject.name}</h5>
                        <i class="fas fa-trash-alt delete-btn" id="${boardObject.boardId}"></i>
                      </div>
                    </div>`;
  $('body').on('click', '.card.board .delete-btn', (e) => {
    e.stopImmediatePropagation();
    console.warn('delete board clicked', e.currentTarget.id);
    $(`.card#${e.currentTarget.id}`).remove();
    boardsData.deleteBoard(e.currentTarget.id);
  });
  return domString;
};

export default { boardMaker };
