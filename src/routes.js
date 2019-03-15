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
      height: 85,
    },
    headerTitleStyle: {
      color: colors.white,
      fontSize: 24,
      flex: 1,
      textAlign: 'left',
      fontFamily: 'Montserrat-Regular',
    },
    headerTintColor: colors.white,
  },
});

const Routes = MainNavigator;
export default Routes;
