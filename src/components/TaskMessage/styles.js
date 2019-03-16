import { StyleSheet } from 'react-native';

import { metrics, colors, general } from 'styles';

const styles = StyleSheet.create({
  
  content:{
    height: 320,
    width: metrics.screenWidth * 0.9,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentView: {
    width: '100%',
    height: 72,
    padding: metrics.basePadding,
    alignItems: 'center',
    borderBottomWidth: 0.6,
    borderBottomColor: colors.blackTransparent,
  },
  
  title: {
    fontSize: 22,
    fontFamily: 'Montserrat-Regular',
    color: colors.dark,
    marginTop: metrics.baseMargin,
    width: '60%',
    textAlign: 'center',
    flexWrap: 'wrap',
  },

  confirmButton: {
    backgroundColor: colors.secondary,
    width: 95,
    height: 40,
    justifyContent: 'center',
    marginTop: metrics.baseMargin * 2,
  },
  
  confirmText: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'Montserrat-Bold',
  },
});

export default styles;
