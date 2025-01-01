import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './page';

test('renders Home component', () => {
	render(<Home />);
	const linkElement = screen.getByText(/home/i);
	expect(linkElement).toBeInTheDocument();
});