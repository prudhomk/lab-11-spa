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
  const response = await (await request.post(URL)).send(being);
  return response.body;
}