import React, { Component } from 'react';
import { DrawerActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { metrics } from 'styles';

import Icon from 'react-native-vector-icons/Ionicons';

import { TouchableOpacity, Text, Platform } from 'react-native';

//import Icon from 'react-native-vector-icons/FontAwesome';
import MenuIcon from 'components/MenuIcon';
import styles from './styles';

export default class HeaderLeft extends Component {

  render() {
    return (
      <TouchableOpacity style={{ marginLeft: metrics.baseMargin, width: 30, height: 30 }} activeOpacity={0.8}>
        {/* <<Icon name="exchange" size={18} style={styles.icon} /> */}
        <MenuIcon size={30} color="white"/>
      </TouchableOpacity>
    );
  }
}
