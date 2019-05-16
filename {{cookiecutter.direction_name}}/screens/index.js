import {
  createAppContainer, createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';

import HomeScreen from './HomeScreen';
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
});

export default createAppContainer(createSwitchNavigator({
  Main: HomeStack,
}));
