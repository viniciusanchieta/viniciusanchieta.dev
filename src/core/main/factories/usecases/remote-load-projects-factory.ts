import { RemoteLoadProjects } from '~/core/applications/usecases';
import type { LoadProjects } from '~/core/domain';

export const makeRemoteLoadProjects = (): LoadProjects => {
  return new RemoteLoadProjects();
};
