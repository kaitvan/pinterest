import pinsData from '../../helpers/data/pinsData';

const pinMaker = (pinObject) => {
  const domString = `<div class="card pin m-3" id="${pinObject.pinId}" style="width: 18rem;">
                      <a href="${pinObject.url}"><img class="card-img-top" src="${pinObject.imageUrl}" alt=${pinObject.description}"></a>
                      <div class="card-body d-flex justify-content-between">
                        <p class="text-left">${pinObject.description}</p>
                        <i class="fas fa-trash-alt delete-btn" id="${pinObject.pinId}"></i>
                      </div>
                    </div>`;
  $('body').on('click', '.card.pin .delete-btn', (e) => {
    e.stopImmediatePropagation();
    $(`.card#${e.currentTarget.id}`).remove();
    pinsData.deletePin(e.currentTarget.id);
  });
  return domString;
};

export default { pinMaker };
