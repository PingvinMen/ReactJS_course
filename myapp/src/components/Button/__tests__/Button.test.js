import{ render } from "@testing-library/react";
import { Button } from "../index";

describe('Button', () => {
    it('matches snapshot', () => {
        const btn = render(<Button>{()=> <span />}</Button>);

        expect(btn).toMatchSnapshot();
    });
});