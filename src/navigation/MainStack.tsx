import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Posts from '../screens/Posts/Posts';
import BottomTabs from './BottomTabs';
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen
        name={"BottomTabs"}
        component={BottomTabs}
      />
    {/* <Stack.Screen name="Tabroutes" component={Home} />
    <Stack.Screen name="Posts" component={Posts} /> */}
  </Stack.Navigator>
  )
}

export default MainStack