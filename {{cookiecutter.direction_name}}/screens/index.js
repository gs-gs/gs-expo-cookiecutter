import {
  createAppContainer, createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';

import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import theme from '../common/theme';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      headerStyle: {
        backgroundColor: theme.primaryColor,
      },
    },
  },
  Settings: {
    screen: SettingScreen,
    navigationOptions: {
      title: 'Setting',
      headerStyle: {
        backgroundColor: theme.primaryColor,
      },
    },
  },
});

export default createAppContainer(createSwitchNavigator({
  Main: HomeStack,
}));
