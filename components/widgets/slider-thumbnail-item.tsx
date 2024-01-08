import Image from 'next/image';

import { cn } from '@/lib/utils';

interface SliderThumbnailItemProps {
  itemActive: number;
  id: number;
  image: string;
  name: string;
  onClick: () => void;
}

const SliderThumbnailItem = ({
  itemActive,
  id,
  image,
  name,
  onClick,
}: SliderThumbnailItemProps) => {
  return (
    <li
      role='button'
      onClick={onClick}
      className={cn(
        'h-[250px] shrink-0 transition-all duration-300 overflow-hidden relative after:absolute after:w-full after:h-full after:left-0 after:bottom-0 after:bg-thumbnails hover:brightness-150',
        itemActive === id
          ? 'brightness-150 w-[200px]'
          : 'brightness-50 w-[50px]'
      )}
    >
      <div className='relative w-full h-full rounded-lg'>
        <Image
          src={image}
          alt='Image'
          fill
          className='object-cover rounded-lg'
        />
      </div>
      <div
        className={cn(
          'absolute top-auto right-[10px] bottom-[20px] left-[10px] z-10 translate-y-[30px] blur-[20px] opacity-0 animation-delay-75',
          itemActive === id && 'animate-show-content'
        )}
      >
        <h2 className='line-clamp-1 font-bold text-start'>{name}</h2>
      </div>
    </li>
  );
};

export default SliderThumbnailItem;
