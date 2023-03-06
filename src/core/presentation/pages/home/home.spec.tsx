import { render, screen } from '@testing-library/react';
import HomeComponent from './home';

const makeSut = () => render(<HomeComponent />);

describe('HomeComponent', () => {
  test('should render', () => {
    makeSut();
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
  });
});
