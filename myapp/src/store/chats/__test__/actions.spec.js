import { addChat } from "../actions";

describe ('getArticles', () => {

    it('Reducers chat', () => {
        const result = addChat("id-12345", "Vasya");
        //Заведомо не верные данные "id-12345" и "Vasya"
        expect(result).toEqual({
            type: "ADD_CHAT",
            payload: {
                chatId: "id",
                name: "Name",
            }
        });
    });

});