import Sound from 'react-native-sound';

Sound.setCategory('Ambient', true);

const buttonPress = new Sound(
  require('../theme/assets/sounds/healing_spell.mp3'),
  (error) => console.log(error),
);

export function playButtonPress() {
  buttonPress.play((success) => success && buttonPress.reset());
}
