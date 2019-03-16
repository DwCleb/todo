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
import { Avatar } from 'react-native-elements';

import styles from './styles';

class AddTask extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    toggleMessageModal: PropTypes.func.isRequired,
  };

  state = {
    switch: false,
  }

  toggleSwitch = () => {
    const { switchValue } = this.state;
    this.setState({ switchValue: !switchValue });
  }

  render() {
    const {
      isVisible,
      toggleModal,
      toggleMessageModal,
    } = this.props;

    const { switchValue } = this.state;
    return (
      <Modal
        isVisible={isVisible}
      >
       <View style={styles.content}>

        <View style={styles.contentView}>
          <Text style={styles.title}>New Task</Text>
        </View>

        <View style={styles.contentView}>
          <Text style={styles.taskTitle}>Task 06</Text>
          <Text style={styles.taskText}>Website design</Text>
        </View>

        <View style={styles.contentView}>
          <Text style={styles.memberTitle}>Member</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', flex: 2,marginLeft: -5}}>
            <Avatar
              rounded
              source={{
                uri:
                  'https://avatars3.githubusercontent.com/u/30187750?s=460&v=4',
              }}
              containerStyle={{ width: 36, height: 36, marginHorizontal: 5}}
            />
            <Avatar
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
              containerStyle={{ width: 36, height: 36, marginHorizontal: 5 }}
            />
            </View>
            <View style={{justifyContent: 'center', flex: 1, marginRight: -15,}}>
              <TouchableOpacity
                style={styles.addMemberButton}
              >
                <Text style={styles.addMemberText}>add members</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.contentView}>
          <Text style={styles.deadlineTitle}>Deadline</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', flex: 4, marginLeft: -5}}>
              <TextInput value="22/02" style={{marginHorizontal: 5, borderWidth: 0.8, borderColor: '#5C6BC0', borderRadius: 5, width: 60, padding: 10}} maxLength={5}/>
              <TextInput value="21:00" style={{marginHorizontal: 5, borderWidth: 0.8, borderColor: '#DDD', borderRadius: 5, width: 60, padding: 10}} maxLength={5}/>
            </View>
            <View style={{justifyContent: 'center', flex: 1, flexDirection: 'column'}}>
            <Switch
              onValueChange={ () => this.toggleSwitch}
              value={switchValue}
              ios_backgroundColor="#00E5FF"
              trackColor={
                {
                  true: '#00E5FF'
                }
              }
            />
            <Text style={{fontSize: 8, marginLeft: -5, marginTop: 2, textAlign: 'center'}}>important</Text>
            </View>
          </View>
        </View>

        <View style={styles.contentFooterView}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={ () => toggleModal() }
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={ () => toggleMessageModal() }
          >
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </View>

       </View>
      </Modal>
    );
  }
}

export default AddTask;
