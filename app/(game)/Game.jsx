// components/Game.jsx
import React, { useEffect, useState } from 'react';
import { Canvas, Image } from '@shopify/react-native-skia';
import { GestureHandlerRootView, GestureDetector } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';
import { useGameLogic } from './useGameLogic';
import Bird from './Bird';
import Pipes from './Pipes';
import Ground from './Ground';
import Score from './Score';
import { useRouter } from 'expo-router';

const Game = () => {
  const { width, height } = useWindowDimensions();
  const { 
    bg, 
    birdY, 
    pipeX, 
    topPipeY, 
    bottomPipeY, 
    score, 
    gesture, 
    gameOver 
  } = useGameLogic();
  
  const [gameEnded, setGameEnded] = useState(false);
  const [bestScore, setBestScore] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (gameOver) {
      setGameEnded(true);
      if (score > bestScore) {
        setBestScore(score);
      }
      router.push({
        pathname: '/game-end',
        params: { score, bestScore }
      });
    }
  }, [gameOver]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {!gameEnded ? (
        <GestureDetector gesture={gesture}>
          <Canvas style={{ width, height }}>
            <Image image={bg} width={width} height={height} fit={'cover'} />
            <Pipes pipeX={pipeX} topPipeY={topPipeY} bottomPipeY={bottomPipeY} />
            <Ground width={width} height={height} />
            <Bird birdY={birdY} />
            <Score score={score} width={width} />
          </Canvas>
        </GestureDetector>
      ) : null}
    </GestureHandlerRootView>
  );
};

export default Game;
