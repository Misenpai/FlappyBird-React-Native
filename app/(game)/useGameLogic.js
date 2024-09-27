import { useWindowDimensions } from 'react-native';
import { useImage } from '@shopify/react-native-skia';
import {
    useSharedValue,
    withTiming,
    Easing,
    withSequence,
    useFrameCallback,
    useDerivedValue,
    interpolate,
    Extrapolation,
    useAnimatedReaction,
    runOnJS,
    cancelAnimation,
} from 'react-native-reanimated';
import { useEffect, useState } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import { GRAVITY, JUMP_FORCE, BIRD_X, BIRD_WIDTH, BIRD_HEIGHT, PIPE_WIDTH } from './constants';

export const useGameLogic = () => {
    const { width, height } = useWindowDimensions();
    const [score, setScore] = useState(0);

    const bg = useImage(require('../../assets/sprites/background-day.png'));

    const gameOver = useSharedValue(false);
    const pipeX = useSharedValue(width);

    const birdY = useSharedValue(height / 3);
    const birdYVelocity = useSharedValue(0);

    const pipeOffset = useSharedValue(0);
    const topPipeY = useDerivedValue(() => pipeOffset.value - 320);
    const bottomPipeY = useDerivedValue(() => height - 320 + pipeOffset.value);

    const pipesSpeed = useDerivedValue(() => {
        return interpolate(score, [0, 20], [1, 2]);
    });

    useEffect(() => {
        moveTheMap();
    }, []);

    const moveTheMap = () => {
        pipeX.value = withSequence(
            withTiming(width, { duration: 0 }),
            withTiming(-150, {
                duration: 3000 / pipesSpeed.value,
                easing: Easing.linear,
            }),
            withTiming(width, { duration: 0 })
        );
    };

    // Scoring system
    useAnimatedReaction(
        () => pipeX.value,
        (currentValue, previousValue) => {
            const middle = BIRD_X;

            if (previousValue && currentValue < -100 && previousValue > -100) {
                pipeOffset.value = Math.random() * 400 - 200;
                cancelAnimation(pipeX);
                runOnJS(moveTheMap)();
            }

            if (
                currentValue !== previousValue &&
                previousValue &&
                currentValue <= middle &&
                previousValue > middle
            ) {
                runOnJS(setScore)(score + 1);
            }
        }
    );

    // Collision detection
    useAnimatedReaction(
        () => birdY.value,
        (currentValue, previousValue) => {
            const center = {
                x: BIRD_X + BIRD_WIDTH / 2,
                y: birdY.value + BIRD_HEIGHT / 2,
            };

            // Ground collision detection
            if (currentValue > height - 100 || currentValue < 0) {
                gameOver.value = true;
            }

            const isColliding = [
                { x: pipeX.value, y: bottomPipeY.value, w: PIPE_WIDTH, h: height },
                { x: pipeX.value, y: topPipeY.value, w: PIPE_WIDTH, h: height },
            ].some((rect) =>
                isPointCollidingWithRect(center, rect)
            );

            if (isColliding) {
                gameOver.value = true;
            }
        }
    );

    useAnimatedReaction(
        () => gameOver.value,
        (currentValue, previousValue) => {
            if (currentValue && !previousValue) {
                cancelAnimation(pipeX);
            }
        }
    );

    useFrameCallback(({ timeSincePreviousFrame: dt }) => {
        if (!dt || gameOver.value) {
            return;
        }
        birdY.value = birdY.value + (birdYVelocity.value * dt) / 1000;
        birdYVelocity.value = birdYVelocity.value + (GRAVITY * dt) / 1000;
    });

    const restartGame = () => {
        'worklet';
        birdY.value = height / 3;
        birdYVelocity.value = 0;
        gameOver.value = false;
        pipeX.value = width;
        runOnJS(moveTheMap)();
        runOnJS(setScore)(0);
    };

    const gesture = Gesture.Tap().onStart(() => {
        if (gameOver.value) {
            restartGame();
        } else {
            birdYVelocity.value = JUMP_FORCE;
        }
    });

    return {
        bg,
        birdY,
        pipeX,
        topPipeY,
        bottomPipeY,
        score,
        gesture
    };
};

const isPointCollidingWithRect = (point, rect) => {
    'worklet';
    return (
        point.x >= rect.x &&
        point.x <= rect.x + rect.w &&
        point.y >= rect.y &&
        point.y <= rect.y + rect.h
    );
};