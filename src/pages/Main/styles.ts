import styled from 'styled-components/native';

import {PageContainer} from '../../components';

export const Container = styled(PageContainer)`
  flex: 1;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  margin-top: 40px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonLife = styled.TouchableOpacity`
  width: 50%;
  height: 68px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  justify-content: center;
  align-items: center;

  background: #fafafa;
`;

export const ButtonDemage = styled.TouchableOpacity`
  width: 50%;
  height: 68px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  justify-content: center;
  align-items: center;

  background: #202128;
`;

export const ButtonText = styled.Text`
  font-size: 36px;
  line-height: 42px;
  font-weight: 600;

  color: white;
`;
