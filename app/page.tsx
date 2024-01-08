'use client';

import { useState } from 'react';

import SliderItem from '@/components/widgets/slider-item';
import SliderThumbnailItem from '@/components/widgets/slider-thumbnail-item';
import Arrows from '@/components/widgets/arrows';

export default function Home() {
  const [itemActive, setItemActive] = useState<number>(1);
  const countItems = 5;

  const onNext = () => {
    setItemActive(itemActive + 1);
    if (itemActive >= countItems) {
      setItemActive(1);
    }
  };

  const onPrevius = () => {
    setItemActive(itemActive - 1);
    if (itemActive === 1) {
      setItemActive(5);
    }
  };

  return (
    <div className='h-screen relative'>
      <ul>
        <SliderItem
          itemActive={itemActive}
          id={1}
          image='/imgs/1.webp'
          brand='Dodge'
          name='Challenger'
          desc='El Dodge Challenger es un potente muscle car con diseño clásico y altas prestaciones, destacando por su fuerza y estilo impactante.'
        />
        <SliderItem
          itemActive={itemActive}
          id={2}
          image='/imgs/2.webp'
          brand='Dodge'
          name='Camaro'
          desc='El Dodge Camaro es un icónico muscle car con líneas agresivas, rendimiento poderoso y una estética moderna que cautiva a los amantes de la velocidad.'
        />
        <SliderItem
          itemActive={itemActive}
          id={3}
          image='/imgs/3.webp'
          brand='Dodge'
          name='Charger'
          desc='El Dodge Charger es una sedán deportivo con diseño imponente, potente rendimiento y características de alto nivel, fusionando estilo y velocidad.'
        />
        <SliderItem
          itemActive={itemActive}
          id={4}
          image='/imgs/4.webp'
          brand='Jeep'
          name='Jeep'
          desc='Jeep, sinónimo de aventura todoterreno. Modelos como el Wrangler y Grand Cherokee ofrecen robustez y estilo icónico en cada viaje.'
        />
        <SliderItem
          itemActive={itemActive}
          id={5}
          image='/imgs/5.webp'
          brand='Dodge'
          name='Ram'
          desc='La Dodge Ram es una robusta camioneta con poderoso rendimiento y lujoso interior. Con un diseño imponente, es líder en fuerza y comodidad.'
        />
      </ul>
      {/* Buttons arrows */}
      <Arrows onClickPrev={() => onPrevius()} onClickNext={() => onNext()} />
      {/* Thumbnails */}
      <ul className='absolute bottom-0 z-10 flex sm:justify-end gap-3 w-full h-[250px] px-14 overflow-y-hidden overflow-x-auto'>
        <SliderThumbnailItem
          itemActive={itemActive}
          image='/imgs/1.webp'
          id={1}
          name='Challenger'
          onClick={() => setItemActive(1)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image='/imgs/2.webp'
          id={2}
          name='Camaro'
          onClick={() => setItemActive(2)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image='/imgs/3.webp'
          id={3}
          name='Charger'
          onClick={() => setItemActive(3)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image='/imgs/4.webp'
          id={4}
          name='Jeep'
          onClick={() => setItemActive(4)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image='/imgs/5.webp'
          id={5}
          name='Ram'
          onClick={() => setItemActive(5)}
        />
      </ul>
    </div>
  );
}
