import type { LoadExperiences, LoadProjects } from '~/core/domain/usecases';

export interface HomePageProps {
  loadExperiencesResponse: LoadExperiences.Response;
  loadProjectsResponse: LoadProjects.Response;
}
