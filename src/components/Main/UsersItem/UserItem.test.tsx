import {render, screen} from "@testing-library/react";
import UserItem from "./UsersItem";
import {BrowserRouter, MemoryRouter} from "react-router-dom";
import UsersItem from "./UsersItem";
import userEvent from "@testing-library/user-event";
import Router from "../../Router";

const onClick = jest.fn()

describe('UserItem component', () => {

        it('Renders without props', () => {
            render(<BrowserRouter><UserItem id={''}/></BrowserRouter>)
        })
        it('UserItem snapshot', () => {
            const main = render(<BrowserRouter> <UsersItem id={''}/></BrowserRouter>);
            expect(main).toMatchSnapshot();
        })
        it('navigate to user',()=>{
            render(<MemoryRouter initialEntries={['/user/1']}><Router/></MemoryRouter>)
            expect(screen.getByTestId('user-page-error' || '')).toBeInTheDocument()
        })

    }
)