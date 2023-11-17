import { request } from "../lib/request";

const base_url = 'http://localhost:3030/jsonstore/games';

export const getAll = async () => {
   const result = await request('GET', base_url);
   return Object.values(result);
};

export const create = async (gameData) => {
    const response = await fetch(base_url, {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(gameData)
    });

    const result = await response.json();

    return result;
};