import { RemoteLoadExperiences } from './remote-load-experiences';

const makeSut = () => {
  const sut = new RemoteLoadExperiences();
  return { sut };
};

describe('RemoteLoadExperiences', () => {
  it('should return experiences and check type', async () => {
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
});
