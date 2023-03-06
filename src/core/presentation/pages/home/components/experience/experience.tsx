import type { ExperienceProps } from './interfaces';

function ExperienceComponent({
  position,
  company,
  location,
  description,
  endDate,
  startDate
}: ExperienceProps) {
  function handleCompany(): string {
    const hasCompany = !!company;
    if (!hasCompany) {
      return location;
    }

    return `${company} / ${location}`;
  }

  return (
    <section className='flex flex-col font-light gap-3'>
      <div className='flex justify-between items-start sm:flex-col'>
        <p className='text-white text-2xl sm:text-xl'>{position}</p>
        <p className='text-gray-100 text-base sm:text-sm'>
          {startDate} - {endDate}
        </p>
      </div>
      <p className='text-sm text-blue-200'>{handleCompany()}</p>
      <pre className='text-gray-100 text-base font-inter leading-6 whitespace-pre-wrap'>
        {description}
      </pre>
    </section>
  );
}

export default ExperienceComponent;
