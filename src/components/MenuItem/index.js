import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';
import TaskList from 'components/TaskList';
import TaskPage from 'components/TaskPage';
import TaskNew from 'components/TaskNew';
import TaskProgress from 'components/TaskProgress';
import TaskLate from 'components/TaskLate';
import Comment from 'components/Comment';

export default class MenuItem extends Component {
  transformToComponent = (component) => {
    switch (component) {
      case 'list':
        return <TaskList />;
        break;
      case 'page':
        return <TaskPage />;
        break;
      case 'new':
        return <TaskNew />;
        break;
      case 'progress':
        return <TaskProgress />;
        break;
      case 'late':
        return <TaskLate />;
        break;
      case 'comment':
        return <Comment />;
        break;

      default:
        return '';
        break;
    }
  }

  render() {
    const {
      icon,
      title,
    } = this.props;

    return(
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8} style={styles.iconContainer}>
          {this.transformToComponent(icon)}
          <Text style={styles.title}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
