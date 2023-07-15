import { RemoteLoadExperiences } from './remote-load-experiences';

global.fetch = jest.fn();

const makeSut = () => {
  const sut = new RemoteLoadExperiences();
  return { sut };
};

describe('RemoteLoadExperiences', () => {
  it('should return experiences and check type', async () => {
    const mockFetch = jest.fn().mockResolvedValueOnce({
      status: 200,
      json: () =>
        Promise.resolve([
          {
            company: 'any_company',
            description: 'any_description',
            endDate: 'any_endDate',
            location: 'any_location',
            position: 'any_position',
            startDate: 'any_startDate'
          }
        ])
    });

    (fetch as jest.MockedFunction<typeof fetch>).mockImplementation(mockFetch);

    const { sut } = makeSut();
    const experiences = await sut.run();

    expect(experiences).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          company: expect.any(String),
          description: expect.any(String),
          endDate: expect.any(String),
          location: expect.any(String),
          position: expect.any(String),
          startDate: expect.any(String)
        })
      ])
    );
  });

  it('should return endDate as Present if not provided', async () => {
    const mockFetch = jest.fn().mockResolvedValueOnce({
      status: 200,
      json: () =>
        Promise.resolve([
          {
            company: 'any_company',
            description: 'any_description',
            location: 'any_location',
            position: 'any_position',
            startDate: 'any_startDate'
          }
        ])
    });

    (fetch as jest.MockedFunction<typeof fetch>).mockImplementation(mockFetch);

    const { sut } = makeSut();
    const experiences = await sut.run();

    expect(experiences).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          endDate: 'Present'
        })
      ])
    );
  });
});
