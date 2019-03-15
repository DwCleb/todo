/**
 * Tasks
 *
 * @author: Cleber
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
}  from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';
import MenuItem from 'components/MenuItem';
import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

class Tasks extends Component {

  state = {
    loading: false,
  };

  navigateOnPress(route) {
    const { navigation } = this.props;
    navigation.navigate(route);
  }

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>All tasks</Text>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainer} bounces={false}>
          <MenuItem navigation={navigation} onPress={() => this.navigateOnPress('')} route="" icon="ticket" />
          <MenuItem navigation={navigation} onPress={() => this.navigateOnPress('')} route="" icon="list-alt"  />
          <MenuItem navigation={navigation} onPress={() => this.navigateOnPress('')} route="" icon="car" />
          <MenuItem navigation={navigation} onPress={() => this.navigateOnPress('')} route="" icon="money"  />
          <MenuItem navigation={navigation} onPress={() => this.navigateOnPress('')} route="" icon="plus" />
          <MenuItem navigation={navigation} onPress={() => this.navigateOnPress('')} route="" icon="home"  />
        </ScrollView>
        <TouchableOpacity
          style={styles.addButton}
        >
          <Icon name="plus" size={25} color="#FFFFFF" />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default Tasks;
