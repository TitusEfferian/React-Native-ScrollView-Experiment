import { createStackNavigator, createAppContainer } from 'react-navigation';
import Japan from './Japan';
import App from '../App';
import Home from './Home';

const RootStack = createStackNavigator(
    {
        JapanScreen: Japan,
        HomeScreen: Home
    },
    {
        initialRouteName: 'HomeScreen',

    }
);

export default createAppContainer(RootStack)