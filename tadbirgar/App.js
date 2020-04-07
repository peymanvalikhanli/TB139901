import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from "./src/page/home"; 
import Sejam from "./src/page/sejam"; 

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Sejam: {screen: Sejam},
},{
  headerMode: "none"
});

const App = createAppContainer(MainNavigator);

export default App;
