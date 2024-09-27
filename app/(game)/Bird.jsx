import React from 'react';
import { Image, Group, useImage } from '@shopify/react-native-skia';
import { useDerivedValue } from 'react-native-reanimated';
import { BIRD_WIDTH, BIRD_HEIGHT, BIRD_X } from './constants';

const Bird = ({ birdY }) => {
  const bird = useImage(require('../../assets/sprites/yellowbird-upflap.png'));

  const birdTransform = useDerivedValue(() => {
    return [
      {
        rotate: 0, // You can add rotation logic here if needed
      },
    ];
  });

  const birdOrigin = useDerivedValue(() => {
    return { x: BIRD_X + BIRD_WIDTH / 2, y: birdY.value + BIRD_HEIGHT / 2 };
  });

  return (
    <Group transform={birdTransform} origin={birdOrigin}>
      <Image 
        image={bird} 
        y={birdY} 
        x={BIRD_X} 
        width={BIRD_WIDTH} 
        height={BIRD_HEIGHT} 
      />
    </Group>
  );
};

export default Bird;