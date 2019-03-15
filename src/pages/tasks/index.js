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
import Task from 'components/Task';
import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

class Tasks extends Component {

  state = {
    loading: false,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>All tasks</Text>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainer} bounces={false}>
          <Task id="01" imageURL="https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" title="Design wireframe" status="done" date="12/03" hour="12:30" />
          <Task id="02" imageURL="https://avatars3.githubusercontent.com/u/30187750?s=460&v=4" title="Developer Task" status="open" date="12/03" hour="12:30" />
          <Task id="03" imageURL="https://avatars1.githubusercontent.com/u/25140387?s=460&v=4" title="Drink water" status="open" date="12/03" hour="12:30" />
          <Task id="04" imageURL="https://avatars3.githubusercontent.com/u/34289440?s=460&v=4" title="Walk the dog" status="dead" date="12/03" hour="12:30" />
          <Task id="05" imageURL="https://avatars1.githubusercontent.com/u/35339873?s=460&v=4" title="Learn Python" status="done" date="12/03" hour="12:30" />
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
