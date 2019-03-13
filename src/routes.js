import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from 'pages/login';
import Main from 'pages/main';
import { colors } from 'styles';

const MainNavigator = StackNavigator({
  Login: { screen: Login },
  Main: { screen: Main },
}, {
  initialRouteName: 'Login',
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.white,
    },
    headerTintColor: colors.white,
  },
});

const Routes = MainNavigator;
export default Routes;
