import styled from 'styled-components/native';

import PageContainer from '../../components/PageContainer';

export const Container = styled(PageContainer)`
  flex: 1;
`;

export const Life = styled.Text`
  color: white;
  font-size: 144px;
`;

export const LifeWrapper = styled.View`
  width: 100%;
  height: 420px;

  align-items: center;
  justify-content: center;

  background: #114c62;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  margin-top: 40px;

  flex-direction: row;
`;

export const ButtonLife = styled.TouchableOpacity`
  width: 50%;
  height: 68px;

  justify-content: center;
  align-items: center;

  background: #0c6b21;
`;

export const ButtonDemage = styled.TouchableOpacity`
  width: 50%;
  height: 68px;

  justify-content: center;
  align-items: center;

  background: #ff1002;
`;

export const ButtonText = styled.Text`
  font-size: 36px;
  line-height: 42px;

  color: white;
`;
