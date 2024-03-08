import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Header from './components/header/Header';
import Details from './screens/Details';
import { COLORS } from './constants/theme';
import About from './screens/About'
import Search from './screens/Search';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          header: (props) => <Header {...props} backgroundColor={COLORS.light.primary} />
        }}
      >
        <Stack.Screen name='Pokedéx' component={Home} />
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='About' component={About} />
        <Stack.Screen name='Search' component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
