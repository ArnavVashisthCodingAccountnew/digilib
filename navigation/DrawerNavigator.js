import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';


import StackNavigator from './StackNavigator';
import Logout from '../screens/Logout';

import CustomDrawer from './CustomDrawer';


const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator  drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: '#1c0f24',
      drawerActiveTintColor: "white",
      drawerInactiveTintColor: "black",
      drawerLabelStyle: {
        fontSize: 17,
      },}}>
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{
          headerShown: false,
        }}
      />
   
     
      <Drawer.Screen
        name="Logout"
        component={Logout}
       
      />
    </Drawer.Navigator>
  );
};


export default DrawerNavigator;
  



