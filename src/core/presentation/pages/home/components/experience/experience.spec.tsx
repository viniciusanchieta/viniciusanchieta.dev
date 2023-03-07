import { render, screen } from '@testing-library/react';
import ExperienceComponent from './experience';
import type { ExperienceProps } from './interfaces';

const defaultProps = {
  position: 'Software Engineer',
  company: 'Finexps',
  location: 'Remote',
  startDate: '2021',
  endDate: 'Present',
  description: 'React'
} as ExperienceProps;
const makeSut = () => render(<ExperienceComponent {...defaultProps} />);

describe('Experience component', () => {
  test('should render', () => {
    makeSut();
    const component = screen.getByRole('region');
    expect(component).toBeInTheDocument();
  });

  test('should render with company null', () => {
    defaultProps.company = null;
    makeSut();
    const component = screen.getByRole('region');
    expect(component).not.toHaveTextContent('Finexps');
  });
});
