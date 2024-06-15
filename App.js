import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome, HomeScreen } from "./screens";
import Tab from "./components/Tab"
// import Home from './screens/Home';

// import { AuthProvider } from './screens/context/AuthContext';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    // <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Tab'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
           <Stack.Screen
          name="Tab"
          component={Tab}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
       <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
    // </AuthProvider>
  );
}