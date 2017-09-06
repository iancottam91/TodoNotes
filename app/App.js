import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './containers/HomeScreen';
import CreateScreen from './containers/CreateScreen';
import EditTodoScreen from './containers/EditTodoScreen';

export default App = StackNavigator({
  Home: { screen: HomeScreen },
  Create: { screen: CreateScreen},
  EditTodo: { screen: EditTodoScreen},
});