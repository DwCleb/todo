import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primaryTransparent,
    borderWidth: 0.7,
    borderRadius: metrics.baseRadius * 4,
    padding: metrics.basePadding,
    marginTop: 10,
    width: 124.71,
    height: 124.71,
  },

  title: {
    textAlign: 'center',
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    color: colors.primary,
    marginTop: metrics.baseMargin - 10,
  },

});

export default styles;
