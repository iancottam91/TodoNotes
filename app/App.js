import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './containers/HomeScreen';
import CreateScreen from './containers/CreateScreen';

export default App = StackNavigator({
  Home: { screen: HomeScreen },
  Create: { screen: CreateScreen},
});