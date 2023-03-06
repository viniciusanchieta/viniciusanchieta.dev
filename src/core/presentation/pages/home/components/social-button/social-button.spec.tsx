import { render, screen } from '@testing-library/react';
import SocialButtonComponent from './social-button';

const makeSut = () => render(<SocialButtonComponent title='Hello World' />);

describe('SocialButtonComponent', () => {
	test('should render', () => {
		makeSut(); 
	const title = screen.getByRole('heading');
	expect(title).toBeInTheDocument();

	});
});
