import { fireEvent, render, screen } from '@testing-library/react';
import type { SocialButtonProps } from './interfaces';
import SocialButtonComponent from './social-button';

const pushMock = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: pushMock
  })
}));

const defaultProps = {
  icon: <div />,
  title: 'title',
  url: 'https://url.com'
} as SocialButtonProps;

const makeSut = () => render(<SocialButtonComponent {...defaultProps} />);

describe('Social button component', () => {
  describe('Render', () => {
    it('should render', () => {
      makeSut();
      const component = screen.getByRole('button');
      expect(component).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('should call push with url', () => {
      makeSut();
      const component = screen.getByRole('button');
      fireEvent.click(component);
      expect(pushMock).toHaveBeenCalledWith(defaultProps.url);
    });
  });
});
