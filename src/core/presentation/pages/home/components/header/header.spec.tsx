import { render, screen } from '@testing-library/react';
import HeaderComponent from './header';

const makeSut = () => render(<HeaderComponent title='Hello World' />);

describe('HeaderComponent', () => {
	test('should render', () => {
		makeSut(); 
	const title = screen.getByRole('heading');
	expect(title).toBeInTheDocument();

	});
});
