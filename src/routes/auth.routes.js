import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import  SignUp  from '../pages/SignUp';  // Verifique o caminho de importação

// Criando a instância do stack navigator
const Stack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      {/* Defina cada tela com 'Stack.Screen' */}
      <Stack.Screen
        name="SignIn"
        component={SignIn} // Passando o componente para a propriedade 'component'
        options={{ headerShown:false }} // Opcional: Definindo título da tela
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp} 
        options={{headerStyle:{
          backgroundColor: '#83e34a',
          borderBottomWidth:1,
          borderBottomColor:'#00b94a'
        },
      headerTintColor: '#FFF',
      headerTitle: 'Voltar'
      }}
        />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
