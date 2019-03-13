import React, { Fragment } from 'react';
import {
  YellowBox,
  StatusBar,
} from 'react-native';

import 'config/reactotron';
import Routes from 'routes';
import { colors } from 'styles';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Warning: jumpToIndex(...) is deprecated', '']);

const App = () => {
  return (
    <Fragment>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Routes />
    </Fragment>
  );
}


export default App;
