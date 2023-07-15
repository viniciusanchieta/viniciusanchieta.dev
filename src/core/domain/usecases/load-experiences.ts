export interface LoadExperiences {
  run(): Promise<LoadExperiences.Response>;
}

export namespace LoadExperiences {
  export type Response = {
    position: string;
    company: string | null;
    location: string;
    startDate: string;
    endDate?: string;
    description: string;
  }[];
}
