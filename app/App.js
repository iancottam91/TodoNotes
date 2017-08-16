import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './containers/HomeScreen';
import CreateScreen from './containers/CreateScreen';
import CreateTodoScreen from './containers/CreateTodoScreen';

export default App = StackNavigator({
  Home: { screen: HomeScreen },
  Create: { screen: CreateScreen},
  CreateTodo: { screen: CreateTodoScreen},
});