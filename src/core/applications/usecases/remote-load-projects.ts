import { LoadProjects } from '~/core/domain';
import { fetchApi } from '~/core/infra/protocols';

export class RemoteLoadProjects implements LoadProjects {
  async run(): Promise<LoadProjects.Response> {
    const httpResponse = await fetchApi({
      method: 'GET',
      url: process.env.API_LOAD_PROJECTS as string
    });
    const response = httpResponse as LoadProjects.Response;

    return response;
  }
}

export namespace RemoteLoadProjects {
  export type Response = LoadProjects.Response;
}
