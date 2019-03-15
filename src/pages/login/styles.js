import { StyleSheet } from 'react-native';

import { metrics, colors, general } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: colors.primary,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  
  intersecao1: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    right: - (metrics.basePadding * 2),
    top: - (metrics.basePadding * 2),
  },

  intersecao2: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    left: - (metrics.basePadding * 2),
    bottom: - (metrics.basePadding * 3),
  },
  
  agrupar1: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    left: - (metrics.basePadding * 4),
    top: - (metrics.basePadding * 3),
  },

  agrupar2: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    right: - (metrics.basePadding * 3.5),
    bottom: - (metrics.basePadding * 7),
  },

  contentView: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    ...general.title,
    marginBottom: 25,
    marginTop: -25,
  },
  
  titleG: {
    ...general.title,
    marginTop: -165,
    color: colors.secondary,
    fontSize: 65,
    fontWeight: 'bold',
  },
  
  titleP: {
    ...general.title,
    marginTop: -171,
    color: colors.secondary,
    fontSize: 65,
    fontWeight: 'bold',
  },

  logoImage: {
    flex: 10,
    justifyContent: 'center', // horizontal
    alignItems: 'center', // vertical
    flexDirection: 'row',
    marginBottom: metrics.baseMargin * 6,
  },

  logo: {
    width: metrics.screenWidth,
    height: 150,
  },

  input: {
    ...general.input,
    color: colors.white,
    backgroundColor: colors.transparent,
    borderWidth: 2,
    borderLeftColor: colors.transparent,
    borderTopColor: colors.transparent,
    borderRightColor: colors.transparent,
    paddingHorizontal: metrics.basePadding - 10,
    marginBottom: metrics.baseMargin + 5,
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
  },

  button: {
    ...general.button,
    marginTop: 20,
  },

  buttonText: {
    color: colors.white,
    fontWeight: '300',
    fontSize: 20,
  },

  facebookButton: {
    backgroundColor: colors.facebook,
    borderRadius: metrics.baseRadius,
    height: 58,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },

  facebookButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 15,
  },

  facebookIcon: {
    marginRight: 20,
    color: colors.white,
  },

  signUpView : {
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  signUpButton: {
    backgroundColor: colors.transparent,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  signUpButtonText: {
    color: colors.light,
    textAlign: 'center',
  },

});

export default styles;
