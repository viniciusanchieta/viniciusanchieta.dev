import type { IconProps } from '~/core/presentation/common/icons/interfaces';

function VA({ width = 35, height = 24 }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 35 24'
    >
      <path d='M10.637 22.781L0 3.734V2.296l.343-.718L.686.86 1.716.5H16.47l.686.36.686.718.343.719v1.078l-5.833 10.063L9.95 9.125l2.402-4.313h-6.52l6.52 11.86L20.93 1.219 21.618.5h1.03l1.372.36 10.637 19.406.343 1.078v1.078l-.686.719-.687.359H18.186l-1.03-.36-.342-.718v-1.078l.343-1.078 5.49-9.703 2.402 3.953-2.402 4.671h6.52l-6.52-11.859-8.578 15.453-.687.719h-2.059l-.686-.719z'></path>
    </svg>
  );
}

export default VA;
