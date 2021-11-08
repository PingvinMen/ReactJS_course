import { getFormattedSchedule } from "../example";

describe('getFormattedSchedule', () => {

    it('alert', () => {
        const spy = jest.spyOn(window, 'alert');
        const arr = ['1',2,'4','fsd'];
        getFormattedSchedule(arr);

        expect(spy).toHaveBeenCalledTimes(1);
        spy.mockClear();
    });

    it('should return 0th-3rd els of provided array', () =>{
        const arr = ['1',2,'4','fsd'];

        expect(getFormattedSchedule(arr)).toEqual('1-fsd');
    });
});