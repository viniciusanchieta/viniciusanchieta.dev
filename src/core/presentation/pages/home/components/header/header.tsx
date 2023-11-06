import { VAIcon } from '~/core/presentation/common/icons';
import type { HeaderProps } from './interfaces';

function HeaderComponent({ items }: HeaderProps) {
  return (
    <header
      className='flex justify-between items-center h-112px text-white bg-gradient-to-b from-main via-main to-transparent'
      role='region'
      aria-label='Header'
    >
      <div className='[&>svg]:fill-white rounded-md hover:bg-gray-200 p-4 hover:transition-colors hover:duration-300 duration-200 cursor-pointer'>
        <VAIcon />
      </div>
      <div>
        <ul className='flex gap-8'>
          {items.map(item => (
            <li key={item.title}>
              <button
                className={`font-light text-lg hover:bg-gray-200 px-4 py-2 rounded-md hover:transition-colors hover:duration-300 duration-200 ${
                  item.active && 'bg-gray-200'
                }`}
                onClick={item.onClick}
                role='button'
                aria-label={`Navigate to ${item.title} section`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default HeaderComponent;
