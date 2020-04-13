import React, {useState, useEffect} from 'react';

import {LifeCounter} from '../../components';
import {playButtonPress} from '../../helpers/audio';

import {
  Container,
  ButtonWrapper,
  ButtonLife,
  ButtonDemage,
  ButtonText,
} from './styles';

export default function Main() {
  const [life, setLife] = useState(20);
  const [aurea, setAurea] = useState(false);
  const [healing, setHealing] = useState(false);
  const [damage, setDamage] = useState(false);
  const [colors, setColors] = useState(['']);

  useEffect(() => {
    if (aurea) {
      setAurea(true);
    } else {
      setAurea(false);
    }
  }, [aurea]);

  function lifeIncrement() {
    setLife(life + 1);
    setColors(['#15161c', '#202128', '#15161c']);
    setAurea(true);
    setHealing(true);
    setTimeout(() => {
      setAurea(false);
      setHealing(false);
      playButtonPress();
    }, 5000);
  }

  function lifeDecrement() {
    setLife(life - 1);
    setColors(['#15161c', '#15161c', '#15161c']);
    setAurea(true);
    setDamage(true);
    setTimeout(() => {
      setAurea(false);
      setDamage(false);
    }, 1000);
  }

  function lightning() {
    return (
      <>
        <LifeCounter
          life={life}
          healing={healing}
          colors={colors}
          damage={damage}
        />
      </>
    );
  }

  return (
    <Container>
      {!aurea ? (
        <LifeCounter
          life={life}
          healing={healing}
          damage={damage}
          colors={['#15161c', '#202128', '#15161c']}
        />
      ) : (
        lightning()
      )}
      <ButtonWrapper>
        <ButtonLife onPress={() => lifeIncrement()}>
          <ButtonText style={{color: '#000'}}>+</ButtonText>
        </ButtonLife>
        <ButtonDemage onPress={() => lifeDecrement()}>
          <ButtonText>-</ButtonText>
        </ButtonDemage>
      </ButtonWrapper>
    </Container>
  );
}
