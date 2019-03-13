import React, { Component } from 'react';
import { DrawerActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { metrics } from 'styles';

import Icon from 'react-native-vector-icons/Ionicons';

import { TouchableOpacity, Text, Platform } from 'react-native';

//import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class HeaderLeft extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  iconName = (name) => {
    const newName = (Platform.OS === 'ios') ? (`ios-${name}`) : (`md-${name}`);
    return newName;
  }

  openDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  }

  render() {
    return (
      <TouchableOpacity style={{ marginLeft: metrics.baseMargin, width: 30, height: 30 }} activeOpacity={0.8} onPress={ () => { this.openDrawer(); }}>
        {/* <<Icon name="exchange" size={18} style={styles.icon} /> */}
        <Icon name={ this.iconName('menu') } size={30} color="white"/>
      </TouchableOpacity>
    );
  }
}
