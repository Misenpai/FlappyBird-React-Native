import React from 'react';
import { Canvas, Image } from '@shopify/react-native-skia';
import { GestureHandlerRootView, GestureDetector } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';
import { useGameLogic } from './useGameLogic';
import Bird from './Bird';
import Pipes from './Pipes';
import Ground from './Ground';
import Score from './Score';

const App = () => {
  const { width, height } = useWindowDimensions();
  const { 
    bg, 
    birdY, 
    pipeX, 
    topPipeY, 
    bottomPipeY, 
    score, 
    gesture 
  } = useGameLogic();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={gesture}>
        <Canvas style={{ width, height }}>
          <Image image={bg} width={width} height={height} fit={'cover'} />
          <Pipes pipeX={pipeX} topPipeY={topPipeY} bottomPipeY={bottomPipeY} />
          <Ground width={width} height={height} />
          <Bird birdY={birdY} />
          <Score score={score} width={width} />
        </Canvas>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default App;