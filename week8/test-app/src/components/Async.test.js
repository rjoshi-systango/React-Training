import { render, screen }  from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {
    test('renders posts if request succeds', async() => {
        render(<Async />);
        
        const listItem  = await screen.findAllByRole("listitem");
        expect(listItem).not.toHaveLength(0);
    })
})