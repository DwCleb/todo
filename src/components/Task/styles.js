import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  taskContainer: {
    borderLeftWidth: 5,
    borderLeftColor: colors.dead,
    borderWidth: 0.4,
    borderRightColor: colors.darkTransparent,
    borderTopColor: colors.darkTransparent,
    borderBottomColor: colors.darkTransparent,
    padding: metrics.basePadding * 0.9,
    marginTop: metrics.baseMargin - 5,
    width: metrics.screenWidth,
  },

  taskID: {
    fontSize: 11,
    color: colors.darkGrey,
  },

  taskTitle: {
    fontSize: 16,
    color: colors.darker,
    fontWeight: 'bold',
  },

  deadline: {
    fontSize: 10,
    color: colors.darkGrey,
  },

});

export default styles;
