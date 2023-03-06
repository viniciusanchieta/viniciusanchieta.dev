import { render, screen } from '@testing-library/react';
import ProjectComponent from './project';

const makeSut = () => render(<ProjectComponent title='Hello World' />);

describe('ProjectComponent', () => {
	test('should render', () => {
		makeSut(); 
	const title = screen.getByRole('heading');
	expect(title).toBeInTheDocument();

	});
});
