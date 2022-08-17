import {render, screen} from "@testing-library/react";
import User from "./User";

describe('User component', () => {
    it('Render test ', () => {
        render(<User/>)
        const warningIdElem = screen.getByText(/no profile/i)
        expect(warningIdElem).toBeInTheDocument();
    });
})