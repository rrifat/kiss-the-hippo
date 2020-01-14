import client from './api-client';

function handleResponse({ data }) {
  if (!Array.isArray(data)) {
    return data;
  }
  return data.map(pakage => ({
    uid: pakage.uid,
    name: pakage.name,
    active: pakage.active,
    price: pakage.price
  }));
}

function getPack(uid) {
  return client(`package/${uid}`)
    .then(handleResponse)
    .catch(err => console.log(err));
}

function readPack(pID) {
  return client(`package/${pID}/channel`)
    .then(({ data }) => data)
    .catch(err => console.log(err));
}

function createPack(pID, cID) {
  return client(`package/${pID}/channel`, {
    body: { uid: cID }
  });
}

function deletePack(pID, cID) {
  return client(`package/${pID}/channel`, {
    body: { uid: cID },
    method: 'DELETE'
  }).catch(err => console.log(err));
}

export { getPack, createPack, readPack, deletePack };
