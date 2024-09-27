import React from 'react';
import { Image, useImage } from '@shopify/react-native-skia';

const Ground = ({ width, height }) => {
  const base = useImage(require('../../assets/sprites/base.png'));

  return (
    <Image
      image={base}
      width={width}
      height={150}
      y={height - 75}
      x={0}
      fit={'cover'}
    />
  );
};

export default Ground;