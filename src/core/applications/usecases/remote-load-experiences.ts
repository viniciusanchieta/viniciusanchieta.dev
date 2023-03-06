import { LoadExperiencesJson } from '~/core/applications/data';
import { LoadExperiences } from '~/core/domain';

export class RemoteLoadExperiences implements LoadExperiences {
  async run(): Promise<LoadExperiences.Response> {
    return parseResponse(LoadExperiencesJson);
  }
}

function parseResponse(
  response: RemoteLoadExperiences.Response
): LoadExperiences.Response {
  const defaultConfigDate = {
    month: 'short',
    year: 'numeric'
  } as const;
  const parsedResponse = response.map(experience => ({
    ...experience,
    startDate: new Date(experience.startDate).toLocaleDateString('en-US', {
      ...defaultConfigDate
    }),
    endDate: new Date(experience.endDate).toLocaleDateString('en-US', {
      ...defaultConfigDate
    })
  }));

  return parsedResponse;
}

export namespace RemoteLoadExperiences {
  export type Response = LoadExperiences.Response;
}
