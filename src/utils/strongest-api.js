import request from 'superagent';

const URL = '/api/strongest';

export async function getStrongest() {
  const response = await request.get(URL);
  return response.body;
}

export async function getBeing(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}

export async function addBeing(being) {
  const response = await request.post(URL).send(being);
  return response.body;
}

export async function deleteBeing(id) {
  const response = await request.delete(`${URL}/${id}`);
  return response.body;
}

export async function updateBeing(being) {
  const response = await request.put(`${URL}/${being.id}`).send(being);
  return response.body;
}