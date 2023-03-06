export interface LoadProjects {
  run(): Promise<LoadProjects.Response>;
}

export namespace LoadProjects {
  export type Response = {
    name: string;
    description: string;
    links: {
      website: string;
      github: string;
    };
  }[];
}
