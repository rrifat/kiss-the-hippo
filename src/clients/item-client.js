import client from './api-client';

function getResponse(type) {
  return item =>
    ({
      channel: {
        uid: item.uid,
        name: item.name,
        slug: item.slug,
        logo: item.logo,
        epg: item.epg || 'not available',
        active: item.active
      },
      user: {
        uid: item.uid,
        username: item.username,
        password: item.password,
        email: item.email,
        phone: item.phone,
        package: item.package,
        active: item.active
      },
      package: {
        uid: item.uid,
        name: item.name,
        active: item.active,
        price: item.price
      }
    }[type]);
}

function handleResponse(data = [], type) {
  return data.map(getResponse(type));
}

function readAll(path) {
  return client(`${path}/`)
    .then(({ data }) => handleResponse(data, path))
    .catch(err => console.log(err));
}

function create(path, data) {
  return client(`${path}/`, { body: data }).catch(err => console.log(err));
}

function update(path, data) {
  const { uid } = data;
  return client(`${path}/${uid}`, { body: data, method: 'PUT' }).catch(err =>
    console.log(err)
  );
}

function remove(path, { uid, ...data }) {
  return client(`${path}/${uid}`, { body: data, method: 'DELETE' }).catch(err =>
    console.log(err)
  );
}

export { readAll, create, update, remove };
