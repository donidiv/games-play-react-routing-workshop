import * as request from '../lib/request';

const base_url = 'http://localhost:3030/data/comments';

export const getAll = async (gameId) => {
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${base_url}?${query}`);
    //TODO: temp solution until migration to collections service
    // return result.filter(comment => comment.gameId === gameId);
    return result;
};

export const create = async (gameId, text) => {
    const newComment = await request.post(base_url, {
        gameId,
        text,
    });

    return newComment;
};