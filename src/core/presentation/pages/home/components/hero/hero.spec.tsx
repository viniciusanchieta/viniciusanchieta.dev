import { render, screen } from '@testing-library/react';
import HeroComponent from './hero';

const makeSut = () => render(<HeroComponent />);

describe('Hero component', () => {
  test('should render', () => {
    makeSut();
    const component = screen.getByRole('region');
    expect(component).toBeInTheDocument();
  });
});
