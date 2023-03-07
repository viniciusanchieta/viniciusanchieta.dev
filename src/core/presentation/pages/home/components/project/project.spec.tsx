import { fireEvent, render, screen } from '@testing-library/react';
import type { ProjectProps } from './interfaces';
import ProjectComponent from './project';

const pushMock = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: pushMock
  })
}));

const defaultProps = {
  description: 'description',
  name: 'name',
  links: {
    github: 'https://github.com',
    website: 'https://website.com'
  }
} as ProjectProps;

const makeSut = () => render(<ProjectComponent {...defaultProps} />);

describe('Project component', () => {
  describe('Render', () => {
    it('should render', () => {
      makeSut();
      const component = screen.getByRole('region');
      expect(component).toBeInTheDocument();
    });
  });
  describe('Interactions', () => {
    it('should call push with website link', () => {
      makeSut();
      const component = screen.getByRole('button', {
        name: /navigate to name website/i
      });
      fireEvent.click(component);
      expect(pushMock).toHaveBeenCalledWith(defaultProps.links.website);
    });

    it('should call push with github link', () => {
      makeSut();
      const component = screen.getByRole('button', {
        name: /navigate to name github repository/i
      });
      fireEvent.click(component);
      expect(pushMock).toHaveBeenCalledWith(defaultProps.links.github);
    });
  });
});
