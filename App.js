import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';


import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';
import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#F0F4FF' barstyle= 'dark-content'/>
      <Routes/>
      </AuthProvider>
      
    </NavigationContainer>
  );
}

