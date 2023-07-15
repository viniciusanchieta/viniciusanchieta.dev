import { LoadProjects } from '~/core/domain';
import { fetchApi } from '~/core/infra/protocols';

export class RemoteLoadProjects implements LoadProjects {
  async run(): Promise<LoadProjects.Response> {
    const httpResponse = await fetchApi({
      method: 'GET',
      url: 'https://gist.githubusercontent.com/viniciusanchieta/789c71fb0128dea5140f98ee29cedce5/raw/680e9f839e4263bffb8f23a69b45a7e3a7b4c04a/my-projects.json'
    });
    const response = httpResponse as LoadProjects.Response;

    return response;
  }
}

export namespace RemoteLoadProjects {
  export type Response = LoadProjects.Response;
}
