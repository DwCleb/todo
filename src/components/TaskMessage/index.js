import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  Switch,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import Beer from 'components/Beer';

import styles from './styles';

class TaskMessage extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    toggleMessageModal: PropTypes.func.isRequired,
  };


  toggleSwitch = () => {
    const { switchValue } = this.state;
    this.setState({ switchValue: !switchValue });
  }

  render() {
    const {
      isVisible,
      toggleMessageModal,
    } = this.props;

    return (
      <Modal
        isVisible={isVisible}
      >
       <View style={styles.content}>

        <Beer />
        <Text style={styles.title}>Task successfully added!</Text>

        <TouchableOpacity
          style={styles.confirmButton}
          onPress={ () => toggleMessageModal() }
        >
          <Text style={styles.confirmText}>OK</Text>
        </TouchableOpacity>
       </View>
      </Modal>
    );
  }
}

export default TaskMessage;
