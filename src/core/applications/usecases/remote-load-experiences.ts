import { LoadExperiences } from '~/core/domain';
import { fetchApi } from '~/core/infra/protocols';

export class RemoteLoadExperiences implements LoadExperiences {
  async run(): Promise<LoadExperiences.Response> {
    const httpResponse = await fetchApi({
      method: 'GET',
      url: process.env.API_LOAD_EXPERIENCES as string
    });

    const response = httpResponse as LoadExperiences.Response;

    return parseResponse(response);
  }
}

function parseResponse(
  response: RemoteLoadExperiences.Response
): LoadExperiences.Response {
  const defaultConfigDate = {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC'
  } as const;
  const parsedResponse = response.map(experience => ({
    ...experience,
    startDate: new Date(experience.startDate).toLocaleDateString('en-US', {
      ...defaultConfigDate
    }),
    endDate: experience.endDate
      ? new Date(experience.endDate).toLocaleDateString('en-US', {
          ...defaultConfigDate
        })
      : 'Present'
  }));

  return parsedResponse;
}

export namespace RemoteLoadExperiences {
  export type Response = LoadExperiences.Response;
}
