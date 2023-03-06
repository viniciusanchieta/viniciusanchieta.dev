import { RemoteLoadExperiences } from '~/core/applications/usecases';
import type { LoadExperiences } from '~/core/domain';

export const makeRemoteLoadExperiences = (): LoadExperiences => {
  return new RemoteLoadExperiences();
};
