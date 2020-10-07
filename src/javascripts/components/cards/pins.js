const pinMaker = (pinObject) => {
  const domString = `<div class="pin-card m-3" id="${pinObject.pinId}" style="width: 18rem;">
                      <a href="${pinObject.url}"><img class="card-img-top" src="${pinObject.imageUrl}" alt=${pinObject.description}"></a>
                      <div class="card-body">
                        <p>${pinObject.description}</p>
                      </div>
                    </div>`;
  return domString;
};

export default { pinMaker };
