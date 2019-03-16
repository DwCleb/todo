/**
 * Main menu
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
import { SafeAreaView, NavigationActions, StackActions } from 'react-navigation';
import PropTypes from 'prop-types';
import MenuItem from 'components/MenuItem';
import AddTask from 'components/AddTask';
import TaskMessage from 'components/TaskMessage';
import styles from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

class Main extends Component {

  state = {
    loading: false,
    modalVisible: false,
    modalMessageVisible: false,
  };


  toggleModal = () => {
    const { modalVisible } = this.state;
    this.setState({ modalVisible: !modalVisible});
  }

  toggleMessageModal = () => {
    const { modalMessageVisible } = this.state;
    this.setState({
      modalVisible: false,
    });
    setTimeout(() => {
      this.setState({
        modalMessageVisible: !modalMessageVisible,
      });
    }, 500);
  }

  render() {
    const { modalVisible, modalMessageVisible } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.title}>Home</Text>
        </View>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainer} bounces={false}>
          <MenuItem icon="list" title="Task List"/>
          <MenuItem icon="page" title="Task Page"/>
          <MenuItem icon="new" title="New Task"/>
          <MenuItem icon="progress" title="Task Progress"/>
          <MenuItem icon="late" title="Late Task"/>
          <MenuItem icon="comment" title="Comment"/>
        </ScrollView>
        <TouchableOpacity
          style={styles.addButton}
          onPress={ () => this.toggleModal()}
        >
          <Icon name="plus" size={25} color="#FFFFFF" />
        </TouchableOpacity>

        <AddTask 
          isVisible={modalVisible}
          toggleModal={this.toggleModal}
          toggleMessageModal={this.toggleMessageModal}
        />
        <TaskMessage 
          isVisible={modalMessageVisible}
          toggleMessageModal={this.toggleMessageModal}
        />
      </SafeAreaView>
    );
  }
}

export default Main;
