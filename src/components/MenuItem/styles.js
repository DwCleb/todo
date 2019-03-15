import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: metrics.basePadding * 1.5,
    width: metrics.screenWidth / 4,
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.light,
    borderWidth: 1,
    borderRadius: metrics.baseRadius * 4,
    padding: metrics.basePadding,
    marginTop: metrics.baseMargin / 2,
    width: 124.71,
    height: 124.71,
  },

});

export default styles;
