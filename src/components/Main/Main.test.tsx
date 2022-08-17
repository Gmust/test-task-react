import {fireEvent, render, screen} from "@testing-library/react";
import Main from "./Main";


describe('Main component', () => {
        it('Main snapshot', () => {
            const main = render(<Main/>);
            expect(main).toMatchSnapshot();
        })
        it('Main renders', () => {
            render(<Main/>)
            expect(screen.getByRole('heading')).toBeInTheDocument();
            const userListElem = screen.getByText(/something wrong/i)
            expect(userListElem).toBeInTheDocument();
            const btn = screen.getByRole('button')
            expect(btn).toBeInTheDocument();
        })

    }
)