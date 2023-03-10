import { RemoteLoadProjects } from './remote-load-projects';

const makeSut = () => {
  const sut = new RemoteLoadProjects();
  return { sut };
};

describe('RemoteLoadProjects', () => {
  it('should return projects and check type', async () => {
    const { sut } = makeSut();
    const projects = await sut.run();

    expect(projects).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          description: expect.any(String),
          links: expect.objectContaining({
            website: expect.any(String),
            github: expect.any(String)
          })
        })
      ])
    );
  });
});
