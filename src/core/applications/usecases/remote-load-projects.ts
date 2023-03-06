import { LoadProjectsJson } from '~/core/applications/data';
import { LoadProjects } from '~/core/domain';

export class RemoteLoadProjects implements LoadProjects {
  async run(): Promise<LoadProjects.Response> {
    return LoadProjectsJson;
  }
}

export namespace RemoteLoadProjects {
  export type Response = LoadProjects.Response;
}
