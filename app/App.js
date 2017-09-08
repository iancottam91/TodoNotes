import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './containers/HomeScreen';
import EditNoteScreen from './containers/EditNoteScreen';
import EditTodoScreen from './containers/EditTodoScreen';

export default App = StackNavigator({
  Home: { screen: HomeScreen },
  EditNote: { screen: EditNoteScreen},
  EditTodo: { screen: EditTodoScreen},
});