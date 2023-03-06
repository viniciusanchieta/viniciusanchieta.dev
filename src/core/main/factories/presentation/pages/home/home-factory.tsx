import { HomePageProps } from '~/core/domain';
import { HomePage } from '~/core/presentation/pages';

export const makeHomePage = ({
  loadExperiencesResponse,
  loadProjectsResponse
}: HomePageProps): JSX.Element => {
  return (
    <HomePage
      loadExperiencesResponse={loadExperiencesResponse}
      loadProjectsResponse={loadProjectsResponse}
    />
  );
};
