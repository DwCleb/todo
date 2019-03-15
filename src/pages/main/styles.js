import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingRight: 80,
    paddingLeft: 80,
  },

  scrollView: {
    width: metrics.screenWidth,
  },

  scrollViewContentContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 33,
    justifyContent: 'center',
  },

});

export default styles;
