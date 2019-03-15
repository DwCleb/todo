import React, { Component } from 'react';
import { DrawerActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { metrics } from 'styles';

import Icon from 'react-native-vector-icons/Ionicons';

import { TouchableOpacity, Text, Platform } from 'react-native';

//import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';

import styles from './styles';

export default class HeaderRight extends Component {

  render() {
    return (
      <TouchableOpacity style={{ marginRight: metrics.baseMargin * 2 }} activeOpacity={0.8}>
        <Avatar
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          containerStyle={{ width: 38, height: 38 }}
        />
      </TouchableOpacity>
    );
  }
}
