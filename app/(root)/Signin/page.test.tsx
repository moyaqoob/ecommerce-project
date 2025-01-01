// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import Page, { TextInput } from './page';

// describe('Signin Page', () => {
//     it('renders the login heading', () => {
//         render(<Page />);
//         const heading = screen.getByText('Login');
//         expect(heading).toBeInTheDocument();
//     });

//     it('renders the email input field', () => {
//         render(<Page />);
//         const emailInput = screen.getByPlaceholderText('Email');
//         expect(emailInput).toBeInTheDocument();
//         expect(emailInput).toHaveAttribute('type', 'email');
//     });

//     it('renders the password input field', () => {
//         render(<Page />);
//         const passwordInput = screen.getByPlaceholderText('Password');
//         expect(passwordInput).toBeInTheDocument();
//         expect(passwordInput).toHaveAttribute('type', 'password');
//     });

//     it('TextInput component renders correctly', () => {
//         render(<TextInput type="text" placeholder="Test Placeholder" />);
//         const input = screen.getByPlaceholderText('Test Placeholder');
//         expect(input).toBeInTheDocument();
//         expect(input).toHaveAttribute('type', 'text');
//     });
// });
