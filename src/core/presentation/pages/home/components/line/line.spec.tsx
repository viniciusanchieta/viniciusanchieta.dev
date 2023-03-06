import { render, screen } from '@testing-library/react';
import LineComponent from './line';

const makeSut = () => render(<LineComponent />);

describe('LineComponent', () => {
	test('should render', () => {
		makeSut(); 
	const title = screen.getByRole('heading');
	expect(title).toBeInTheDocument();

	});
});
