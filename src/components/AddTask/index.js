import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

import styles from './styles';

class AddTask extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
  };

  state = {

  }

  render() {
    const {
      isVisible,
    } = this.props;

    return (
      <Modal
        isVisible={isVisible}
        style={styles.modal}
      >
      </Modal>
    );
  }
}

export default AddTask;
