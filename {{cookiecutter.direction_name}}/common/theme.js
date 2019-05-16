import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  primaryColor: '{{cookiecutter.primaryColor}}',
  secondColor: '{{cookiecutter.secondColor}}',
  backgroundColor: '{{cookiecutter.backgroundColor}}',
  textColor: '{{cookiecutter.textColor}}',
  width,
  height,
};
