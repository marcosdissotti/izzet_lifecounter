import React from 'react';
import {Shake} from 'react-native-motion';

import {Life, LifeWrapper, Lottie} from './styles';

interface LifeCounterData {
  life?: number;
  colors: string[];
  healing: boolean;
  damage: boolean;
}

export default function LifeCounter({
  life,
  healing,
  damage,
  colors,
}: LifeCounterData) {
  return (
    <LifeWrapper colors={colors}>
      {healing === true ? (
        <>
          <Lottie
            resizeMode="contain"
            source={require('../../theme/assets/animations/winter.json')}
            autoPlay
            loop
          />
          <Life>{life}</Life>
        </>
      ) : (
        <>
          <Shake value={life}>
            <Life>{life}</Life>
          </Shake>
        </>
      )}

      {damage && (
        <Lottie
          resizeMode="contain"
          source={require('../../theme/assets/animations/flame.json')}
          autoPlay
          loop
        />
      )}
    </LifeWrapper>
  );
}
