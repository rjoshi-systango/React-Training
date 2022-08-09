import { getByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeeting from './Greeting';

describe('Greeting component', () => {
    test('Greeeting hello world as text', ()=> {
        //Arrange
        render(<Greeeting />);
    
        //Act
        // ... nothing
    
        //Assert
        const helloWorld = screen.getByText('Hello World!', {exact: false});
        expect(helloWorld).toBeInTheDocument();
    });

    test('renders if button was not clicked  "good to see you"', () =>{
        render(<Greeeting />);

        const outputElement = screen.getByText('good to see you', {exact: false});
        expect(outputElement).toBeInTheDocument();
    });

    test('renders if button is click "Changed!" ', () => {
        render(<Greeeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    })
})
