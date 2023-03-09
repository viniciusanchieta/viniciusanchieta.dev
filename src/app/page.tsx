import { makeHomePage } from '~/core/main/factories/presentation';
import {
  makeRemoteLoadExperiences,
  makeRemoteLoadProjects
} from '~/core/main/factories/usecases';

export default async function Page() {
  const [loadExperiencesResponse, loadProjectsResponse] = await Promise.all([
    makeRemoteLoadExperiences().run(),
    makeRemoteLoadProjects().run()
  ]);

  return makeHomePage({ loadExperiencesResponse, loadProjectsResponse });
}
