import { VAIcon } from '~/core/presentation/common/icons';
import type { HeaderProps } from './interfaces';

function HeaderComponent({ items }: HeaderProps) {
  return (
    <header className='flex justify-between items-center h-112px text-white bg-gradient-to-b from-main via-main to-transparent'>
      <div className='[&>svg]:fill-white'>
        <VAIcon />
      </div>
      <div>
        <ul className='flex gap-8'>
          {items.map((item: { title: string; onClick: () => void }) => (
            <li key={item.title}>
              <button className='font-light text-lg' onClick={item.onClick}>
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
