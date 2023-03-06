import { render, screen } from '@testing-library/react';
import HeroComponent from './hero';

const makeSut = () => render(<HeroComponent />);

describe('HeroComponent', () => {
	test('should render', () => {
		makeSut(); 
	const title = screen.getByRole('heading');
	expect(title).toBeInTheDocument();

	});
});
