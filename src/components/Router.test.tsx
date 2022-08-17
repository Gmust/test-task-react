import {render, screen} from "@testing-library/react";
import Router from "./Router";
import {BrowserRouter, MemoryRouter} from "react-router-dom";


describe("test router", () => {
    it('Router render', () => {
        render(<BrowserRouter><Router/></BrowserRouter>)
    })
    it('Error page test', () => {
        render(<MemoryRouter initialEntries={['/sdsdasdadsad']}><Router/></MemoryRouter>)
        expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
    })


})