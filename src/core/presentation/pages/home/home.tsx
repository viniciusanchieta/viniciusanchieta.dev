'use client';

import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import type { HomePageProps } from '~/core/domain';
import {
  EmailIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon
} from '~/core/presentation/common/icons';
import {
  ExperienceTag,
  HeaderTag,
  HeroTag,
  LineTag,
  ProjectTag,
  SocialButtonTag
} from './components';

function HomePage({
  loadExperiencesResponse,
  loadProjectsResponse
}: HomePageProps) {
  const [activeButton, setActiveButton] = useState('resume');

  const handleScrollToSection = useCallback(
    (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setActiveButton(id);
    },
    [setActiveButton]
  );

  return (
    <>
      <HeaderTag
        items={[
          {
            title: 'Resume',
            onClick: () => handleScrollToSection('resume'),
            active: activeButton === 'resume'
          },
          {
            title: 'Projects',
            onClick: () => handleScrollToSection('projects'),
            active: activeButton === 'projects'
          },
          {
            title: 'Contact',
            onClick: () => handleScrollToSection('contact'),
            active: activeButton === 'contact'
          }
        ]}
      />
      <motion.section id='resume' className='mt-20 flex flex-col gap-4'>
        <HeroTag />
      </motion.section>
      <motion.section className='flex mt-24 gap-24 sm:flex-col sm:gap-9'>
        <p className='uppercase text-white font-light text-lg'>Experience</p>
        <div className='w-full flex flex-col gap-8'>
          {loadExperiencesResponse.map(experience => (
            <ExperienceTag
              key={experience.company}
              company={experience.company}
              description={experience.description}
              endDate={experience.endDate}
              location={experience.location}
              position={experience.position}
              startDate={experience.startDate}
            />
          ))}
        </div>
      </motion.section>
      <LineTag />
      <motion.section
        className='flex flex-col mt-24 w-full gap-12 sm:gap-9'
        id='projects'
      >
        <p className='uppercase text-white font-light text-lg'>projects</p>
        <div className='flex flex-row flex-wrap w-full gap-7 justify-between'>
          {loadProjectsResponse.map(project => (
            <ProjectTag
              key={project.name}
              description={project.description}
              links={project.links}
              name={project.name}
            />
          ))}
        </div>
      </motion.section>
      <LineTag />
      <motion.footer
        className='flex sm:flex-col gap-14 sm:gap-9 mt-24 w-full items-start justify-between mb-12'
        id='contact'
      >
        <p className='uppercase text-white font-light text-lg'>contact</p>
        <div className='flex gap-3 flex-wrap justify-center'>
          <SocialButtonTag
            title='Send an email'
            url='mailto:contact@viniciusanchieta.dev'
            icon={<EmailIcon />}
          />
          <SocialButtonTag
            title='LinkedIn'
            url='https://www.linkedin.com/in/viniciusanchieta'
            icon={<LinkedinIcon />}
          />
          <SocialButtonTag
            title='Instagram'
            url='https://www.instagram.com/viniciusanchieta.dev'
            icon={<InstagramIcon />}
          />
          <SocialButtonTag
            title='GitHub'
            url='https://github.com/viniciusanchieta'
            icon={<GitHubIcon width={20} height={19} />}
          />
        </div>
      </motion.footer>
    </>
  );
}

export default HomePage;
