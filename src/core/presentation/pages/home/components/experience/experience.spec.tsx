import { render, screen } from '@testing-library/react';
import ExperienceComponent from './experience';

const makeSut = () => render(<ExperienceComponent title='Hello World' />);

describe('ExperienceComponent', () => {
	test('should render', () => {
		makeSut(); 
	const title = screen.getByRole('heading');
	expect(title).toBeInTheDocument();

	});
});
