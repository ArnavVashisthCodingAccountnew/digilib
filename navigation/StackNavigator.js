import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Q from '../screens/quataum';
import U from '../screens/unstoppableus';
import Roald from '../screens/roaldahl';
import Linus from '../screens/linus';
import Sapiens from '../screens/sapiens';
import Ger from '../screens/gernimo';
import Rick from '../screens/rick';
import David from '../screens/david';
import Eighty from '../screens/80';
import Boy from '../screens/boy';
import Kalam from '../screens/kalam';
import Hack from '../screens/hack';
import Iam from '../screens/iam';
import JS from '../screens/js';
import Cho1 from '../screens/catologue';
import Cart from '../cart';

import Dash from '../screens/dashboard';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dash"  options={{
      headerShown: false,
    }}>
      
      <Stack.Screen
        name="Dash"
        component={Dash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Cat" component={Cho1}      options={{
          headerShown: false,
        }} />
        <Stack.Screen name="Quant" component={Q}  />
        <Stack.Screen name="US" component={U} />
        <Stack.Screen name="Dahl" component={Roald} />
        <Stack.Screen name="Linus" component={Linus} />
        <Stack.Screen name="Sapiens" component={Sapiens} />
        <Stack.Screen name="Gernimo" component={Ger} />
        <Stack.Screen name="Rick" component={Rick} />
        <Stack.Screen name="David" component={David} />
        <Stack.Screen name="80" component={Eighty} />
        <Stack.Screen name="Boy" component={Boy} />
        <Stack.Screen name="Kalam" component={Kalam} />
        <Stack.Screen name="Hack" component={Hack} />
        <Stack.Screen name="Walt" component={Iam} />
        <Stack.Screen name="JS" component={JS} />
       

        <Stack.Screen name="C" component={Cart} />
               
     

    </Stack.Navigator>
  );
};

export default StackNavigator;
