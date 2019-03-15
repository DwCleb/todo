import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';
import { colors } from 'styles';

import { Avatar } from 'react-native-elements';

const Task = (props) => {
  const {
    id,
    date,
    hour,
    title,
    status,
    imageURL,
  } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.taskContainer, {
          borderLeftColor: colors[status],
        }]}
      >
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <Avatar
              rounded
              source={{
                uri: imageURL,
              }}
              containerStyle={{ width: 38, height: 38, borderRadius: 100 }}
            />
          </View>
          <View style={{flexDirection: 'column', alignItems: 'flex-start', flex: 4}}>
            <Text style={styles.taskID}>
              Task
              {' ' + id}
            </Text>
            <Text style={styles.taskTitle}>
              {title}
            </Text>
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex:1 }}>
            <Text style={styles.deadline}>Deadline</Text>
            <Text style={styles.deadline}>
              {date + ' '}
              {hour}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Task;
