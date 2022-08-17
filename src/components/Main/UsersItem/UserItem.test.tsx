import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserItem from "./UsersItem";
import {BrowserRouter} from "react-router-dom";
import UsersItem from "./UsersItem";

const onClick = jest.fn()

describe('UserItem component', () => {
        it('Renders without props', () => {
            render(<BrowserRouter><UserItem id={''}/></BrowserRouter>)
        })
        it('UserItem snapshot', () => {
            const main = render(<BrowserRouter> <UsersItem id={''}/></BrowserRouter>);
            expect(main).toMatchSnapshot();
        })
    }
)