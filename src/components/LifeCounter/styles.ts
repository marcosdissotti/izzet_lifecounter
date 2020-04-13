import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

export const Life = styled.Text`
  color: white;
  font-size: 144px;
`;

export const LifeWrapper = styled(LinearGradient)`
  width: 100%;
  height: 420px;
  margin-top: 20px;
  border-radius: 50px;

  align-items: center;
  justify-content: center;

  background: #202128;
`;

export const Lottie = styled(LottieView)`
  color: red;
`;
