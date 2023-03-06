import type { IconProps } from '~/core/presentation/common/icons/interfaces';

function Email({ width = 20, height = 18 }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 20 18'
    >
      <path d='M1 0h18a1 1 0 011 1v16a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1zm9.06 8.683L3.648 3.238 2.353 4.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439h-.001z'></path>
    </svg>
  );
}

export default Email;
