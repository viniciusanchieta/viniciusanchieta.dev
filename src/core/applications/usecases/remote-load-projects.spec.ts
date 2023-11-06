import { RemoteLoadProjects } from './remote-load-projects';

global.fetch = jest.fn();

const makeSut = () => {
  const sut = new RemoteLoadProjects();
  return { sut };
};

describe('RemoteLoadProjects', () => {
  it('should return projects and check type', async () => {
    const mockFetch = jest.fn().mockResolvedValueOnce({
      status: 200,
      json: () =>
        Promise.resolve([
          {
            name: 'any_name',
            description: 'any_description',
            links: {
              website: 'any_website',
              github: 'any_github'
            }
          }
        ])
    });

    (fetch as jest.MockedFunction<typeof fetch>).mockImplementation(mockFetch);

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
