import * as request from "../lib/request";

const base_url = 'http://localhost:3030/jsonstore/games';

export const getAll = async () => {
   const result = await request.get(base_url);
   return Object.values(result);
};

export const create = async (gameData) => {
   const result = await request.post(base_url, gameData);
    return result;
};