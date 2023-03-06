import type { IconProps } from '~/core/presentation/common/icons/interfaces';

function Linkedin({ width = 20, height = 18 }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 20 18'
    >
      <path d='M4.94 2a2 2 0 11-4-.002 2 2 0 014 .002zM5 5.48H1V18h4V5.48zm6.32 0H7.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H20v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z'></path>
    </svg>
  );
}

export default Linkedin;
