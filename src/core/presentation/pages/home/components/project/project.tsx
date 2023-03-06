import { useRouter } from 'next/navigation';
import { ClipIcon, GitHubIcon } from '~/core/presentation/common/icons';
import type { ProjectProps } from './interfaces';

function ProjectComponent({
  description,
  name,
  links: { github, website }
}: ProjectProps) {
  const router = useRouter();

  function handleSeeNow(): void {
    router.push(website);
  }

  function handleGithub(): void {
    router.push(github);
  }

  return (
    <div className='text-white flex flex-col gap-7 justify-between w-510px'>
      <p className='text-2xl'>{name}</p>
      <p className='text-sm h-60px text-gray-100'>{description}</p>
      <div className='flex w-214px items-center gap-7'>
        <button
          onClick={handleSeeNow}
          className='rounded-md mx-auto bg-gradient-to-tr p-[0.18rem] from-purple-100 via-blue-100 to-pink-100'
        >
          <div className='bg-main rounded-md py-4 px-6 text-white [&>svg]:fill-white flex gap-2 items-center'>
            <ClipIcon />
            <span className='text-base'>See now</span>
          </div>
        </button>
        <button
          onClick={handleGithub}
          className='[&>svg]:fill-white mx-auto w-30px h-30px'
        >
          <GitHubIcon />
        </button>
      </div>
    </div>
  );
}

export default ProjectComponent;
