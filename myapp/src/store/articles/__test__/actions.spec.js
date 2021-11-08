import { getArticlesPending, getArticlesSuccess } from "../actions";
import { REQUEST_PENDING, REQUEST_SUCCESS } from "../actionTypes";

describe ('getArticlesPending', () => {

    it('return an object with specific type', () => {
        const result = getArticlesSuccess();

        expect(result).toEqual({ type: REQUEST_SUCCESS, payload: undefined});
    });

    it('return an object with specific type', () => {
        const result = getArticlesPending();

        expect(result).toEqual({ type: REQUEST_PENDING});
    });

});