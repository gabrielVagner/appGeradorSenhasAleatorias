import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home} from '../pages/home';
import {Passwords} from '../pages/passwords';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home} 
        options={{
            headerShown: false,
        
        }}
      />
      <Tab.Screen
        name="Passwords"
        component={Passwords}
        options={{
            headerShown: false,
        
        }}
      />
    </Tab.Navigator>
  );
}