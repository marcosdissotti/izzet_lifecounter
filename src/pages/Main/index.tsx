import React from 'react';

import {
  Container,
  Life,
  LifeWrapper,
  ButtonWrapper,
  ButtonLife,
  ButtonDemage,
  ButtonText,
} from './styles';

export default function Main() {
  return (
    <Container>
      <LifeWrapper>
        <Life>20</Life>
      </LifeWrapper>
      <ButtonWrapper>
        <ButtonLife>
          <ButtonText>+</ButtonText>
        </ButtonLife>
        <ButtonDemage>
          <ButtonText>-</ButtonText>
        </ButtonDemage>
      </ButtonWrapper>
    </Container>
  );
}
