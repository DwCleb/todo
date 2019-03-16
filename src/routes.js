import React from 'react';
import {
  StackNavigator,
  TabNavigator,
  TabBarTop,
} from 'react-navigation';

import HeaderLeft from 'components/HeaderLeft';
import HeaderRight from 'components/HeaderRight';
import Login from 'pages/login';
import Main from 'pages/main';
import Tasks from 'pages/tasks';
import { colors } from 'styles';

const MainTab = TabNavigator({
  Home: { screen: Main },
  Tasks: { screen: Tasks },
}, {
  tabBarComponent: TabBarTop,
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    upperCaseLabel: false,
    showIcon: false,
    showLabel: false,
    activeTintColor: colors.white,
    inactiveTintColor: colors.whiteTransparent,
    labelStyle: {
      color: colors.secondary,
      fontWeight: 'bold',
    },
    indicatorStyle: {
      backgroundColor: colors.secondary,
      height: 8,
    },
    style: {
      backgroundColor: colors.white,
      height: 8,
    },
  },
});


const LoginStack = StackNavigator({
  Login: { screen: Login },
}, {
  initialRouteName: 'Login',
  navigationOptions: () => ({
    header: null,
  }),
});

const Stack = StackNavigator({
  Main: { screen: MainTab },
}, {
  initialRouteName: 'Main',
  navigationOptions: () => ({
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
    title: 'Hello!',
    headerLeft: <HeaderLeft />,
    headerRight: <HeaderRight />,
  }),
});

const MainNavigator = StackNavigator({
  LoginStack,
  Stack,
}, {
  initialRouteName: 'LoginStack',
  navigationOptions: () => ({
    header: null,
  }),
});

const Routes = MainNavigator;
export default Routes;
