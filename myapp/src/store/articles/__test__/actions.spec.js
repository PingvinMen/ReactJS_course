import { getArticlesPending, getArticlesSuccess } from "../actions";
import { REQUEST_PENDING, REQUEST_SUCCESS } from "../actionTypes";

describe ('getArticles', () => {

    it('return an object with specific type', () => {
        const result = getArticlesSuccess(1);

        expect(result).toEqual({ type: REQUEST_SUCCESS, payload: 1});
    });

    it('return an object with specific type', () => {
        const result = getArticlesPending();

        expect(result).toEqual({ type: REQUEST_PENDING});
    });

});