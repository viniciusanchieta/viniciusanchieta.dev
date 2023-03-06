import { makeHomePage } from '~/core/main/factories/presentation';
import {
  makeRemoteLoadExperiences,
  makeRemoteLoadProjects
} from '~/core/main/factories/usecases';

export default async function Page() {
  const loadExperiences = makeRemoteLoadExperiences();
  const loadExperiencesResponse = await loadExperiences.run();
  const loadProjects = makeRemoteLoadProjects();
  const loadProjectsResponse = await loadProjects.run();

  return makeHomePage({ loadExperiencesResponse, loadProjectsResponse });
}
