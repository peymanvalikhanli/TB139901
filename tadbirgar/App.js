import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from "./src/page/home"; 
import sejam from "./src/page/sejam"; 
import Register from "./src/page/register"; 

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Register: {screen: Register},
  Sejam: {screen: sejam},
  Register: {screen: Register},
},{
  headerMode: "none"
});

const App = createAppContainer(MainNavigator);

export default App;
