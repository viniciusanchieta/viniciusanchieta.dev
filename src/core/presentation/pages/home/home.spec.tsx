import { fireEvent, render, screen } from '@testing-library/react';
import type { LoadExperiences, LoadProjects } from '~/core/domain';
import HomeComponent from './home';

jest.mock('framer-motion', () => {
  const motion = {
    footer: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    section: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    )
  };

  return {
    ...motion,
    motion
  };
});

const pushMock = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: pushMock
  })
}));

const loadExperiencesJson = [
  {
    company: 'Mock Company',
    position: 'Mock Position',
    description: 'Mock Description',
    endDate: '2022-12-31',
    location: 'Mock Location',
    startDate: '2022-01-01'
  }
] as LoadExperiences.Response;

const loadProjectsMock = [
  {
    description: 'Mock Description',
    links: {
      github: 'https://test.com',
      website: 'https://test.com'
    },
    name: 'Mock Project'
  }
] as LoadProjects.Response;

const makeSut = () => {
  return render(
    <HomeComponent
      loadExperiencesResponse={loadExperiencesJson}
      loadProjectsResponse={loadProjectsMock}
    />
  );
};

describe('HomeComponent', () => {
  beforeEach(() => {
    makeSut();
  });

  describe('Render', () => {
    it('should render', async () => {
      expect(screen.getByText('Experience')).toBeInTheDocument();
      expect(screen.getByText('Projects')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('should scroll to the correct section when a navigation experience link is clicked', () => {
      const experienceLink = screen.getByText('Resume');
      fireEvent.click(experienceLink);
      expect(screen.getByText('Experience')).toBeInTheDocument();
    });

    it('should scroll to the correct section when a navigation project link is clicked', () => {
      const projectLink = screen.getByText('Projects');
      fireEvent.click(projectLink);
      expect(screen.getByText('Projects')).toBeInTheDocument();
    });

    it('should call push with the correct link when a contact link is clicked', () => {
      const contactLink = screen.getByText('Contact');
      fireEvent.click(contactLink);
      expect(screen.getByText('Contact')).toBeInTheDocument();
    });
  });
});
