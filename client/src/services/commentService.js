import * as request from '../lib/request';

const base_url = 'http://localhost:3030/data/comments';

export const getAll = async (gameId) => {
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`
    });

    const result = await request.get(`${base_url}?${query}`);
    //TODO: temp solution until migration to collections service
    // return result.filter(comment => comment.gameId === gameId);
    return result;
};

export const create = async (gameId, username, text) => {
    const newComment = await request.post(base_url, {
        gameId,
        username,
        text,
    });

    return newComment;
};