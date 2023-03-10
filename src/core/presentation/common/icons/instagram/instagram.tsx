import type { IconProps } from '~/core/presentation/common/icons/interfaces';

function Instagram({ width = 21, height = 22 }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 21 22'
    >
      <path d='M16.613.96H4.274A3.891 3.891 0 00.387 4.846v12.34a3.891 3.891 0 003.887 3.886h12.34a3.89 3.89 0 003.886-3.886V4.846A3.89 3.89 0 0016.613.96zm1.115 2.318l.444-.002V6.685l-3.397.011-.012-3.409 2.965-.01zM7.573 8.952a3.539 3.539 0 012.87-1.476c1.182 0 2.227.584 2.87 1.476.42.581.67 1.293.67 2.064 0 1.952-1.589 3.54-3.54 3.54a3.544 3.544 0 01-3.54-3.54c0-.771.25-1.483.67-2.064zm10.967 8.233a1.929 1.929 0 01-1.927 1.927H4.274a1.929 1.929 0 01-1.927-1.927V8.952h3.002a5.47 5.47 0 00-.405 2.064c0 3.032 2.466 5.5 5.5 5.5 3.032 0 5.499-2.468 5.499-5.5 0-.73-.147-1.427-.406-2.064h3.003v8.233z'></path>
    </svg>
  );
}

export default Instagram;
