import * as request from '../lib/request';

const base_url = 'http://localhost:3030/jsonstore/comments';

export const getAll = async (gameId) => {
    const query = new URLSearchParams({
        where: `gameId='${gameId}'`
    });

    const result = await request.get(base_url);
    //TODO: temp solution until migration to collections service
    return Object.values(result).filter(comment => comment.gameId === gameId);
};

export const create = async (gameId, username, text) => {
    const newComment = await request.post(base_url, {
        gameId,
        username,
        text,
    });

    return newComment;
};