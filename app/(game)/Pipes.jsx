import React from 'react';
import { Image, useImage } from '@shopify/react-native-skia';
import { PIPE_WIDTH, PIPE_HEIGHT } from './constants';

const Pipes = ({ pipeX, topPipeY, bottomPipeY }) => {
  const pipeBottom = useImage(require('../../assets/sprites/pipe-green.png'));
  const pipeTop = useImage(require('../../assets/sprites/pipe-green-top.png'));

  return (
    <>
      <Image
        image={pipeTop}
        y={topPipeY}
        x={pipeX}
        width={PIPE_WIDTH}
        height={PIPE_HEIGHT}
      />
      <Image
        image={pipeBottom}
        y={bottomPipeY}
        x={pipeX}
        width={PIPE_WIDTH}
        height={PIPE_HEIGHT}
      />
    </>
  );
};

export default Pipes;