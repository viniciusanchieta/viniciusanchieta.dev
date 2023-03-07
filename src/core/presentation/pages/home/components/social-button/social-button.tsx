import { useRouter } from 'next/navigation';
import type { SocialButtonProps } from './interfaces';

function SocialButtonComponent({ url, icon, title }: SocialButtonProps) {
  const router = useRouter();

  function handleClick() {
    router.push(url);
  }

  return (
    <button
      onClick={handleClick}
      className='flex [&>svg]:fill-gray-100 text-gray-100 border-gray-100 border py-3 items-center gap-2 w-210px justify-center rounded-md'
      role='button'
      aria-label={`Navigate to ${title}`}
    >
      {icon}
      <span className='text-gray-100 text-base'>{title}</span>
    </button>
  );
}

export default SocialButtonComponent;
