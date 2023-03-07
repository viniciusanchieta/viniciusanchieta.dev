import { render, screen } from '@testing-library/react';
import HeaderComponent from './header';
import type { HeaderProps } from './interfaces';

const defaultProps = {
  items: [
    {
      title: 'Home',
      onClick: jest.fn()
    }
  ]
} as HeaderProps;
const makeSut = () => render(<HeaderComponent {...defaultProps} />);

describe('Header component', () => {
  test('should render', () => {
    makeSut();
    const component = screen.getByRole('region');
    expect(component).toBeInTheDocument();
  });
});
