import type { IconProps } from '~/core/presentation/common/icons/interfaces';

function Clip({ width = 18, height = 18 }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 18 18'
    >
      <path d='M14.657 11.828l-1.414-1.414L14.657 9a3.999 3.999 0 00-4.36-6.524A4 4 0 009 3.343L7.586 4.757 6.172 3.343l1.414-1.414a6 6 0 018.485 8.485l-1.414 1.414zm-2.829 2.829l-1.414 1.414a6 6 0 11-8.485-8.485l1.414-1.414 1.414 1.414L3.343 9A4 4 0 009 14.657l1.414-1.414 1.414 1.414zm0-9.9l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07v-.001z'></path>
    </svg>
  );
}

export default Clip;
